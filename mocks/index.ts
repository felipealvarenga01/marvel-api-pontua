import fetchMock from 'fetch-mock';
import enableGetComicByIdMock from './api/get-info-comic';
import enableGetEventsByIdMock from './api/get-info-event';
import enableGetInfoMarvelMock from './api/get-info-marvel';
import enableGetSeriesByIdMock from './api/get-info-serie';
import enableGetStoriesByIdMock from './api/get-info-story';

const shouldUseMock = (): boolean => {
  return process.env.USE_MOCK === 'true' || process.env.NODE_ENV === 'test';
};
const enableMock = () => {
  if (shouldUseMock()) {
    fetchMock.config.fallbackToNetwork = true;
    enableGetInfoMarvelMock();
    enableGetComicByIdMock();
    enableGetEventsByIdMock();
    enableGetSeriesByIdMock();
    enableGetStoriesByIdMock();
  }
};

const disableMock = () => {
  fetchMock.reset();
};

export { enableMock, disableMock, shouldUseMock };
