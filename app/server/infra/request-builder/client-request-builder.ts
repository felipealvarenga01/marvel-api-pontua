import { RequestBuilder } from './request-builder';

/**
 * Builder para requisições HTTP
 * @typeparam T - Corpo da resposta (response)
 * @typeparam K - Corpo da requisição (payload). Opcional. Requerido apenas se usar `withBody`.
 * @typeparam C - Corpo da resposta (response) após manipulação do `withDataChange`. Opcional.
 * Requerido apenas se a estrutura do tipo mudar no `withDataChange`.
 */


export class ClientRequestBuilder<
  T,
  K extends Record<string, any> | undefined = undefined,
  C = T,
> extends RequestBuilder<T, K, C> {
  constructor({ baseUrl }: { baseUrl: string }) {
    super({ baseUrl, logger: console });
  }
}

