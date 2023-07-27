import type { RedirectFunction } from '@remix-run/server-runtime';
import { enableMock } from 'mocks';
import { vi } from 'vitest';
import * as session from '~/server/application/commons/session.server';
import i18n from '../../../../mocks/cache/i18n';
import tenants from '../../../../mocks/cache/tenants';
import { ServerAppRouteController } from '../server-app-route-controller.server';

describe('app-route-controller', () => {
    beforeAll(() => {
        enableMock();
    });

    const createInstance = (params?: {
        redirect?: RedirectFunction;
        request?: Request;
    }) => {
        return ServerAppRouteController.createInstance({
            redirect: params?.redirect || vi.fn().mockImplementation((e) => e),
            request:
                params?.request ||
                new Request('http://localhost:3000?company=pontua&country=br'),
        });
    };

    it.skip('Verifica se novas instancias tem propriedades privadas', async () => {
        const app = await createInstance();

        expect(app['countryCompany']).toEqual('pontua-br');
        expect(app['tenant']).toEqual(tenants['pontua-br']);
        expect(app['language']).toEqual('pt-BR');
        expect(app['translations']).toEqual(i18n['pt-BR']);
    });

    it.skip('Usando Valores de sessão', async () => {
        vi.spyOn(session, 'getSession').mockResolvedValue({
            company: 'pontua',
            country: 'br',
        });

        const app = await createInstance({
            request: new Request('http://localhost:3000'),
        });

        expect(app['countryCompany']).toEqual('pontua-br');
        expect(app['tenant']).toEqual(tenants['pontua-br']);
        expect(app['language']).toEqual('pt-BR');
        expect(app['translations']).toEqual(i18n['pt-BR']);
    });

    it.skip('returnSpread', async () => {
        const app: any = await createInstance();

        //common
        app['next'] = 'next';
        app['back'] = 'back';
        app['company'] = 'company';
        app['country'] = 'country';
        app['getCurrentStepNumber'] = vi.fn().mockReturnValue('currentStepNumber');
        app['getLastStepNumber'] = vi.fn().mockReturnValue('getLastStepNumber');
        app['getCurrentRoute'] = vi.fn().mockReturnValue({ stepIndex: 1 });
        app['clientConfigs'] = 'clientConfigs';
        app['getFirstStep'] = vi.fn().mockReturnValue('getFirstStep');

        //server only
        app['countryCompany'] = 'countryCompany';
        app['tenant'] = 'tenant';
        app['language'] = 'language';
        app['translations'] = 'translations';

        expect(app.returnSpread()).toEqual({
            next: 'next',
            back: 'back',
            company: 'company',
            country: 'country',
            currentStepNumber: 'currentStepNumber',
            lastStepNumber: 'getLastStepNumber',
            currentRoute: { stepIndex: 1 },
            isFirstStep: false,
            clientConfigs: 'clientConfigs',
            firstStep: 'getFirstStep',
            countryCompany: 'countryCompany',
            tenant: 'tenant',
            language: 'language',
            translations: 'translations',
        });
    });
});
