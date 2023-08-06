import { vi } from 'vitest';
import { getInfoHeroes } from '~/server/application/get-info-heroes/get-info-heroes.server';
import { mockHeroes } from '../../../../../mocks/api/get-info-marvel';
import * as getInfoMarvel from '../../../infra/apis/get-info-marvel';

describe('Busca de informações dos herois marvel', () => {
  it('Espero que retorne as informações dos herois', async () => {
    const getInfoMarvelMock = vi
      .spyOn(getInfoMarvel, 'getInfoMarvel')
      .mockReturnValue(mockHeroes as any);

    const response = await getInfoHeroes({ urlPath: 'characters' });

    expect(getInfoMarvelMock).toBeCalledTimes(1);
    expect(response).toEqual(mockHeroes);
  });
});
