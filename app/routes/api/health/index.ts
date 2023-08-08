import { json } from '@remix-run/node';

export function loader() {
  throw json({ message: 'Invalid request method' }, { status: 400 });
}

export async function action() {
  throw json({ message: 'Invalid request method' }, { status: 400 });
}
