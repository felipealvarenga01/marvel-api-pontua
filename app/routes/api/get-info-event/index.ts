import type { ActionArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { getInfoEventById } from '~/server/application/get-info-event/get-info-event.server';

export function loader() {
  throw json({ message: 'Invalid request method' }, { status: 400 });
}

export async function action({ request }: ActionArgs) {
  const { eventId } = await request.json();
  const data = await getInfoEventById({ urlPath: `/events/${eventId}` });

  return json(data);
}
