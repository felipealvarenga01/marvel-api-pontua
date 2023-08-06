import FormAgent from '~/components/agent-selection';
import HeaderLogin from '~/components/login/header-login';
import ImgLogin from '~/components/login/img-main';
import { LoginBackground, LoginContainer } from '~/components/login/styles';

export default function AgentSelection() {
  const title = 'Selecione o seu agente mais legal';
  const description = 'Tenha a visão completa do seu agente.';
  const button = {
    title: 'Entrar',
    size: 88,
    fontSize: 16,
  };

  return (
    <LoginBackground>
      <HeaderLogin />
      <LoginContainer>
        <ImgLogin />
        <FormAgent title={title} description={description} button={button} />
      </LoginContainer>
    </LoginBackground>
  );
}
