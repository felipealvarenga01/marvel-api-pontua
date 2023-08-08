import { useEffect, useState } from 'react';
import { GridContainer } from '~/components/commons/content/content';
import {
  SeriesContainer,
  SeriesInfo,
  SeriesInfoDescription,
  SeriesInfoTitle,
  SeriesThumbnail,
} from '~/components/perfil/styles';
import { TabCard } from '~/components/tabs/tabs-styles';
import { ClientRequestBuilder } from '~/server/infra/request-builder';
import loading from '../../assets/icon-1.1s-46px.gif';

type CardSeriesProps = {
  series: Array<{ resourceURI: string; name: string }>;
};

type SeriesProps = {
  title: string;
  description: string | null;
  thumbnail: string;
  startDate: string;
  endDate: string;
};

const windowRef = typeof window !== 'undefined' ? window : null;

export default function CardSeries({ series }: CardSeriesProps) {
  const [seriesInfos, setSeriesInfos] = useState<SeriesProps[]>();
  const [loadingData, setLoadingData] = useState(false);

  async function fetchSerieData(serieId: string) {
    // @ts-ignore
    return (
      new ClientRequestBuilder<unknown>({
        baseUrl: '/api/get-info-serie',
      })
        .withMethod('PUT')
        // @ts-ignore
        .withBody({ serieId })
        .call()
    );
  }

  async function loadSeries() {
    setLoadingData(true);
    const storageData = windowRef?.localStorage.getItem('series');
    if (storageData && JSON.parse(storageData).length) {
      setSeriesInfos(JSON.parse(storageData));
      setLoadingData(false);
    }
    const data: SeriesProps[] = [];
    for (const item of series) {
      const [, serieId] = item.resourceURI.split('/series/');
      data.push((await fetchSerieData(serieId)) as SeriesProps);
    }
    setSeriesInfos(data);
    windowRef?.localStorage.setItem('series', JSON.stringify(data));
    setLoadingData(false);
  }

  useEffect(() => {
    loadSeries().then();
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
          {seriesInfos &&
            seriesInfos.map((serieInfo, index) => (
              <SeriesContainer key={index}>
                <SeriesThumbnail
                  src={serieInfo.thumbnail}
                  alt={serieInfo.title}
                />
                <SeriesInfo>
                  <SeriesInfoTitle>{serieInfo.title}</SeriesInfoTitle>
                  <SeriesInfoDescription>
                    {serieInfo.description}
                  </SeriesInfoDescription>
                </SeriesInfo>
              </SeriesContainer>
            ))}
        </GridContainer>
      )}
    </TabCard>
  );
}
