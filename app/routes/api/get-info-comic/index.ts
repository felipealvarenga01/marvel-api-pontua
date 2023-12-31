import type { ActionArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { getInfoComicById } from '~/server/application/get-info-comic/get-info-comic.server';

export function loader() {
  throw json({ message: 'Invalid request method' }, { status: 400 });
}

export async function action({ request }: ActionArgs) {
  const { comicId } = await request.json();
  const data = await getInfoComicById({ urlPath: `/comics/${comicId}` });

  return json(data);
}
