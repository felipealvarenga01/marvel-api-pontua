import type {RouteMatch} from '@remix-run/react';
import {vi} from 'vitest';
import clientConfigs from '../../../../mocks/cache/client-config';
import tenants from '../../../../mocks/cache/tenants';
import {ClientAppRouteController} from '../client-app-route-controller';

describe('app-route-controller', () => {
    const defaultRouteData = {
        tenant: tenants['pontua-br'],
        clientConfigs: clientConfigs['pontua-br'],
    };
    const createInstance = (params?: {
        navigate?: () => void;
        pathname?: string;
        route?: Partial<RouteMatch>;
    }) => {
        return new ClientAppRouteController({
            navigate: params?.navigate || vi.fn().mockImplementation((e) => e),
            pathname: params?.pathname || '/path',
            route: {
                data: defaultRouteData,
                handle: {},
                id: '',
                params: {},
                pathname: '',
                ...params?.route,
            },
        });
    };

    const documentRoute = '../document';

    it.skip('returnSpread', () => {
        const app: any = createInstance();
        app['company'] = 'company';
        app['country'] = 'country';
        app['clientConfigs'] = 'clientConfigs';
        app['next'] = 'next';
        app['currentRoute'] = { stepIndex: 1 };

        expect(app.returnSpread()).toEqual({
            clientConfigs: "clientConfigs",
            company: "company",
            country: "country",
            currentRoute: {
                stepIndex: 1,
            },
            language: "pt-BR",
            next: "next",
            themeConfigs: {
                logo: {
                    color: "neutral",
                },
            },
        });
    });
});
