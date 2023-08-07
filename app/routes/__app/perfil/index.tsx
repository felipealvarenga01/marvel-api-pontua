import type { LoaderArgs } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import type { ReactElement } from 'react';
import { useEffect, useState } from 'react';
import { Container, Content } from '~/components/commons/content/content';
import { MainHeader } from '~/components/commons/header/main-header';
import { Layout } from '~/components/commons/layout/layout';
import type { ListMenuProperties } from '~/components/commons/sidebar/sidebar';
import { Sidebar } from '~/components/commons/sidebar/sidebar';
import CardComics from '~/components/perfil/card-comics';
import CardEvents from '~/components/perfil/card-events';
import CardSeries from '~/components/perfil/card-series';
import CardStories from '~/components/perfil/card-stories';
import CardVisaoGeral from '~/components/perfil/card-visao-geral';
import {
  PerfilName,
  PerfilNameDivider,
  PerfilTitle,
} from '~/components/perfil/styles';
import Tabs from '~/components/tabs/tabs';
import { useTranslation } from '~/hooks/i18n';
import { getInfoHeroById } from '~/server/application/get-info-heroes/get-info-hero-by-id.server';

type LoaderData = {
  name: string;
  description: string;
  thumbnail: string;
  comics: any;
  series: any;
  stories: any;
  events: any;
};

const visaoGeral = 'visao-geral';
const windowRef = typeof window !== 'undefined' ? window : null;
export async function loader(params: LoaderArgs) {
  const url = new URL(params.request.url).search;
  const searchParams = new URLSearchParams(url);
  const agentId = searchParams.get('agentId');
  if (!agentId) {
    return redirect('/agent-selection');
  }

  return getInfoHeroById({ urlPath: `/characters/${agentId}` });
}



export default function Perfil() {
  const { name, description, thumbnail, comics, stories, series, events } =
    useLoaderData() as LoaderData;
  const [tabContainer, setTabContainer] = useState<ReactElement<any, any>>();
  const [tabs, setTabs] = useState([
    {
      name: 'Visão Geral',
      active: false,
      path: visaoGeral,
    },
    {
      name: 'Comics',
      active: false,
      path: 'comics',
    },
    {
      name: 'Stories',
      active: false,
      path: 'stories',
    },
    {
      name: 'Series',
      active: false,
      path: 'series',
    },
    {
      name: 'Events',
      active: false,
      path: 'events',
    },
  ]);
  const [stepActive, setStepActive] = useState(
    windowRef?.localStorage.getItem('stepActive') || visaoGeral,
  );
  const { translate } = useTranslation('pages.perfil');

  function selectTabContainer(stepName: string) {
    switch (stepName) {
      case visaoGeral:
        setTabContainer(
          <CardVisaoGeral
            name={name}
            description={description}
            thumbnail={thumbnail}
          />,
        );
        break;

      case 'comics':
        setTabContainer(<CardComics comics={comics.items} />);
        break;

      case 'stories':
        setTabContainer(<CardStories stories={stories.items} />);
        break;

      case 'series':
        setTabContainer(<CardSeries series={series.items} />);
        break;

      case 'events':
        setTabContainer(<CardEvents events={events.items} />);
        break;

      default:
        setTabContainer(
          <CardVisaoGeral
            name={name}
            description={description}
            thumbnail={thumbnail}
          />,
        );
        break;
    }

    return;
  }

  useEffect(() => {
    windowRef?.localStorage.setItem('stepActive', stepActive);
    const newTabs = tabs;
    let findTabIndex = tabs.findIndex((tab) => tab.path === stepActive);
    newTabs.map((tab) => (tab.active = false));
    findTabIndex = findTabIndex === -1 ? 0 : findTabIndex;
    newTabs[findTabIndex].active = true;
    setTabs(newTabs);
    selectTabContainer(stepActive || '');
  }, [, stepActive]);

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
          <PerfilTitle>
            {translate('Perfil')}
            <PerfilNameDivider> / </PerfilNameDivider>
            <PerfilName>{name}</PerfilName>
          </PerfilTitle>
          <Tabs
            tabs={tabs}
            changeStep={(stepName) => setStepActive(stepName)}
          />
          {tabContainer}
        </Container>
      </Content>
    </Layout>
  );
}
