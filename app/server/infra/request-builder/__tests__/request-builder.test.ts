import type { Mock } from 'vitest';
import { vi } from 'vitest';
import { ClientRequestBuilder, ReturnType, ServerRequestBuilder } from '../';

describe('request-builder', () => {
  const BASE_URL = 'http://url';
  const CONTENT_TYPE = 'content-type';
  const CONTENT_JSON = 'application/json;charset=UTF-8';
  const COMMON_ERROR = 'common.errors.badRequest';
  const contructorObj = {
    baseUrl: BASE_URL,
  };
  
  it('props defaults', () => {
    const request: any = new ServerRequestBuilder(contructorObj);
    
    expect(request.url).toEqual('');
    expect(request.queryString).toEqual('');
    expect(request.method).toEqual('GET');
    expect(request.baseUrl).toEqual(BASE_URL);
  });
  
  it('should throw exception when there is not baseUrl', async () => {
    expect(
      () => new ServerRequestBuilder<unknown, never>({ baseUrl: '' }),
    ).toThrow('baseUrl on RequestBuilder constructor is required');
  });
  
  it('tryGetJson', async () => {
    const body = { value: 'value' };
    const responseOk = new Response(JSON.stringify(body));
    const responseCatch = new Response();
    
    const ok = await (ServerRequestBuilder as any).tryGetJson(responseOk);
    expect(ok).toStrictEqual(body);
    
    const rCatch = await (ServerRequestBuilder as any).tryGetJson(
      responseCatch,
    );
    expect(rCatch).toStrictEqual({});
    
    const empty = await (ServerRequestBuilder as any).tryGetJson();
    expect(empty).toStrictEqual({});
  });
  
  it('withUrl', () => {
    const request: any = new ServerRequestBuilder(contructorObj).withUrl(
      'sub-url',
    );
    
    expect(request.url).toEqual('sub-url');
  });
  
  it('withHeaders', () => {
    const request: any = new ServerRequestBuilder(contructorObj)
      .withHeaders({
        a: 'b',
        c: 'd',
      })
      .withHeaders({ a: 'b' });
    
    expect(Array.from(request.headers.entries())).toEqual([
      ['a', 'b'],
      ['c', 'd'],
      [CONTENT_TYPE, CONTENT_JSON],
    ]);
  });
  
  const qs = 'abc=123';
  it('withQueryString string', () => {
    const request: any = new ServerRequestBuilder(
      contructorObj,
    ).withQueryString(qs);
    
    expect(request.queryString).toEqual(qs);
  });
  
  it('withErrorMessage', () => {
    const request: any = new ServerRequestBuilder(contructorObj);
    
    expect(request.errorMessage).toEqual(COMMON_ERROR);
    
    request.withErrorMessage('error.custom');
    
    expect(request.errorMessage).toEqual('error.custom');
  });
  
  it('withQueryString obj', () => {
    const request: any = new ServerRequestBuilder(
      contructorObj,
    ).withQueryString({
      abc: '123',
    });
    
    expect(request.queryString).toEqual(qs);
  });
  
  it('withMethod', () => {
    const request: any = new ServerRequestBuilder(contructorObj).withMethod(
      'POST',
    );
    
    expect(request.method).toEqual('POST');
  });
  
  it('withBody', () => {
    const body = {
      value: 123,
    };
    const request: any = new ServerRequestBuilder<any, any>(
      contructorObj,
    ).withBody(body);
    
    expect(request.body).toEqual(body);
  });
  
  it('withFile', () => {
    const request: any = new ServerRequestBuilder<unknown, { file: string }>(
      contructorObj,
    ).withFormData({
      file: 'file',
    });
    
    expect(request.formData).toEqual({
      file: 'file',
    });
  });
  
  it('mountUrl', () => {
    const request1: any = new ServerRequestBuilder(contructorObj)
      .withUrl('sub')
      .withQueryString('abc=123');
    const request2: any = new ServerRequestBuilder(contructorObj)
      .withUrl('/sub')
      .withQueryString('?abc=123');
    const request3: any = new ServerRequestBuilder(contructorObj);
    
    expect(request1.mountUrl()).toEqual(`${BASE_URL}/sub?abc=123`);
    
    expect(request2.mountUrl()).toEqual(`${BASE_URL}/sub?abc=123`);
    
    expect(request3.mountUrl()).toEqual(BASE_URL);
  });
  
  it('call principal flow', async () => {
    const responseOk = new Response(JSON.stringify({}), {
      status: 200,
    });
    global.fetch = vi.fn().mockResolvedValue(responseOk);
    
    const init = { method: 'GET' };
    
    const response = await new ServerRequestBuilder(contructorObj).call();
    
    expect(response).toEqual({});
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(BASE_URL, expect.objectContaining(init));
  });
  
  it('call when fetch has error', async () => {
    const errorMock = vi.fn();
    global.fetch = vi.fn().mockRejectedValue('deu ruim');
    const requestBuilder: any = new ServerRequestBuilder(contructorObj);
    requestBuilder['internalLogger'] = { error: errorMock, info: vi.fn() };
    
    await expect(() => requestBuilder.call()).rejects.toThrow(COMMON_ERROR);
    expect(errorMock).toBeCalledTimes(1);
    expect(errorMock).toBeCalledWith('Error on fetch deu ruim');
  });
  
  it('call in production environment must not have an agent', async () => {
    process.env.NODE_ENV = 'production';
    const responseOk = new Response(JSON.stringify({}), {
      status: 200,
    });
    global.fetch = vi.fn().mockResolvedValue(responseOk);
    
    await new ServerRequestBuilder(contructorObj).call();
    
    expect((fetch as Mock<any, any>).mock.calls[0][1].agent).toBeUndefined();
    process.env.NODE_ENV = 'test';
  });
  
  it('call with full response', async () => {
    const responseOk = new Response(JSON.stringify({}), {
      status: 200,
    });
    global.fetch = vi.fn().mockResolvedValue(responseOk);
    
    const { json, response } = await new ServerRequestBuilder(
      contructorObj,
    ).call(ReturnType.full);
    
    expect(json).toEqual({});
    expect(response).toEqual(
      expect.objectContaining({ ok: true, status: 200 }),
    );
  });
  
  it('call with body', async () => {
    const responseOk = new Response(JSON.stringify({}), {
      status: 200,
    });
    global.fetch = vi.fn().mockResolvedValue(responseOk);
    const body = { a: '1' };
    
    await new ServerRequestBuilder<unknown, typeof body>(contructorObj)
      .withBody(body)
      .call();
    
    expect(global.fetch).toBeCalledWith(
      expect.any(String),
      expect.objectContaining({
        body: JSON.stringify(body),
      }),
    );
  });
  
  it('call with formData', async () => {
    const responseOk = new Response(JSON.stringify({}), {
      status: 200,
    });
    global.fetch = vi.fn().mockResolvedValue(responseOk);
    const body = { a: '1' };
    const form = new FormData();
    form.append('b', '1');
    
    await new ServerRequestBuilder<unknown, typeof body>(contructorObj)
      .withFormData(body)
      .call();
    
    expect(global.fetch).toBeCalledWith(
      expect.any(String),
      expect.objectContaining({
        body: form,
      }),
    );
  });
  
  it('checkResponseStatus error when trying to access json from a response with no body', async () => {
    const errorMock = vi.fn();
    const headers = new Headers();
    headers.append(CONTENT_TYPE, CONTENT_JSON);
    const response = new Response(undefined, {
      status: 404,
      headers,
    });
    
    const requestBuilder: any = new ClientRequestBuilder(contructorObj);
    
    requestBuilder['internalLogger'] = { error: errorMock };
    
    await expect(requestBuilder.checkResponseStatus(response)).rejects.toThrow(
      'An unexpected error has occurred. Please try again later.',
    );
    
    expect(errorMock).toBeCalledTimes(1);
    expect(errorMock).toBeCalledWith(
      'An unexpected error has occurred. Please try again later.',
    );
  });
  
  it('checkResponseStatus when has responseBody', async () => {
    const errorMock = vi.fn();
    const headers = new Headers();
    headers.append(CONTENT_TYPE, CONTENT_JSON);
    const response = new Response(JSON.stringify({ a: 'b' }), {
      status: 404,
      headers,
    });
    
    const requestBuilder: any = new ClientRequestBuilder<
      unknown,
      { x: string }
    >(contructorObj).withBody({ x: 'y' });
    
    requestBuilder['internalLogger'] = { error: errorMock };
    
    await expect(() =>
      requestBuilder.checkResponseStatus(response),
    ).rejects.toThrow(COMMON_ERROR);
    
    expect(errorMock).toBeCalledTimes(1);
    expect(errorMock).toBeCalledWith(
      'checkResponseStatus responseBody = {"a":"b"} on try sent body {"x":"y"}',
    );
  });
  
  it('checkResponseStatus without json', async () => {
    const errorMock = vi.fn();
    const headers = new Headers();
    headers.append(CONTENT_TYPE, 'application/pdf');
    const response = new Response(undefined, { status: 404, headers });
    
    const requestBuilder: any = new ClientRequestBuilder(contructorObj);
    
    requestBuilder['internalLogger'] = { error: errorMock };
    
    await expect(() =>
      requestBuilder.checkResponseStatus(response),
    ).rejects.toThrow(COMMON_ERROR);
    
    expect(errorMock).toBeCalledTimes(1);
    expect(errorMock).toBeCalledWith(
      'checkResponseStatus responseBody = {} on try sent body undefined',
    );
  });
  
  it('objectToFormData convertion', async () => {
    const obj = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      age: 25,
      avatar: new File([''], 'avatar.png', { type: 'image/png' }),
    };
    const requestBuilder = new ClientRequestBuilder<unknown, typeof obj>(
      contructorObj,
    );
    
    const converted = requestBuilder['objectToFormData'](obj);
    
    expect(Array.from(converted.values())).toEqual([
      'John Doe',
      'john.doe@example.com',
      '25',
      expect.objectContaining({ _name: 'avatar.png' }),
    ]);
  });
});
