import { vi } from 'vitest';
import { getInfoHeroById } from '~/server/application/get-info-heroes/get-info-hero-by-id.server';
import { mockHero } from '../../../../../mocks/api/get-info-marvel';
import * as getInfoMarvel from '../../../infra/apis/get-info-marvel';

it('Retorne as informações de um heroi pelo id', async () => {
  const getInfoMarvelMock = vi
    .spyOn(getInfoMarvel, 'getInfoMarvel')
    .mockReturnValue(mockHero as any);

  const hero = await getInfoHeroById({ urlPath: 'characters/hero-id' });

  expect(getInfoMarvelMock).toBeCalledTimes(1);
  expect(hero.name).toEqual('3-D Man');
});

