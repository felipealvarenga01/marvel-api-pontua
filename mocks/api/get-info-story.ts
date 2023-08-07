import fetchMock from 'fetch-mock';

const mockHeroStoryByIdWithThumbnail = {
  code: 200,
  status: 'Ok',
  copyright: '© 2023 MARVEL',
  attributionText: 'Data provided by Marvel. © 2023 MARVEL',
  attributionHTML:
    '<a href="http://marvel.com">Data provided by Marvel. © 2023 MARVEL</a>',
  etag: '93affab502ad7927604cec957177db67bd8931b9',
  data: {
    offset: 0,
    limit: 20,
    total: 1,
    count: 1,
    results: [
      {
        id: 19947,
        title: 'Cover #19947',
        description: '',
        resourceURI: 'http://gateway.marvel.com/v1/public/stories/19947',
        type: 'cover',
        modified: '2023-04-05T17:42:00-0400',
        thumbnail: {
          path: 'https://pontua.com.br/wp-content/uploads/2022/08/banner-cadastro',
          extension: 'png',
        },
        creators: {
          available: 1,
          collectionURI:
            'http://gateway.marvel.com/v1/public/stories/19947/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/196',
              name: 'Jack Kirby',
              role: 'penciller (cover)',
            },
          ],
          returned: 1,
        },
        characters: {
          available: 1,
          collectionURI:
            'http://gateway.marvel.com/v1/public/stories/19947/characters',
          items: [
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1011334',
              name: '3-D Man',
            },
          ],
          returned: 1,
        },
        series: {
          available: 1,
          collectionURI:
            'http://gateway.marvel.com/v1/public/stories/19947/series',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2045',
              name: 'Marvel Premiere (1972 - 1981)',
            },
          ],
          returned: 1,
        },
        comics: {
          available: 1,
          collectionURI:
            'http://gateway.marvel.com/v1/public/stories/19947/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/10223',
              name: 'Marvel Premiere (1972) #35',
            },
          ],
          returned: 1,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/stories/19947/events',
          items: [],
          returned: 0,
        },
        originalIssue: {
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/10223',
          name: 'Marvel Premiere (1972) #35',
        },
      },
    ],
  },
};

const mockHeroStoryById = {
  code: 200,
  status: 'Ok',
  copyright: '© 2023 MARVEL',
  attributionText: 'Data provided by Marvel. © 2023 MARVEL',
  attributionHTML:
    '<a href="http://marvel.com">Data provided by Marvel. © 2023 MARVEL</a>',
  etag: '93affab502ad7927604cec957177db67bd8931b9',
  data: {
    offset: 0,
    limit: 20,
    total: 1,
    count: 1,
    results: [
      {
        id: 19947,
        title: 'Cover #19947',
        description: '',
        resourceURI: 'http://gateway.marvel.com/v1/public/stories/19947',
        type: 'cover',
        modified: '2023-04-05T17:42:00-0400',
        thumbnail: null,
        creators: {
          available: 1,
          collectionURI:
            'http://gateway.marvel.com/v1/public/stories/19947/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/196',
              name: 'Jack Kirby',
              role: 'penciller (cover)',
            },
          ],
          returned: 1,
        },
        characters: {
          available: 1,
          collectionURI:
            'http://gateway.marvel.com/v1/public/stories/19947/characters',
          items: [
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1011334',
              name: '3-D Man',
            },
          ],
          returned: 1,
        },
        series: {
          available: 1,
          collectionURI:
            'http://gateway.marvel.com/v1/public/stories/19947/series',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2045',
              name: 'Marvel Premiere (1972 - 1981)',
            },
          ],
          returned: 1,
        },
        comics: {
          available: 1,
          collectionURI:
            'http://gateway.marvel.com/v1/public/stories/19947/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/10223',
              name: 'Marvel Premiere (1972) #35',
            },
          ],
          returned: 1,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/stories/19947/events',
          items: [],
          returned: 0,
        },
        originalIssue: {
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/10223',
          name: 'Marvel Premiere (1972) #35',
        },
      },
    ],
  },
};

const enableMock = () => {
  fetchMock.mock({
    name: 'get-story-by-id',
    url: new RegExp('/story/story-id'),
    method: 'GET',
    response: () => {
      return mockHeroStoryById;
    },
  });

  fetchMock.mock({
    name: 'get-story-by-id',
    url: new RegExp('/story/story-id'),
    method: 'GET',
    response: () => {
      return mockHeroStoryByIdWithThumbnail;
    },
  });
};

export { mockHeroStoryById, mockHeroStoryByIdWithThumbnail };

export default enableMock;
