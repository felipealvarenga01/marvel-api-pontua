import type { RedirectFunction } from '@remix-run/server-runtime';
import { getSession } from '~/server/application/commons/session.server';
import {
  getClientConfigFromCache,
  getI18nFromCache,
  getTenantFromCache,
} from '~/server/infra/global-cache/global-cache';
import { logger } from '~/server/infra/logger';
import type {
  I18nCountry,
  I18nPages,
  Tenants,
  TenantsConfig,
} from '~/server/infra/types';
import { AppRouteController } from '~/utils/app-route-controller/app-route-controller';
import type { ServerSpread } from '~/utils/app-route-controller/types';
import clientConfigMock from '../../../mocks/cache/client-config';
import i18nMock from '../../../mocks/cache/i18n';
import tenantMock from '../../../mocks/cache/tenants';

export class ServerAppRouteController extends AppRouteController<ServerSpread> {
  private readonly countryCompany: Tenants;

  private readonly translations: I18nPages;

  private readonly tenant: TenantsConfig;

  navigate: RedirectFunction;

  constructor({
    navigate,
    translations,
    language,
    request,
    session,
  }: {
    navigate: RedirectFunction;
    request: Request;
    translations: I18nPages;
    language: I18nCountry;
    session: Awaited<ReturnType<typeof getSession>>;
  }) {
    const url = new URL(request.url);

    const { pathname } = url;
    const company = 'pontua';
    const country = 'br';
    const countryKey = country;
    const countryCompany = `${company}-${countryKey}` as Tenants;
    const tenant = tenantMock[countryCompany];
    const clientConfigs = clientConfigMock[countryCompany];

    super({
      language,
      pathname,
      company,
      country: countryKey,
      clientConfigs,
      logger,
    });

    this.navigate = navigate;
    this.countryCompany = `${company}-${countryKey}` as Tenants;
    this.translations = translations;
    this.tenant = tenant;
  }

  static async createInstance({
    redirect: navigate,
    request,
  }: {
    redirect: RedirectFunction;
    request: Request;
  }): Promise<ServerAppRouteController> {
    const session = await getSession(request);

    const company = 'pontua';
    const country = 'br';
    const countryKey = country;
    const countryCompany = `${company}-${countryKey}` as Tenants;
    const tenant = tenantMock[countryCompany];
    const language = session.language || tenant.language;
    // @ts-ignore
    const translations = i18nMock[language];

    return new ServerAppRouteController({
      language,
      navigate,
      translations,
      request,
      session,
    });
  }

  returnExtendedSpread = () => ({
    countryCompany: this.countryCompany,
    tenant: this.tenant,
    translations: this.translations,
  });
}
