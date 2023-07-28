import entrar from '~/assets/entrar.svg';
import FormLogin from '~/components/login/form';
import HeaderLogin from '~/components/login/header-login';
import ImgLogin from '~/components/login/img-main';
import { LoginBackground, LoginContainer } from '~/components/login/styles';
import userIcon from '../../../assets/user.svg';

export default function ForgotPassword() {
  const title = 'Recuperar senha';
  const description =
    'Informe o e-mail do seu cadastro. Nós estaremos realizando o envio de um link com as instruções para você redefinir a sua senha.';
  const inputs = [
    {
      type: 'email',
      placeholder: 'Informe seu e-mail',
      icon: userIcon,
      marginbottom: 11,
    },
  ];
  const button = {
    title: 'enviar link',
    disabled: true,
  };

  return (
    <LoginBackground>
      <HeaderLogin />
      <LoginContainer>
        <ImgLogin />
        <FormLogin
          inputs={inputs}
          title={title}
          description={description}
          button={button}
        />
      </LoginContainer>
    </LoginBackground>
  );
}
