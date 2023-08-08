import { useLoaderData, useNavigate } from '@remix-run/react';
import md5 from 'md5';
import { useEffect, useState } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { Container, Content } from '~/components/commons/content/content';
import { SearchView } from '~/components/commons/header/header-styles';
import { MainHeader } from '~/components/commons/header/main-header';
import { KTIcon } from '~/components/commons/icons/icon';
import { Layout } from '~/components/commons/layout/layout';
import {
  ButtonPagination,
  Pagination,
} from '~/components/commons/pagination/styles';
import type { ListMenuProperties } from '~/components/commons/sidebar/sidebar';
import { Sidebar } from '~/components/commons/sidebar/sidebar';
import { Divider } from '~/components/commons/sidebar/sidebar-styles';
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
import { getInfoHeroes } from '~/server/application/get-info-hero/get-info-heroes.server';
import { ClientRequestBuilder } from '~/server/infra/request-builder';
import { api } from '~/utils/api';

type Heroes = {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
};

type LoaderData = {
  heroes: Heroes[];
  limit: number;
  total: number;
  count: number;
};

type HeroResponse = {
  id: string;
  name: string;
  thumbnail: string;
  description: string;
};

type HeroData = {
  id: string;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
};

type ReturnDataMarvel = {
  data: {
    limit: number;
    total: number;
    count: number;
    results: [HeroData];
  };
};

const marvelPublicKey = 'cbafb01a70062ac3ab2577aca097c933';
const marvelPrivateKey = 'f2c726b31fe13245912cae0091a1c9afe3dab311';
const timestamp = Number(new Date());
const hash = md5(timestamp + marvelPrivateKey + marvelPublicKey);
const windowRef = typeof window !== 'undefined' ? window : null;

export async function loader() {
  return getInfoHeroes({ urlPath: '/characters', params: { limit: '10' } });
}

export default function Home() {
  const navigate = useNavigate();
  const { heroes, limit, total } = useLoaderData() as LoaderData;
  const [heroesCards, setHeroesCard] = useState<Heroes[]>();
  const [search, setSearch] = useState<string>('');
  const [pageLimit, setPageLimit] = useState<number>(1);
  const [pageTotal, setPageTotal] = useState<number>(1);
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

  const page = 1;

  async function onChangePage(page: number) {
    page = page === 1 ? 0 : page;
    const offset = String(page * 10);
    const response = await new ClientRequestBuilder<LoaderData>({
      baseUrl: '/api/get-heroes',
    })
      .withMethod('POST')
      // @ts-ignore
      .withBody({ limit: '10', offset })
      .call();
    setPageTotal(total);
    setPageLimit(limit);
    setHeroesCard(response.heroes);
  }

  async function loadSearchHeroes() {
    try {
      const response = await api.get(
        `/characters?nameStartsWith=${search}&limit=10&apikey=${marvelPublicKey}&hash=${hash}&ts=${String(
          timestamp,
        )}`,
      );

      const { data } = response.data as ReturnDataMarvel;
      const { results } = data;

      const searchHeroes: HeroResponse[] = [];
      const defaultDescription = 'Descrição não informada ou inexistente';

      results.map((hero) =>
        searchHeroes.push({
          id: hero.id,
          name: hero.name,
          description: hero.description.length
            ? hero.description
            : defaultDescription,
          thumbnail: `${hero.thumbnail.path}.${hero.thumbnail.extension}`,
        }),
      );
      setPageTotal(data.total);
      setPageLimit(data.limit);

      setHeroesCard(searchHeroes);
    } catch (e) {}
  }

  function goToPerfil(agentId: string) {
    windowRef?.localStorage.setItem('agentId', agentId);
    windowRef?.localStorage.removeItem('stepActive');
    windowRef?.localStorage.removeItem('series');
    windowRef?.localStorage.removeItem('events');
    windowRef?.localStorage.removeItem('comics');
    windowRef?.localStorage.removeItem('stories');

    navigate(`/perfil?agentId=${agentId}`);
  }

  useEffect(() => {
    setPageLimit(limit);
    setPageTotal(total);
    setHeroesCard(heroes);
  }, []);

  useEffect(() => {
    if (search.length >= 2) {
      loadSearchHeroes();
    }

    if (!search) {
      onChangePage(1);
    }
  }, [search]);

  return (
    <Layout>
      <Sidebar menuList={menuList} />
      <Content>
        <MainHeader>
          <SearchView
            placeholder={'Busque um agente'}
            icon={'search'}
            searching={(value) => setSearch(value)}
          />
        </MainHeader>
        <Container>
          <HomeTitle>
            {translate('title')}
            <HomeTitleDivider> / </HomeTitleDivider>
            <HomeSubtitle>{translate('subtitle')}</HomeSubtitle>
          </HomeTitle>
          <HeroesContainer>
            {heroesCards &&
              heroesCards.map((hero, index) => (
                <HeroCard
                  key={index}
                  className={`card-${index}`}
                  onClick={() => goToPerfil(hero.id)}
                >
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
          <Content>
            <Divider marginTop={32} marginBottom={'0'} />
            <Pagination
              breakLabel={'...'}
              previousLabel={
                <ButtonPagination>
                  <KTIcon iconName={<FiArrowLeft />} />
                  Anterior
                </ButtonPagination>
              }
              nextLabel={
                <ButtonPagination>
                  Próximo
                  <KTIcon iconName={<FiArrowRight />} />
                </ButtonPagination>
              }
              forcePage={page - 1}
              onPageChange={(event) => onChangePage(event.selected + 1)}
              pageRangeDisplayed={1}
              renderOnZeroPageCount={null}
              pageCount={Math.ceil(pageTotal / pageLimit)}
            />
          </Content>
        </Container>
      </Content>
    </Layout>
  );
}
