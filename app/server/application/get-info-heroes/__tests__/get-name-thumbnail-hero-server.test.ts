import { vi } from 'vitest';
import { getNameThumbnailHero } from '~/server/application/get-info-heroes/get-name-thumbnail-hero.server';
import { mockHeroes } from '../../../../../mocks/api/get-info-marvel';
import * as getInfoMarvel from '../../../infra/apis/get-info-marvel';

describe('Retorna nome imagem e id dos herois', () => {
  it('Espero que seja retornado 2 herois', async () => {
    const getInfoMarvelMock = vi
      .spyOn(getInfoMarvel, 'getInfoMarvel')
      .mockReturnValue(mockHeroes as any);

    const heroes = await getNameThumbnailHero({ urlPath: 'characters' });
    expect(getInfoMarvelMock).toBeCalledTimes(1);
    expect(heroes).toHaveLength(2);
  });
});
