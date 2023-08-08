import { useEffect, useState } from 'react';
import { GridContainer } from '~/components/commons/content/content';
import {
  EventsContainer,
  EventsInfo,
  EventsInfoDescription,
  EventsInfoTitle,
  EventsThumbnail,
} from '~/components/perfil/styles';
import { TabCard } from '~/components/tabs/tabs-styles';
import { ClientRequestBuilder } from '~/server/infra/request-builder';
import loading from '../../assets/icon-1.1s-46px.gif';

type CardEventsProps = {
  events: Array<{ resourceURI: string; name: string }>;
};

type EventsProps = {
  title: string;
  description: string | null;
  thumbnail: string;
  startDate: string;
  endDate: string;
};

const windowRef = typeof window !== 'undefined' ? window : null;

export default function CardEvents({ events }: CardEventsProps) {
  const [eventsInfos, setEventsInfos] = useState<EventsProps[]>(); // Initialize with an empty array
  const [loadingData, setLoadingData] = useState(false);

  async function fetchEventData(eventId: string) {
    // @ts-ignore
    return (
      new ClientRequestBuilder<unknown>({
        baseUrl: '/api/get-info-event',
      })
        .withMethod('PUT')
        // @ts-ignore
        .withBody({ eventId })
        .call()
    );
  }

  async function loadEvents() {
    setLoadingData(true);
    const storageData = windowRef?.localStorage.getItem('events');
    if (storageData && JSON.parse(storageData).length) {
      setEventsInfos(JSON.parse(storageData));
      setLoadingData(false);
    }
    const data: EventsProps[] = [];
    for (const item of events) {
      const [, eventId] = item.resourceURI.split('/events/'); // Extract the comic ID from resourceURI
      data.push((await fetchEventData(eventId)) as EventsProps);
    }
    setEventsInfos(data);
    windowRef?.localStorage.setItem('events', JSON.stringify(data));
    setLoadingData(false);
  }

  useEffect(() => {
    loadEvents().then();
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
          {eventsInfos &&
            eventsInfos.map((eventInfo, index) => (
              <EventsContainer key={index}>
                <EventsThumbnail
                  src={eventInfo.thumbnail}
                  alt={eventInfo.title}
                />
                <EventsInfo>
                  <EventsInfoTitle>{eventInfo.title}</EventsInfoTitle>
                  <EventsInfoDescription>
                    {eventInfo.description}
                  </EventsInfoDescription>
                </EventsInfo>
              </EventsContainer>
            ))}
        </GridContainer>
      )}
    </TabCard>
  );
}
