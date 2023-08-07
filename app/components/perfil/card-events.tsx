import { useEffect, useState } from 'react';
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

export default function CardComics({ comics }: CardComicsProps) {
  const [comicsInfos, setComicInfos] = useState<ComicsProps[]>(); // Initialize with an empty array
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
    const data: ComicsProps[] = [];
    for (const item of comics) {
      const [, comicId] = item.resourceURI.split('/comics/'); // Extract the comic ID from resourceURI
      data.push((await fetchComicData(comicId)) as ComicsProps);
    }
    setComicInfos(data);
    setLoadingData(false);
  }

  useEffect(() => {
    loadComics().then();
  }, [loadComics]);

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
        <>
          {comicsInfos &&
            comicsInfos.map((comicInfo, index) => (
              <div key={index}>
                <img src={comicInfo.thumbnail} alt={comicInfo.title} />
                <h3>{comicInfo.title}</h3>
                <p>{comicInfo.description}</p>
              </div>
            ))}
        </>
      )}
    </TabCard>
  );
}
