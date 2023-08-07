import { useEffect, useState } from 'react';
import { GridContainer } from '~/components/commons/content/content';
import {
  ComicsContainer,
  ComicsInfo,
  ComicsInfoDescription,
  ComicsInfoTitle,
  ComicsThumbnail,
} from '~/components/perfil/styles';
import { TabCard } from '~/components/tabs/tabs-styles';
import { ClientRequestBuilder } from '~/server/infra/request-builder';
import loading from '../../assets/icon-1.1s-46px.gif';

type CardComicsProps = {
  comics: Array<{ resourceURI: string; name: string }>;
};

type ComicsProps = {
  title: string;
  description: string | null;
  thumbnail: string;
};

const windowRef = typeof window !== 'undefined' ? window : null;

export default function CardComics({ comics }: CardComicsProps) {
  const [comicsInfos, setComicInfos] = useState<ComicsProps[]>();
  const [loadingData, setLoadingData] = useState(false);

  async function fetchComicData(comicId: string) {
    // @ts-ignore
    return (
      new ClientRequestBuilder<unknown>({
        baseUrl: '/api/get-info-comic',
      })
        .withMethod('PUT')
        // @ts-ignore
        .withBody({ comicId })
        .call()
    );
  }

  async function loadComics() {
    setLoadingData(true);
    const storageData = windowRef?.localStorage.getItem('comics');
    if (storageData) {
      setComicInfos(JSON.parse(storageData));
      setLoadingData(false);
    }

    const data: ComicsProps[] = [];
    for (const item of comics) {
      const [, comicId] = item.resourceURI.split('/comics/'); // Extract the comic ID from resourceURI
      data.push((await fetchComicData(comicId)) as ComicsProps);
    }
    setComicInfos(data);
    windowRef?.localStorage.setItem('comics', JSON.stringify(data));
    setLoadingData(false);
  }

  useEffect(() => {
    loadComics().then();
  }, []);

  return (
    <TabCard>
      {loadingData ? (
        <>
          <img src={loading} alt="Carregando" />
          <p>
            Esperando a api da marvel retornar os dados...logo logo a espera
            acaba
          </p>
        </>
      ) : (
        <GridContainer>
          {comicsInfos &&
            comicsInfos.map((comicInfo, index) => (
              <ComicsContainer key={index}>
                <ComicsThumbnail
                  src={comicInfo.thumbnail}
                  alt={comicInfo.title}
                />
                <ComicsInfo>
                  <ComicsInfoTitle>{comicInfo.title}</ComicsInfoTitle>
                  <ComicsInfoDescription>
                    {comicInfo.description}
                  </ComicsInfoDescription>
                </ComicsInfo>
              </ComicsContainer>
            ))}
        </GridContainer>
      )}
    </TabCard>
  );
}
