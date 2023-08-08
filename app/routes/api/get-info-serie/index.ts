import type { ActionArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { getInfoSerieById } from '~/server/application/get-info-serie/get-info-serie.server';

export function loader() {
  throw json({ message: 'Invalid request method' }, { status: 400 });
}

export async function action({ request }: ActionArgs) {
  const { serieId } = await request.json();
  const data = await getInfoSerieById({ urlPath: `/series/${serieId}` });

  return json(data);
}
