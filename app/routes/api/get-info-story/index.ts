import type { ActionArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { getInfoStoryById } from '~/server/application/get-info-story/get-info-story.server';

export function loader() {
  return json('ok');
}

export async function action({ request }: ActionArgs) {
  const { storyId } = await request.json();
  const data = await getInfoStoryById({ urlPath: `/stories/${storyId}` });

  return json(data);
}
