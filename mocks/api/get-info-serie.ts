import fetchMock from 'fetch-mock';

const mockHeroSerie = {
  code: 200,
  status: 'Ok',
  copyright: '© 2023 MARVEL',
  attributionText: 'Data provided by Marvel. © 2023 MARVEL',
  attributionHTML:
    '<a href="http://marvel.com">Data provided by Marvel. © 2023 MARVEL</a>',
  etag: '3c3fb5edacebe72839f805923178c4832032d9d3',
  data: {
    offset: 0,
    limit: 20,
    total: 1,
    count: 1,
    results: [
      {
        id: 1945,
        title: 'Avengers: The Initiative (2007 - 2010)',
        description: null,
        resourceURI: 'http://gateway.marvel.com/v1/public/series/1945',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/series/1945/avengers_the_initiative_2007_-_2010?utm_campaign=apiRef&utm_source=cbafb01a70062ac3ab2577aca097c933',
          },
        ],
        startYear: 2007,
        endYear: 2010,
        rating: 'T',
        type: '',
        modified: '2013-03-20T17:51:27-0400',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/514a2ed3302f5',
          extension: 'jpg',
        },
        creators: {
          available: 34,
          collectionURI:
            'http://gateway.marvel.com/v1/public/series/1945/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/9018',
              name: 'Mahmud Asrar',
              role: 'penciller',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/1133',
              name: 'Stefano Caselli',
              role: 'penciller',
            },
            //... (outras entradas de criadores)
          ],
          returned: 20,
        },
        characters: {
          available: 71,
          collectionURI:
            'http://gateway.marvel.com/v1/public/series/1945/characters',
          items: [
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1011334',
              name: '3-D Man',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1010802',
              name: "Ant-Man (Eric O'Grady)",
            },
            //... (outras entradas de personagens)
          ],
          returned: 20,
        },
        stories: {
          available: 90,
          collectionURI:
            'http://gateway.marvel.com/v1/public/series/1945/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/8381',
              name: 'Avengers: The Initiative (2007) #1',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/8382',
              name: 'Interior #8382',
              type: 'interiorStory',
            },
            //... (outras entradas de histórias)
          ],
          returned: 20,
        },
        comics: {
          available: 42,
          collectionURI:
            'http://gateway.marvel.com/v1/public/series/1945/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/6232',
              name: 'Avengers: The Initiative (2007) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/21843',
              name: 'Avengers: The Initiative (2007) #1 (50/50 Cover (left))',
            },
            //... (outras entradas de quadrinhos)
          ],
          returned: 20,
        },
        events: {
          available: 5,
          collectionURI:
            'http://gateway.marvel.com/v1/public/series/1945/events',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/318',
              name: 'Dark Reign',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/255',
              name: 'Initiative',
            },
            //... (outras entradas de eventos)
          ],
          returned: 5,
        },
        next: null,
        previous: null,
      },
    ],
  },
};

const enableMock = () => {
  fetchMock.mock({
    url: new RegExp('/serie/serie-id'),
    method: 'GET',
    response: () => {
      return mockHeroSerie;
    },
  });
};

export { mockHeroSerie };

export default enableMock;
