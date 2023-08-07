import { getInfoMarvel } from '~/server/infra/apis/get-info-marvel';

type InfoHeroesProps = {
  urlPath: string;
  urlQuerys?: {
    limit: string;
    offset: string;
  };
};

type ReturnDataMarvel = {
  data: {
    results: [HeroData];
  };
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

type HeroResponse = {
  id: string;
  name: string;
  thumbnail: string;
  description: string;
};

export async function getInfoHeroes(
  params: InfoHeroesProps,
): Promise<HeroResponse[]> {
  const defaultDescription = 'Descrição não informada ou inexistente';

  const { data } = (await getInfoMarvel(params)) as ReturnDataMarvel;
  const { results } = data;

  const heroes: HeroResponse[] = [];

  results.map((hero) =>
    heroes.push({
      id: hero.id,
      name: hero.name,
      description: hero.description.length
        ? hero.description
        : defaultDescription,
      thumbnail: `${hero.thumbnail.path}.${hero.thumbnail.extension}`,
    }),
  );

  return heroes;
}
