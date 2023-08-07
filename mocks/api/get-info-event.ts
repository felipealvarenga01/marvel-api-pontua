import fetchMock from 'fetch-mock';

const mockHeroEvents = {
    code: 200,
    status: "Ok",
    copyright: "© 2023 MARVEL",
    attributionText: "Data provided by Marvel. © 2023 MARVEL",
    attributionHTML:
      '<a href="http://marvel.com">Data provided by Marvel. © 2023 MARVEL</a>',
    etag: "fcf7ef4bd189956bc4a8b24e6c67547652424535",
    data: {
      offset: 0,
      limit: 20,
      total: 1,
      count: 1,
      results: [
        {
          id: 269,
          title: "Secret Invasion",
          description:
            "The shape-shifting Skrulls have been infiltrating the Earth for years, replacing many of Marvel's heroes with impostors, setting the stage for an all-out invasion.",
          resourceURI: "http://gateway.marvel.com/v1/public/events/269",
          urls: [
            {
              type: "detail",
              url:
                "http://marvel.com/comics/events/269/secret_invasion?utm_campaign=apiRef&utm_source=cbafb01a70062ac3ab2577aca097c933",
            },
            {
              type: "wiki",
              url:
                "http://marvel.com/universe/Secret_Invasion?utm_campaign=apiRef&utm_source=cbafb01a70062ac3ab2577aca097c933",
            },
          ],
          modified: "2015-01-20T14:58:35-0500",
          start: "2008-06-02 00:00:00",
          end: "2009-01-25 00:00:00",
          thumbnail: {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/6/70/51ca1749980ae",
            extension: "jpg",
          },
          creators: {
            available: 223,
            collectionURI:
              "http://gateway.marvel.com/v1/public/events/269/creators",
            items: [
              {
                resourceURI: "http://gateway.marvel.com/v1/public/creators/3095",
                name: "Blank",
                role: "other",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/creators/1107",
                name: "Dan Abnett",
                role: "other",
              },
              // ... more creators
            ],
            returned: 20,
          },
          characters: {
            available: 103,
            collectionURI:
              "http://gateway.marvel.com/v1/public/events/269/characters",
            items: [
              {
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1011334",
                name: "3-D Man",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1011176",
                name: "Ajak",
              },
              // ... more characters
            ],
            returned: 20,
          },
          stories: {
            available: 359,
            collectionURI: "http://gateway.marvel.com/v1/public/events/269/stories",
            items: [
              {
                resourceURI: "http://gateway.marvel.com/v1/public/stories/24517",
                name: "",
                type: "",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/stories/24518",
                name: "Deadpool (1997) #1",
                type: "interiorStory",
              },
              // ... more stories
            ],
            returned: 20,
          },
          comics: {
            available: 164,
            collectionURI: "http://gateway.marvel.com/v1/public/events/269/comics",
            items: [
              {
                resourceURI: "http://gateway.marvel.com/v1/public/comics/21366",
                name: "Avengers: The Initiative (2007) #14",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/comics/21546",
                name: "Avengers: The Initiative (2007) #15",
              },
              // ... more comics
            ],
            returned: 20,
          },
          series: {
            available: 86,
            collectionURI: "http://gateway.marvel.com/v1/public/events/269/series",
            items: [
              {
                resourceURI: "http://gateway.marvel.com/v1/public/series/1945",
                name: "Avengers: The Initiative (2007 - 2010)",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/series/3087",
                name: "Avengers: The Initiative Annual (2007)",
              },
              // ... more series
            ],
            returned: 20,
          },
          next: {
            resourceURI: "http://gateway.marvel.com/v1/public/events/318",
            name: "Dark Reign",
          },
          previous: {
            resourceURI: "http://gateway.marvel.com/v1/public/events/299",
            name: "Messiah CompleX",
          },
        },
      ],
    },
  };

const enableMock = () => {
  fetchMock.mock({
    name: 'get-events-by-id',
    url: new RegExp('/events/events-id'),
    method: 'GET',
    response: () => {
      return mockHeroEvents;
    },
  });
};

export { mockHeroEvents };

export default enableMock;