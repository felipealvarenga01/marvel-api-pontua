import { useEffect, useState } from 'react';
import { GridContainer } from '~/components/commons/content/content';
import {
  StoryContainer,
  StoryInfo,
  StoryInfoDescription,
  StoryInfoTitle,
  StoryThumbnail,
} from '~/components/perfil/styles';
import { TabCard } from '~/components/tabs/tabs-styles';
import { ClientRequestBuilder } from '~/server/infra/request-builder';
import loading from '../../assets/icon-1.1s-46px.gif';

type CardStoriesProps = {
  stories: Array<{ resourceURI: string; name: string }>;
};

type StoriesProps = {
  title: string;
  description: string | null;
  thumbnail: string;
};

const windowRef = typeof window !== 'undefined' ? window : null;

export default function CardStories({ stories }: CardStoriesProps) {
  const [storiesInfos, setStoryInfos] = useState<StoriesProps[]>(); // Initialize with an empty array
  const [loadingData, setLoadingData] = useState(false);

  async function fetchStoryData(storyId: string) {
    // @ts-ignore
    return (
      new ClientRequestBuilder<unknown>({
        baseUrl: '/api/get-info-story',
      })
        .withMethod('PUT')
        // @ts-ignore
        .withBody({ storyId })
        .call()
    );
  }

  async function loadStories() {
    setLoadingData(true);
    const storageData = windowRef?.localStorage.getItem('stories');
    if (storageData && JSON.parse(storageData).length) {
      setStoryInfos(JSON.parse(storageData));
      setLoadingData(false);
    }

    const data: StoriesProps[] = [];
    for (const item of stories) {
      const [, storyId] = item.resourceURI.split('/stories/');
      data.push((await fetchStoryData(storyId)) as StoriesProps);
    }
    setStoryInfos(data);
    windowRef?.localStorage.setItem('stories', JSON.stringify(data));
    setLoadingData(false);
  }

  useEffect(() => {
    loadStories().then();
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
          {storiesInfos &&
            storiesInfos.map((storyInfo, index) => (
              <StoryContainer key={index}>
                <StoryThumbnail
                  src={storyInfo.thumbnail}
                  alt={storyInfo.title}
                />
                <StoryInfo>
                  <StoryInfoTitle>{storyInfo.title}</StoryInfoTitle>
                  <StoryInfoDescription>
                    {storyInfo.description}
                  </StoryInfoDescription>
                </StoryInfo>
              </StoryContainer>
            ))}
        </GridContainer>
      )}
    </TabCard>
  );
}
