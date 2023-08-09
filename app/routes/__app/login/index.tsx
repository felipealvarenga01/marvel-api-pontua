import passwordIcon from '~/assets/password.svg';
import userIcon from '~/assets/user.svg';
import FormLogin from '~/components/login/form';
import HeaderLogin from '~/components/login/header-login';
import ImgLogin from '~/components/login/img-main';
import { LoginBackground, LoginContainer } from '~/components/login/styles';
import entrar from '../../../assets/entrar.svg';

export default function Login() {
  const title = { title: 'Bem-vindo', dot: '.' };
  const description = 'informe as suas credenciais de acesso ao portal';
  const button = {
    icon: entrar,
    title: 'entrar',
  };
  const inputs = [
    {
      type: 'email',
      placeholder: 'Informe seu e-mail',
      icon: userIcon,
      marginbottom: 23,
      name: 'email',
    },
    {
      type: 'password',
      placeholder: 'Informe sua senha',
      icon: passwordIcon,
      marginbottom: 11,
      name: 'password',
    },
  ];

  return (
    <LoginBackground>
      <HeaderLogin />
      <LoginContainer>
        <ImgLogin />
        <FormLogin
          inputs={inputs}
          title={title}
          description={description}
          forgotLink
          button={button}
        />
      </LoginContainer>
    </LoginBackground>
  );
}
