import md5 from 'md5';
import {
  getMarvelPrivateKey,
  getMarvelPublicKey,
  getMarvelURL,
} from '~/server/infra/get-envs';
import { ServerRequestBuilder } from '~/server/infra/request-builder';

type InfoMarvelProps = {
  urlPath: string;
  params?: {
    limit?: string;
    offset?: string;
  };
};

export async function getInfoMarvel({ urlPath, params }: InfoMarvelProps) {
  const marvelURL = getMarvelURL();
  const marvelPublicKey = getMarvelPublicKey();
  const marvelPrivateKey = getMarvelPrivateKey();
  const timestamp = Number(new Date());
  const hash = md5(timestamp + marvelPrivateKey + marvelPublicKey);
  const pathURL = `${urlPath}`;

  return new ServerRequestBuilder({ baseUrl: marvelURL })
    .withMethod('GET')
    .withUrl(pathURL)
    .withQueryString({
      ...params,
      apikey: marvelPublicKey,
      hash,
      ts: String(timestamp),
    })
    .call();
}
