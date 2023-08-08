import type { ActionArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { getInfoHeroes } from '~/server/application/get-info-hero/get-info-heroes.server';

export function loader() {
  throw json({ message: 'Invalid request method' }, { status: 400 });
}

export async function action({ request }: ActionArgs) {
  const { limit, offset } = await request.json();
  const data = await getInfoHeroes({
    urlPath: '/characters',
    params: { limit, offset },
  });

  return json(data);
}
