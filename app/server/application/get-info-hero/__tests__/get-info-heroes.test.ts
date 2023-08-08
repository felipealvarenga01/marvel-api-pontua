import { vi } from 'vitest';
import { getInfoHeroes } from '~/server/application/get-info-hero/get-info-heroes.server';
import { mockHeroes } from '../../../../../mocks/api/get-info-marvel';
import * as getInfoMarvel from '../../../infra/apis/get-info-marvel';

describe('Busca de informações dos herois marvel', () => {
  it('Espero que retorne as informações dos herois', async () => {
    const mockHeroesResponse = {
      count: 2,
      heroes: [
        {
          id: 1011334,
          name: '3-D Man1',
          description: 'Descrição não informada ou inexistente',
          thumbnail:
            'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg',
        },
        {
          id: 1017100,
          name: 'A-Bomb (HAS)2',
          description:
            "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
          thumbnail:
            'http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg',
        },
        {
          id: 1011334,
          name: '3-D Man3',
          description: 'Descrição não informada ou inexistente',
          thumbnail:
            'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg',
        },
        {
          id: 1017100,
          name: 'A-Bomb (HAS)4',
          description:
            "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
          thumbnail:
            'http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg',
        },
        {
          id: 1011334,
          name: '3-D Man5',
          description: 'Descrição não informada ou inexistente',
          thumbnail:
            'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg',
        },
        {
          id: 1017100,
          name: 'A-Bomb (HAS)6',
          description:
            "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
          thumbnail:
            'http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg',
        },
        {
          id: 1011334,
          name: '3-D Man7',
          description: 'Descrição não informada ou inexistente',
          thumbnail:
            'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg',
        },
        {
          id: 1017100,
          name: 'A-Bomb (HAS)8',
          description:
            "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
          thumbnail:
            'http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg',
        },
        {
          id: 1011334,
          name: '3-D Man9',
          description: 'Descrição não informada ou inexistente',
          thumbnail:
            'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg',
        },
        {
          id: 1017100,
          name: 'A-Bomb (HAS)10',
          description:
            "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
          thumbnail:
            'http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg',
        },
      ],
      limit: 2,
      total: 1562,
    };
    const getInfoMarvelMock = vi
      .spyOn(getInfoMarvel, 'getInfoMarvel')
      .mockReturnValue(mockHeroes as any);

    const response = await getInfoHeroes({ urlPath: 'characters' });
    expect(getInfoMarvelMock).toBeCalledTimes(1);
    expect(response).toEqual(mockHeroesResponse);
  });
});
