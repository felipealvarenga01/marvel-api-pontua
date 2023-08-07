import { useLoaderData } from '@remix-run/react';
import { Container, Content } from '~/components/commons/content/content';
import { MainHeader } from '~/components/commons/header/main-header';
import { Layout } from '~/components/commons/layout/layout';
import type { ListMenuProperties } from '~/components/commons/sidebar/sidebar';
import { Sidebar } from '~/components/commons/sidebar/sidebar';
import {
  HeroCard,
  HeroDescription,
  HeroImage,
  HeroInfo,
  HeroName,
  HeroThumbnail,
  HeroesContainer,
  HomeSubtitle,
  HomeTitle,
  HomeTitleDivider,
} from '~/components/home/styles';
import { useTranslation } from '~/hooks/i18n';
import { getInfoHeroes } from "~/server/application/get-info-hero/get-info-heroes.server";


type LoaderData = {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
};

export async function loader() {
  return getInfoHeroes({ urlPath: '/characters' });
}

export default function Home() {
  const loaderData = useLoaderData() as LoaderData[];
  const { translate } = useTranslation('pages.home');
  const menuList: ListMenuProperties[] = [
    {
      title: 'Home',
      path: '/home',
      icon: 'dashboard',
    },
    {
      title: 'Perfil',
      path: '/perfil',
      icon: 'user',
    },
  ];

  return (
    <Layout>
      <Sidebar menuList={menuList} />
      <Content>
        <MainHeader />
        <Container>
          <HomeTitle>
            {translate('title')}
            <HomeTitleDivider> / </HomeTitleDivider>
            <HomeSubtitle>{translate('subtitle')}</HomeSubtitle>
          </HomeTitle>
          <HeroesContainer>
            {loaderData &&
              loaderData.map((hero, index) => (
                <HeroCard key={index} className={`card-${index}`}>
                  <HeroThumbnail>
                    <HeroImage src={hero.thumbnail} alt={hero.name} />
                  </HeroThumbnail>
                  <HeroInfo>
                    <HeroName>{hero.name}</HeroName>
                    <HeroDescription>{hero.description}</HeroDescription>
                  </HeroInfo>
                </HeroCard>
              ))}
          </HeroesContainer>
        </Container>
      </Content>
    </Layout>
  );
}
