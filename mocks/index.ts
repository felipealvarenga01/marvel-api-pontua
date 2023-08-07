import fetchMock from 'fetch-mock';
import enableGetComicByIdMock from './api/get-info-comic';
import enableGetEventByIdMock from './api/get-info-event';
import enableGetInfoMarvelMock from './api/get-info-marvel';
import enableGetSerieByIdMock from './api/get-info-serie';
import enableGetStoryByIdMock from './api/get-info-story';

const shouldUseMock = (): boolean => {
  return process.env.USE_MOCK === 'true' || process.env.NODE_ENV === 'test';
};
const enableMock = () => {
  if (shouldUseMock()) {
    fetchMock.config.fallbackToNetwork = true;
    enableGetInfoMarvelMock();
    enableGetComicByIdMock();
    enableGetEventByIdMock();
    enableGetSerieByIdMock();
    enableGetStoryByIdMock();
  }
};

const disableMock = () => {
  fetchMock.reset();
};

export { enableMock, disableMock, shouldUseMock };
