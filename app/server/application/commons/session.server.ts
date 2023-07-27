import { createCookieSessionStorage } from '@remix-run/node';

type CreateSessionProps = {
  company: string;
  country: string;
} & Record<string, string | undefined>;

const sessionStorage = createCookieSessionStorage({
  cookie: {
    maxAge: 30 * 24 * 60 * 60,
    sameSite: 'lax',
    httpOnly: true,
    secrets: [process.env.SESSION_SECRET || 'default'],
    secure: process.env.NODE_ENV === 'production',
  },
});

export async function createSession(
  request: Request,
  params: CreateSessionProps,
) {
  const session = await sessionStorage.getSession(
    request.headers.get('Cookie'),
  );
  
  Object.entries(params).forEach(([key, value]) => {
    if (value && key) {
      session.set(key, value);
    }
  });
  
  return {
    headers: { 'Set-Cookie': await sessionStorage.commitSession(session) },
  };
}

export async function getSession(request: Request) {
  const session = await sessionStorage.getSession(
    request.headers.get('Cookie'),
  );
  
  return session.data;
}

export async function updateSessionParam(
  request: Request,
  key: string,
  value?: string,
) {
  const session = await sessionStorage.getSession(
    request.headers.get('Cookie'),
  );
  
  if (value) {
    session.set(key, value);
  }
  
  return {
    headers: { 'Set-Cookie': await sessionStorage.commitSession(session) },
  };
}
