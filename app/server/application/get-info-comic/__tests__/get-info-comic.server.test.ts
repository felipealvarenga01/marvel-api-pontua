import { it, vi } from 'vitest';
import { getInfoComicById } from '~/server/application/get-info-comic/get-info-comic.server';
import * as getInfoMarvel from '~/server/infra/apis/get-info-marvel';
import { mockHeroComic } from '../../../../../mocks/api/get-info-comic';

describe('Busca de informações de Comics dos herois marvel', () => {
  it('Espero que retorne as informações dos comics por id', async () => {
    const getInfoMarvelMock = vi
      .spyOn(getInfoMarvel, 'getInfoMarvel')
      .mockReturnValue(mockHeroComic as any);

    const response = await getInfoComicById({ urlPath: 'comic/comic-id' });

    expect(getInfoMarvelMock).toBeCalledTimes(1);
    expect(response.title).toEqual('Avengers: The Initiative (2007) #19');
    expect(response.description).toEqual(
      'Join 3-D MAN, CLOUD 9, KOMODO, HARDBALL, and heroes around America in the battle that will decide the fate of the planet and the future of the Initiative program. Will the Kill Krew Army win the day?',
    );
    expect(response.thumbnail).toEqual(
      'http://i.annihil.us/u/prod/marvel/i/mg/d/03/58dd080719806.jpg',
    );
  });
});
