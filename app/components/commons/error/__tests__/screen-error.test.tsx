import { vi } from 'vitest';
import { ScreenError } from '~/components/commons/error/screen-error';
import { renderRemix } from '../../../../../tests/remix-stub';

const somethingWentWrong = 'common.errors.somethingWrong';
const reloadMock = vi.fn();

Object.defineProperty(window, 'location', {
  writable: true,
  value: {
    reload: reloadMock,
  },
});

const useAppRouteMock = vi.fn().mockReturnValue({
  currentRout: {
    step: {
      route: 'document',
    },
  },
});

beforeEach(() => (window.dataLayer = []));

describe('', () => {
  it('should', () => {
    const { getByText } = renderRemix(<ScreenError />, {
      useDeviceDetect: vi.fn().mockReturnValue({ isMobile: false }),
      useAppRoute: useAppRouteMock,
    });
    expect(getByText(somethingWentWrong)).toBeInTheDocument();
  });
});
