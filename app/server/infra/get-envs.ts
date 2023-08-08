function getEnv(envKey: string) {
  const env = process.env[envKey];

  if (!env) {
    throw new Error(`Envkey ${envKey} not found`);
  }

  return env;
}

export function getMarvelURL() {
  return getEnv('MARVEL_URL');
}

export function getMarvelPrivateKey() {
  return getEnv('MARVEL_PRIVATE_KEY');
}

export function getMarvelPublicKey() {
  return getEnv('MARVEL_PUBLIC_KEY');
}

export function getEnvTest() {
  return getEnv('ENV_TEST');
}

export function getEnvSecretKey() {
  return getEnv('SECRET_KEY');
}

