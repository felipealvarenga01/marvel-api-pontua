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
  thumbnail: {
    path: string;
    extension: string;
  };
};

type HeroResponse = {
  id: string;
  name: string;
  thumbnail: string;
};

export async function getNameThumbnailHero(
  params: InfoHeroesProps,
): Promise<HeroResponse[]> {
  const { data } = (await getInfoMarvel(params)) as ReturnDataMarvel;
  const { results } = data;

  const heroes: HeroResponse[] = [];

  results.map((hero) =>
    heroes.push({
      id: hero.id,
      name: hero.name,
      thumbnail: `${hero.thumbnail.path}.${hero.thumbnail.extension}`,
    }),
  );

  return heroes;
}
