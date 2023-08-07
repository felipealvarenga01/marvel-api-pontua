import { it, vi } from 'vitest';
import { getInfoSerieById } from '~/server/application/get-info-series/get-info-series.server';
import * as getInfoMarvel from '~/server/infra/apis/get-info-marvel';
import { mockHeroSeries } from '../../../../../mocks/api/get-info-serie';

describe('Busca de informações de Series dos herois marvel', () => {
  it('Espero que retorne as informações dos Series por id', async () => {
    const getInfoMarvelMock = vi
      .spyOn(getInfoMarvel, 'getInfoMarvel')
      .mockReturnValue(mockHeroSeries as any);

    const response = await getInfoSerieById({ urlPath: 'series/series-id' });

    expect(getInfoMarvelMock).toBeCalledTimes(1);
    expect(response.title).toEqual('Avengers: The Initiative (2007 - 2010)');
    expect(response.description).toEqual(null);
    expect(response.thumbnail).toEqual(
      'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/514a2ed3302f5.jpg',
    );
  });
});
