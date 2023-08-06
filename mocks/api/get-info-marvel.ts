/* eslint-disable sonarjs/no-duplicate-string */
import fetchMock from 'fetch-mock';

const mockHero = {
  code: 200,
  status: 'Ok',
  copyright: '© 2023 MARVEL',
  attributionText: 'Data provided by Marvel. © 2023 MARVEL',
  attributionHTML:
    '<a href=http://marvel.com>Data provided by Marvel. © 2023 MARVEL</a>',
  etag: '55342c8b21941bfea4b795ff85633d9063e1da0e',
  data: {
    offset: 0,
    limit: 20,
    total: 1,
    count: 1,
    results: [
      {
        id: 1011334,
        name: '3-D Man',
        description: '',
        modified: '2014-04-29T14:18:17-0400',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
          extension: 'jpg',
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011334',
        comics: {
          available: 12,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1011334/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/21366',
              name: 'Avengers: The Initiative (2007) #14',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/24571',
              name: 'Avengers: The Initiative (2007) #14 (SPOTLIGHT VARIANT)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/21546',
              name: 'Avengers: The Initiative (2007) #15',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/21741',
              name: 'Avengers: The Initiative (2007) #16',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/21975',
              name: 'Avengers: The Initiative (2007) #17',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/22299',
              name: 'Avengers: The Initiative (2007) #18',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/22300',
              name: 'Avengers: The Initiative (2007) #18 (ZOMBIE VARIANT)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/22506',
              name: 'Avengers: The Initiative (2007) #19',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/8500',
              name: 'Deadpool (1997) #44',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/10223',
              name: 'Marvel Premiere (1972) #35',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/10224',
              name: 'Marvel Premiere (1972) #36',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/10225',
              name: 'Marvel Premiere (1972) #37',
            },
          ],
          returned: 12,
        },
        series: {
          available: 3,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1011334/series',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1945',
              name: 'Avengers: The Initiative (2007 - 2010)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2005',
              name: 'Deadpool (1997 - 2002)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2045',
              name: 'Marvel Premiere (1972 - 1981)',
            },
          ],
          returned: 3,
        },
        stories: {
          available: 21,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1011334/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/19947',
              name: 'Cover #19947',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/19948',
              name: 'The 3-D Man!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/19949',
              name: 'Cover #19949',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/19950',
              name: "The Devil's Music!",
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/19951',
              name: 'Cover #19951',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/19952',
              name: 'Code-Name:  The Cold Warrior!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/47184',
              name: 'AVENGERS: THE INITIATIVE (2007) #14',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/47185',
              name: 'Avengers: The Initiative (2007) #14 - Int',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/47498',
              name: 'AVENGERS: THE INITIATIVE (2007) #15',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/47499',
              name: 'Avengers: The Initiative (2007) #15 - Int',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/47792',
              name: 'AVENGERS: THE INITIATIVE (2007) #16',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/47793',
              name: 'Avengers: The Initiative (2007) #16 - Int',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/48361',
              name: 'AVENGERS: THE INITIATIVE (2007) #17',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/48362',
              name: 'Avengers: The Initiative (2007) #17 - Int',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/49103',
              name: 'AVENGERS: THE INITIATIVE (2007) #18',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/49104',
              name: 'Avengers: The Initiative (2007) #18 - Int',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/49106',
              name: 'Avengers: The Initiative (2007) #18, Zombie Variant - Int',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/49888',
              name: 'AVENGERS: THE INITIATIVE (2007) #19',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/49889',
              name: 'Avengers: The Initiative (2007) #19 - Int',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/54371',
              name: 'Avengers: The Initiative (2007) #14, Spotlight Variant - Int',
              type: 'interiorStory',
            },
          ],
          returned: 20,
        },
        events: {
          available: 1,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1011334/events',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/269',
              name: 'Secret Invasion',
            },
          ],
          returned: 1,
        },
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/characters/74/3-d_man?utm_campaign=apiRef&utm_source=838fe42386d01cc3a59c30320d921a36',
          },
          {
            type: 'wiki',
            url: 'http://marvel.com/universe/3-D_Man_(Chandler)?utm_campaign=apiRef&utm_source=838fe42386d01cc3a59c30320d921a36',
          },
          {
            type: 'comiclink',
            url: 'http://marvel.com/comics/characters/1011334/3-d_man?utm_campaign=apiRef&utm_source=838fe42386d01cc3a59c30320d921a36',
          },
        ],
      },
    ],
  },
};
const mockHeroes = {
  code: 200,
  status: 'Ok',
  copyright: '© 2023 MARVEL',
  attributionText: 'Data provided by Marvel. © 2023 MARVEL',
  attributionHTML:
    '<a href=http://marvel.com>Data provided by Marvel. © 2023 MARVEL</a>',
  etag: '5813d6814b732435cf14243932dd313a526c516e',
  data: {
    offset: 0,
    limit: 2,
    total: 1562,
    count: 2,
    results: [
      {
        id: 1011334,
        name: '3-D Man',
        description: '',
        modified: '2014-04-29T14:18:17-0400',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
          extension: 'jpg',
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011334',
        comics: {
          available: 12,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1011334/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/21366',
              name: 'Avengers: The Initiative (2007) #14',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/24571',
              name: 'Avengers: The Initiative (2007) #14 (SPOTLIGHT VARIANT)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/21546',
              name: 'Avengers: The Initiative (2007) #15',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/21741',
              name: 'Avengers: The Initiative (2007) #16',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/21975',
              name: 'Avengers: The Initiative (2007) #17',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/22299',
              name: 'Avengers: The Initiative (2007) #18',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/22300',
              name: 'Avengers: The Initiative (2007) #18 (ZOMBIE VARIANT)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/22506',
              name: 'Avengers: The Initiative (2007) #19',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/8500',
              name: 'Deadpool (1997) #44',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/10223',
              name: 'Marvel Premiere (1972) #35',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/10224',
              name: 'Marvel Premiere (1972) #36',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/10225',
              name: 'Marvel Premiere (1972) #37',
            },
          ],
          returned: 12,
        },
        series: {
          available: 3,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1011334/series',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1945',
              name: 'Avengers: The Initiative (2007 - 2010)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2005',
              name: 'Deadpool (1997 - 2002)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2045',
              name: 'Marvel Premiere (1972 - 1981)',
            },
          ],
          returned: 3,
        },
        stories: {
          available: 21,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1011334/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/19947',
              name: 'Cover #19947',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/19948',
              name: 'The 3-D Man!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/19949',
              name: 'Cover #19949',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/19950',
              name: "The Devil's Music!",
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/19951',
              name: 'Cover #19951',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/19952',
              name: 'Code-Name:  The Cold Warrior!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/47184',
              name: 'AVENGERS: THE INITIATIVE (2007) #14',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/47185',
              name: 'Avengers: The Initiative (2007) #14 - Int',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/47498',
              name: 'AVENGERS: THE INITIATIVE (2007) #15',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/47499',
              name: 'Avengers: The Initiative (2007) #15 - Int',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/47792',
              name: 'AVENGERS: THE INITIATIVE (2007) #16',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/47793',
              name: 'Avengers: The Initiative (2007) #16 - Int',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/48361',
              name: 'AVENGERS: THE INITIATIVE (2007) #17',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/48362',
              name: 'Avengers: The Initiative (2007) #17 - Int',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/49103',
              name: 'AVENGERS: THE INITIATIVE (2007) #18',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/49104',
              name: 'Avengers: The Initiative (2007) #18 - Int',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/49106',
              name: 'Avengers: The Initiative (2007) #18, Zombie Variant - Int',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/49888',
              name: 'AVENGERS: THE INITIATIVE (2007) #19',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/49889',
              name: 'Avengers: The Initiative (2007) #19 - Int',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/54371',
              name: 'Avengers: The Initiative (2007) #14, Spotlight Variant - Int',
              type: 'interiorStory',
            },
          ],
          returned: 20,
        },
        events: {
          available: 1,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1011334/events',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/269',
              name: 'Secret Invasion',
            },
          ],
          returned: 1,
        },
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/characters/74/3-d_man?utm_campaign=apiRef&utm_source=838fe42386d01cc3a59c30320d921a36',
          },
          {
            type: 'wiki',
            url: 'http://marvel.com/universe/3-D_Man_(Chandler)?utm_campaign=apiRef&utm_source=838fe42386d01cc3a59c30320d921a36',
          },
          {
            type: 'comiclink',
            url: 'http://marvel.com/comics/characters/1011334/3-d_man?utm_campaign=apiRef&utm_source=838fe42386d01cc3a59c30320d921a36',
          },
        ],
      },
      {
        id: 1017100,
        name: 'A-Bomb (HAS)',
        description:
          "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
        modified: '2013-09-18T15:54:04-0400',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16',
          extension: 'jpg',
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1017100',
        comics: {
          available: 4,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1017100/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/47176',
              name: 'FREE COMIC BOOK DAY 2013 1 (2013) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/40632',
              name: 'Hulk (2008) #53',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/40630',
              name: 'Hulk (2008) #54',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/40628',
              name: 'Hulk (2008) #55',
            },
          ],
          returned: 4,
        },
        series: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1017100/series',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/17765',
              name: 'FREE COMIC BOOK DAY 2013 1 (2013)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/3374',
              name: 'Hulk (2008 - 2012)',
            },
          ],
          returned: 2,
        },
        stories: {
          available: 7,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1017100/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/92078',
              name: 'Hulk (2008) #55',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/92079',
              name: 'Interior #92079',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/92082',
              name: 'Hulk (2008) #54',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/92083',
              name: 'Interior #92083',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/92086',
              name: 'Hulk (2008) #53',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/92087',
              name: 'Interior #92087',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/105929',
              name: 'cover from Free Comic Book Day 2013 (Avengers/Hulk) (2013) #1',
              type: 'cover',
            },
          ],
          returned: 7,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1017100/events',
          items: [],
          returned: 0,
        },
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/characters/76/a-bomb?utm_campaign=apiRef&utm_source=838fe42386d01cc3a59c30320d921a36',
          },
          {
            type: 'comiclink',
            url: 'http://marvel.com/comics/characters/1017100/a-bomb_has?utm_campaign=apiRef&utm_source=838fe42386d01cc3a59c30320d921a36',
          },
        ],
      },
    ],
  },
};
const mockHeroesWithLimitandOffset = {
  code: 200,
  status: 'Ok',
  copyright: '© 2023 MARVEL',
  attributionText: 'Data provided by Marvel. © 2023 MARVEL',
  attributionHTML:
    '<a href="http://marvel.com">Data provided by Marvel. © 2023 MARVEL</a>',
  etag: '712fab77863714c579ee55c87973cf4d74094f43',
  data: {
    offset: 2,
    limit: 2,
    total: 1562,
    count: 2,
    results: [
      {
        id: 1009144,
        name: 'A.I.M.',
        description:
          'AIM is a terrorist organization bent on destroying the world.',
        modified: '2013-10-17T14:41:30-0400',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/20/52602f21f29ec',
          extension: 'jpg',
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009144',
        comics: {
          available: 52,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1009144/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/36763',
              name: 'Ant-Man & the Wasp (2010) #3',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17553',
              name: 'Avengers (1998) #67',
            },
            // ... (outras 50 edições de quadrinhos)
          ],
          returned: 20,
        },
        series: {
          available: 35,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1009144/series',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/13082',
              name: 'Ant-Man & the Wasp (2010 - 2011)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1991',
              name: 'Avengers (1963 - 1996)',
            },
            // ... (outras 33 séries)
          ],
          returned: 20,
        },
        stories: {
          available: 57,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1009144/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/5800',
              name: 'Avengers and Power Pack Assemble! (2006) #2',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/5801',
              name: '2 of 4 - 4XLS',
              type: 'interiorStory',
            },
            // ... (outras 55 histórias)
          ],
          returned: 20,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1009144/events',
          items: [],
          returned: 0,
        },
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/characters/77/aim.?utm_campaign=apiRef&utm_source=838fe42386d01cc3a59c30320d921a36',
          },
          {
            type: 'wiki',
            url: 'http://marvel.com/universe/A.I.M.?utm_campaign=apiRef&utm_source=838fe42386d01cc3a59c30320d921a36',
          },
          // ... (outros URLs)
        ],
      },
      {
        id: 1010699,
        name: 'Aaron Stack',
        description: '',
        modified: '1969-12-31T19:00:00-0500',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
          extension: 'jpg',
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010699',
        comics: {
          available: 14,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1010699/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/40776',
              name: 'Dark Avengers (2012) #177',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/40773',
              name: 'Dark Avengers (2012) #179',
            },
            // ... (outras 12 edições de quadrinhos)
          ],
          returned: 14,
        },
        series: {
          available: 3,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1010699/series',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/789',
              name: 'Dark Avengers (2012 - 2013)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/3374',
              name: 'Hulk (2008 - 2012)',
            },
            // ... (outras 1 série)
          ],
          returned: 3,
        },
        stories: {
          available: 27,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1010699/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/25634',
              name: 'Universe X (2000) #10',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/25635',
              name: 'Interior #25635',
              type: 'interiorStory',
            },
            // ... (outras 25 histórias)
          ],
          returned: 20,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1010699/events',
          items: [],
          returned: 0,
        },
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/characters/2809/aaron_stack?utm_campaign=apiRef&utm_source=838fe42386d01cc3a59c30320d921a36',
          },
          {
            type: 'comiclink',
            url: 'http://marvel.com/comics/characters/1010699/aaron_stack?utm_campaign=apiRef&utm_source=838fe42386d01cc3a59c30320d921a36',
          },
          // ... (outros URLs)
        ],
      },
    ],
  },
};

const enableMock = () => {
  fetchMock.mock({
    name: 'get-hero-by-id',
    url: new RegExp('/characters/hero-id'),
    method: 'GET',
    response: () => {
      return mockHero;
    },
  });

  fetchMock.mock({
    name: 'get-heroes-with-limit-and-offset',
    url: new RegExp('/characters'),
    method: 'GET',
    query: {
      limit: '2',
      offset: '2',
    },
    response: () => {
      return mockHeroesWithLimitandOffset;
    },
  });

  fetchMock.mock({
    url: new RegExp('/characters'),
    method: 'GET',
    response: () => {
      return mockHeroes;
    },
  });
};

export { mockHeroes, mockHero, mockHeroesWithLimitandOffset };

export default enableMock;
