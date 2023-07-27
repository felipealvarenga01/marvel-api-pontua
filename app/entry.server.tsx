import type { EntryContext } from '@remix-run/node';
import { Response } from '@remix-run/node';
import { RemixServer } from '@remix-run/react';
import { error } from 'console';
import isbot from 'isbot';
import { renderToPipeableStream } from 'react-dom/server';
import { PassThrough } from 'stream';
import { Head } from './root';
import { renderHeadToString } from './utils/hydratation-fix';

const ABORT_DELAY = 5000;

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  const callbackName = isbot(request.headers.get('user-agent'))
    ? 'onAllReady'
    : 'onShellReady';
  let didError = false;

  return new Promise((resolve, reject) => {
    const { pipe, abort } = renderToPipeableStream(
      <RemixServer context={remixContext} url={request.url} />,
      {
        [callbackName]: () => {
          const head = renderHeadToString({ request, remixContext, Head });
          const body = new PassThrough();

          responseHeaders.set('Content-Type', 'text/html');

          resolve(
            new Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode,
            }),
          );

          body.write(
            `<!DOCTYPE html><html><head>${head}</head><body><div id="root">`,
          );
          pipe(body);
          body.write(`</div></body></html>`);
        },
        onShellError: (err: unknown) => {
          reject(err);
        },
        onError: (err: unknown) => {
          didError = true;
          error(err);
        },
      },
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
