import { it, vi } from 'vitest';
import { getInfoEventById } from '~/server/application/get-info-events/get-info-events.server';
import * as getInfoMarvel from '~/server/infra/apis/get-info-marvel';
import { mockHeroEvents } from '../../../../../mocks/api/get-info-event';

describe('Busca de informações de Events dos herois marvel', () => {
  it('Espero que retorne as informações dos events por id', async () => {
    const getInfoMarvelMock = vi
      .spyOn(getInfoMarvel, 'getInfoMarvel')
      .mockReturnValue(mockHeroEvents as any);

    const response = await getInfoEventById({ urlPath: 'events/events-id' });

    expect(getInfoMarvelMock).toBeCalledTimes(1);
    expect(response.title).toEqual('Secret Invasion');
    expect(response.description).toEqual(
      "The shape-shifting Skrulls have been infiltrating the Earth for years, replacing many of Marvel's heroes with impostors, setting the stage for an all-out invasion.",
    );
    expect(response.thumbnail).toEqual(
      'http://i.annihil.us/u/prod/marvel/i/mg/6/70/51ca1749980ae.jpg',
    );
  });
});
