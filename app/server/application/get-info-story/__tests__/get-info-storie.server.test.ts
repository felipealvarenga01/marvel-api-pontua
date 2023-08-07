import { it, vi } from 'vitest';
import { getInfoStoryById } from '~/server/application/get-info-story/get-info-story.server';
import * as getInfoMarvel from '~/server/infra/apis/get-info-marvel';
import { mockHeroStoryById, mockHeroStoryByIdWithThumbnail } from "../../../../../mocks/api/get-info-story";

describe('Busca de informações de Stories dos herois marvel', () => {
  it('Espero que retorne as informações dos stories por id', async () => {
    const getInfoMarvelMock = vi
      .spyOn(getInfoMarvel, 'getInfoMarvel')
      .mockReturnValue(mockHeroStoryByIdWithThumbnail as any);

    const response = await getInfoStoryById({ urlPath: 'stories/stories-id' });

    expect(getInfoMarvelMock).toBeCalledTimes(1);
    expect(response.title).toEqual('Cover #19947');
    expect(response.description).toEqual('');
    expect(response.thumbnail).toEqual(
      'https://pontua.com.br/wp-content/uploads/2022/08/banner-cadastro.png',
    );
  });

  it('Espero que retorne as informações dos stories por id', async () => {
    const getInfoMarvelMock = vi
      .spyOn(getInfoMarvel, 'getInfoMarvel')
      .mockReturnValue(mockHeroStoryById as any);

    const response = await getInfoStoryById({ urlPath: 'stories/stories-id' });

    expect(getInfoMarvelMock).toBeCalledTimes(1);
    expect(response.title).toEqual('Cover #19947');
    expect(response.description).toEqual('');
    expect(response.thumbnail).toEqual(
      'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
    );
  });
});
