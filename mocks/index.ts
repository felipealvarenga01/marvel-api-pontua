import fetchMock from 'fetch-mock';
import enableGetInfoMarvelMock from './api/get-info-marvel';

const shouldUseMock = (): boolean => {
  return process.env.USE_MOCK === 'true' || process.env.NODE_ENV === 'test';
};
const enableMock = () => {
  if (shouldUseMock()) {
    fetchMock.config.fallbackToNetwork = true;
    enableGetInfoMarvelMock();
  }
};

const disableMock = () => {
  fetchMock.reset();
};

export { enableMock, disableMock, shouldUseMock };
