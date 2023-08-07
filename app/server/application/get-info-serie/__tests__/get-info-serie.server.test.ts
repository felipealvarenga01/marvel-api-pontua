import { it, vi } from 'vitest';
import { getInfoSerieById } from '~/server/application/get-info-serie/get-info-serie.server';
import * as getInfoMarvel from '~/server/infra/apis/get-info-marvel';
import { mockHeroSerie } from '../../../../../mocks/api/get-info-serie';

describe('Busca de informações de Serie do heroi marvel', () => {
  it('Espero que retorne as informações da Serie por id', async () => {
    const getInfoMarvelMock = vi
      .spyOn(getInfoMarvel, 'getInfoMarvel')
      .mockReturnValue(mockHeroSerie as any);

    const response = await getInfoSerieById({ urlPath: 'serie/serie-id' });

    expect(getInfoMarvelMock).toBeCalledTimes(1);
    expect(response.title).toEqual('Avengers: The Initiative (2007 - 2010)');
    expect(response.description).toEqual(null);
    expect(response.thumbnail).toEqual(
      'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/514a2ed3302f5.jpg',
    );
  });
});
