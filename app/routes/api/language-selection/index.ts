import type { ActionArgs } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';
import { updateSessionParam } from '~/server/application/commons/session.server';

export function loader() {
  throw json({ message: 'Invalid request method' }, { status: 400 });
}

export async function action({ request }: ActionArgs) {
  const form = await request.formData();
  
  const language = form.get('language');
  const route = form.get('route');
  
  const headers = await updateSessionParam(
    request,
    'language',
    language?.toString(),
  );
  
  return redirect(route?.toString() || '/', headers);
}
