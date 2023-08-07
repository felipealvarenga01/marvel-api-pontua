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

export async function getInfoStoryById(params: {
  urlPath: string;
}): Promise<any> {
  const { data } = (await getInfoMarvel(params)) as any;
  const [story] = data.results;

  if (!story.thumbnail) {
    story.thumbnail = {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
      extension: 'jpg',
    };
  }

  return {
    title: story.title,
    description: story.description,
    thumbnail: `${story.thumbnail.path}.${story.thumbnail.extension}`,
  };
}
