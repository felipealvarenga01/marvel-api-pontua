function getEnv(envKey: string) {
  const env = process.env[envKey];
  
  if (!env) {
    throw new Error(`Envkey ${envKey} not found`);
  }
  
  return env;
}

//modelo de exportação de env
export function getProxyURL() {
   return getEnv('PROXY_URL');
}
