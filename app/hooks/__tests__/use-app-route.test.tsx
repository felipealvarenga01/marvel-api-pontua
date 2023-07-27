import { renderHook } from '@testing-library/react';
import { renderMocks } from 'tests/remix-stub';
import { vi } from 'vitest';
import clientConfigs from '../../../mocks/cache/client-config';
import tenants from '../../../mocks/cache/tenants';
import { useAppRoute } from '../use-app-route';

const defaultRouteData = {
    tenant: tenants['pontua-br'],
    clientConfigs: clientConfigs['pontua-br'],
};
it('should initialize useAppRoute correctly', async () => {
    const { result } = renderHook(() => useAppRoute(), {
        wrapper: ({ children }) =>
            renderMocks(
                children,
                {
                    useMatches: vi.fn().mockReturnValue([
                        {
                            pathname: '',
                        },
                        {
                            data: defaultRouteData,
                        },
                        {
                            data: defaultRouteData,
                        },
                    ]),
                },
                {
                    shouldNotUseAppRoute: true,
                },
            ) as unknown as JSX.Element,
    });

    expect(result.current.company).toBe('pontua');
    expect(result.current.country).toBe('br');
});
