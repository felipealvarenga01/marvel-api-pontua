import type { ActionArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { getInfoSerieById } from '~/server/application/get-info-series/get-info-serie.server';

export function loader() {
  return json('ok');
}

export async function action({ request }: ActionArgs) {
  const { serieId } = await request.json();
  const data = await getInfoSerieById({ urlPath: `/series/${serieId}` });

  return json(data);
}
