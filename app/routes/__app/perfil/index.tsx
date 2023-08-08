import { useLoaderData, useNavigate, useSearchParams } from '@remix-run/react';
import md5 from 'md5';
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
import {
  getMarvelPrivateKey,
  getMarvelPublicKey,
} from '~/server/infra/get-envs';
import { api } from '~/utils/api';

type LoaderData = {
  marvelPublicKey: string;
  timestamp: number;
  hash: string;
};

type HeroData = {
  id: string;
  name: string;
  description?: string;
  comics: {
    items: [];
  };
  series: {
    items: [];
  };
  stories: {
    items: [];
  };
  events: {
    items: [];
  };
};

interface ResultsDataMarvel extends HeroData {
  thumbnail: {
    path: string;
    extension: string;
  };
}

type ReturnDataMarvel = {
  data: {
    results: ResultsDataMarvel[];
  };
};

const visaoGeral = 'visao-geral';
const windowRef = typeof window !== 'undefined' ? window : null;

export async function loader() {
  const marvelPublicKey = getMarvelPublicKey();
  const marvelPrivateKey = getMarvelPrivateKey();
  const timestamp = Number(new Date());
  const hash = md5(timestamp + marvelPrivateKey + marvelPublicKey);

  return { marvelPublicKey, timestamp, hash };
}

export default function Perfil() {
  const { marvelPublicKey, hash, timestamp } = useLoaderData() as LoaderData;

  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string | undefined>('');
  const [thumbnail, setThumbnail] = useState<string>('');
  const [comics, setComics] = useState<Record<string, []>>({ items: [] });
  const [stories, setStories] = useState<Record<string, []>>({ items: [] });
  const [series, setSeries] = useState<Record<string, []>>({ items: [] });
  const [events, setEvents] = useState<Record<string, []>>({ items: [] });

  const [tabContainer, setTabContainer] = useState<ReactElement<any, any>>();
  const [tabs, setTabs] = useState([
    {
      name: 'Visão Geral',
      active: false,
      path: visaoGeral,
    },
    {
      name: 'Quadrinhos',
      active: false,
      path: 'comics',
    },
    {
      name: 'Histórias',
      active: false,
      path: 'stories',
    },
    {
      name: 'Séries',
      active: false,
      path: 'series',
    },
    {
      name: 'Eventos',
      active: false,
      path: 'events',
    },
  ]);
  const [stepActive, setStepActive] = useState(
    windowRef?.localStorage.getItem('stepActive') || visaoGeral,
  );

  const navigate = useNavigate();
  const { translate } = useTranslation('pages.perfil');
  const [searchParams] = useSearchParams('');
  const agentId =
    searchParams.get('agentId') || windowRef?.localStorage.getItem('agentId');

  async function loadAgent() {
    const response = await api.get(
      `/characters/${agentId}?apikey=${marvelPublicKey}&hash=${hash}&ts=${String(
        timestamp,
      )}`,
    );

    const { data } = response.data as ReturnDataMarvel;

    const [hero] = data.results;
    setName(hero.name);
    setComics(hero.comics);
    setSeries(hero.series);
    setStories(hero.stories);
    setDescription(hero.description);
    setEvents(hero.events);
    setThumbnail(`${hero.thumbnail.path}.${hero.thumbnail.extension}`);
    setStepActive(visaoGeral);
  }

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
    if (!agentId) {
      navigate('/agent-selection');
    }
    loadAgent();
  }, []);

  useEffect(() => {
    windowRef?.localStorage.setItem('stepActive', stepActive);
    const newTabs = tabs;
    let findTabIndex = tabs.findIndex((tab) => tab.path === stepActive);
    newTabs.map((tab) => (tab.active = false));
    findTabIndex = findTabIndex === -1 ? 0 : findTabIndex;
    newTabs[findTabIndex].active = true;
    setTabs(newTabs);
    selectTabContainer(stepActive || '');
  }, [, stepActive, name]);

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
