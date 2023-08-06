import { getInfoMarvel } from '~/server/infra/apis/get-info-marvel';

type HeroData = {
  id: string;
  name: string;
  description?: string;
  comics: any;
  series: any;
  stories: any;
  events: any;
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

interface HeroResponse extends HeroData {
  thumbnail: string;
}

export async function getInfoHeroById(params: {
  urlPath: string;
}): Promise<HeroResponse> {
  const { data } = (await getInfoMarvel(params)) as ReturnDataMarvel;
  const [hero] = data.results;

  return {
    ...hero,
    thumbnail: `${hero.thumbnail.path}.${hero.thumbnail.extension}`,
  };
}
