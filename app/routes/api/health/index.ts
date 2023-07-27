import { json } from '@remix-run/node';

export function loader() {
  return json('ok');
}

export async function action() {
  throw json({ message: 'Invalid request method' }, { status: 400 });
}
