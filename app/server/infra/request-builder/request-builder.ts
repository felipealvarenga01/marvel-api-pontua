import type { Logger } from 'winston';

export type Methods = 'POST' | 'GET' | 'DELETE' | 'PUT' | 'PATCH';

export type StatusCodeCheck = {
  status: number;
  message: string;
};

export enum ReturnType {
  full = 'full',
}

/**
 * Builder para requisições HTTP
 * @typeparam T - Corpo da resposta (response)
 * @typeparam K - Corpo da requisição (payload). Opcional. Requerido apenas se usar `withBody`.
 * @typeparam C - Corpo da resposta (response) após manipulação do `withDataChange`. Opcional.
 * Requerido apenas se a estrutura do tipo mudar no `withDataChange`.
 */

export abstract class RequestBuilder<
  T,
  K extends Record<string, any> | undefined = undefined,
  C = T,
> {
  private readonly headers = new Headers();

  private readonly baseUrl: string;

  private url = '';

  private queryString = '';

  private body?: K;

  private formData?: K;

  private method: Methods = 'GET';

  private errorMessage = 'common.errors.badRequest';

  private readonly internalLogger: Logger | Console;

  private readonly contentType = 'Content-Type';

  private static tryGetJson<J>(resp: Response) {
    return new Promise<J>((resolve) => {
      if (resp) {
        resp
          .json()
          .then((json: J) => resolve(json))
          .catch(() => resolve({} as J));
      } else {
        resolve({} as J);
      }
    });
  }

  constructor({
    baseUrl,
    logger,
  }: {
    baseUrl: string;
    logger: Logger | Console;
  }) {
    this.baseUrl = baseUrl;
    if (!this.baseUrl) {
      throw new Error('baseUrl on RequestBuilder constructor is required');
    }
    this.headers.set(this.contentType, 'application/json;charset=UTF-8');
    this.internalLogger = logger;
  }

  /** Define se o cabeçalho da requisição conterá `Content-Type application/json;charset=UTF-8` */
  withHeaders(headers: Record<string, string>): RequestBuilder<T, K, C> {
    for (const headerName in headers) {
      this.headers.set(headerName, headers[headerName]);
    }

    return this;
  }

  /** Define a parte subsequente da URL da requisição */
  withUrl(url: string): RequestBuilder<T, K, C> {
    this.url = url;

    return this;
  }

  /** Define a query string da requisição */
  withQueryString<
    Q extends
      | string
      | Record<string, string>
      | string[][]
      | URLSearchParams
      | undefined,
  >(query: Q): RequestBuilder<T, K, C> {
    this.queryString = new URLSearchParams(query).toString();

    return this;
  }

  /** Define o verbo (`method`) da requisição. Padrão `GET`. */
  withMethod(method: Methods): RequestBuilder<T, K, C> {
    this.method = method;

    return this;
  }

  /** Define o corpo (`body`) da requisição. */
  withBody(body: K): RequestBuilder<T, K, C> {
    this.body = body;

    return this;
  }

  /** Define envio de FormData no (`body`) da requisição. */
  withFormData(formData: K): RequestBuilder<T, K, C> {
    this.formData = formData;
    this.headers.delete(this.contentType);

    return this;
  }

  /** Define a mensagem de erro a ser lançada com `throw` caso backend não retorne nenhuma mensagem tratada. */
  withErrorMessage(errorMessage: string): RequestBuilder<T, K, C> {
    this.errorMessage = errorMessage;

    return this;
  }

  private async checkResponseStatus(
    response: Response,
    returnFullResponse: boolean,
  ) {
    if (!response.ok && !returnFullResponse) {
      let responseBody: any;
      try {
        const isJson = Boolean(
          response.headers.get(this.contentType)?.includes('application/json'),
        );
        responseBody = isJson ? await response.json() : {};
      } catch (e) {
        const unexpectedError =
          'An unexpected error has occurred. Please try again later.';
        this.internalLogger.error(unexpectedError);
        throw new Error(unexpectedError);
      }
      this.internalLogger.error(
        `checkResponseStatus responseBody = ${JSON.stringify(
          responseBody,
        )} on try sent body ${JSON.stringify(this.body)}`,
      );

      throw new Error(this.errorMessage);
    }
  }

  private objectToFormData(obj: K) {
    const formData = new FormData();
    for (const key in obj) {
      formData.append(key, obj[key]);
    }

    return formData;
  }

  private mountUrl() {
    const slash = this.url ? '/' : '';
    const qs = this.queryString ? '?' : '';

    return `${this.baseUrl.replace(/\/$/, '')}${slash}${this.url.replace(
      /^\//,
      '',
    )}${qs}${this.queryString.replace(/^\?/, '')}`;
  }

  /** Monta a requisição, dispara para o backend.
   *
   * @returns Uma `promise` de `T`.
   */

  async call(): Promise<T>;

  async call(
    returnType: ReturnType.full,
  ): Promise<{ response: Response; json: Awaited<T> }>;

  async call(returnType?: ReturnType) {
    const returnFullResponse = returnType === ReturnType.full;

    const init: RequestInit = {
      method: this.method,
    };
    if (this.body !== undefined) {
      init.body = JSON.stringify(this.body);
    }
    if (this.formData !== undefined) {
      init.body = this.objectToFormData(this.formData);
    }

    init.headers = this.headers;

    let response: Response;
    try {
      this.internalLogger.info(
        `Send fetch method ${this.method} to url ${this.mountUrl()}`,
      );
      response = await fetch(this.mountUrl(), init);
    } catch (error) {
      this.internalLogger.error(`Error on fetch ${error}`);
      throw new Error(this.errorMessage);
    }

    await this.checkResponseStatus(response, returnFullResponse);

    const json = await RequestBuilder.tryGetJson<T>(response);

    if (returnFullResponse) {
      return { response, json };
    }

    return json;
  }
}
