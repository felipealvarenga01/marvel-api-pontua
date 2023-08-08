import type { ActionArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import AuthenticationServer from '~/server/application/authentication/authentication.server';

export function loader() {
  throw json({ message: 'Invalid request method' }, { status: 400 });
}

export async function action({ request }: ActionArgs) {
  const { data } = await request.json();

  const response = AuthenticationServer(data);

  return json(response);
}
