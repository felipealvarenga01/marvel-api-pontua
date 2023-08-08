import jwt from 'jsonwebtoken';
import { getEnvSecretKey } from '~/server/infra/get-envs';

type DataProps = {
  name: string;
  value: string;
};

const validEmail = 'felipe.alvarenga01@yahoo.com.br';
const validPassword = 'pontua@123';

export default function AuthenticationServer(data: DataProps[]) {
  const email = data.find((item) => item.name === 'email')?.value;
  const password = data.find((item) => item.name === 'password')?.value;

  const secreteKey = getEnvSecretKey();

  if (password === validPassword && email === validEmail) {
    const id = 1;
    const token = jwt.sign({ id }, secreteKey, {
      expiresIn: '1d',
    });

    return { token };
  }

  return { message: 'Email ou senha inválida' };
}
