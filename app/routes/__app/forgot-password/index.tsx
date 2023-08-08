import FormLogin from '~/components/login/form';
import HeaderLogin from '~/components/login/header-login';
import ImgLogin from '~/components/login/img-main';
import { LoginBackground, LoginContainer } from '~/components/login/styles';
import userIcon from '../../../assets/user.svg';

export default function ForgotPassword() {
  const title = 'Recuperar senha';
  const description =
    'Informe o e-mail do seu cadastro. Nós estaremos realizando o envio de um link com as instruções para você redefinir a sua senha.';
  const recoverTitle = 'Tudo certo';
  const descriptionRecover =
    'Foi enviado um e-mail para você com instruções de como redefinir a sua senha.';
  const inputs = [
    {
      type: 'email',
      placeholder: 'Informe seu e-mail',
      icon: userIcon,
      marginbottom: 11,
      name: 'email',
    },
  ];

  const button = {
    title: 'enviar link',
    disabled: true,
  };

  const buttonRecover = {
    title: 'voltar para o login',
    marginTop: 26,
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
        <FormLogin
          title={recoverTitle}
          description={descriptionRecover}
          button={buttonRecover}
        />
      </LoginContainer>
    </LoginBackground>
  );
}
