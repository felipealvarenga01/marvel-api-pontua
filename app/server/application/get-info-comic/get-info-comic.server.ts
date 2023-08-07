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

export async function getInfoComicById(params: {
  urlPath: string;
}): Promise<any> {
  const { data } = (await getInfoMarvel(params)) as any;
  const [comic] = data.results;

  return {
    title: comic.title,
    description: comic.description,
    thumbnail: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
  };
}
