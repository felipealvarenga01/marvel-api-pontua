import type { ActionArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { getInfoEventById } from '~/server/application/get-info-event/get-info-event.server';

export function loader() {
  return json('ok');
}

export async function action({ request }: ActionArgs) {
  const { eventId } = await request.json();
  console.table({ eventId });
  const data = await getInfoEventById({ urlPath: `/events/${eventId}` });

  console.table({ data });

  return json(data);
}
