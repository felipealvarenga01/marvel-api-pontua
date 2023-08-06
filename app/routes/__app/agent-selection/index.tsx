import { useLoaderData } from '@remix-run/react';
import FormAgent from '~/components/agent-selection';
import HeaderLogin from '~/components/login/header-login';
import ImgLogin from '~/components/login/img-main';
import { LoginBackground, LoginContainer } from '~/components/login/styles';
import { getNameThumbnailHero } from '~/server/application/get-info-heroes/get-name-thumbnail-hero.server';

type LoaderData = {
  id: string;
  name: string;
  thumbnail: string;
};

export async function loader() {
  return await getNameThumbnailHero({ urlPath: '/characters' });
}

export default function AgentSelection() {
  const loaderData = useLoaderData() as LoaderData[];
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
        <FormAgent
          title={title}
          description={description}
          button={button}
          options={loaderData}
        />
      </LoginContainer>
    </LoginBackground>
  );
}
