import {ServerSpread} from "~/utils/app-route-controller/types";
import {AppRouteController} from "~/utils/app-route-controller/app-route-controller";
import {I18nCountry, I18nPages, Tenants, TenantsConfig} from "~/server/infra/types";
import {RedirectFunction} from "@remix-run/server-runtime";
import {logger} from '~/server/infra/logger';
import {getSession} from "~/server/application/commons/session.server";
import {
    getClientConfigFromCache,
    getCountryByKeyFromCache, getI18nFromCache,
    getTenantFromCache
} from "~/server/infra/global-cache/global-cache";

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
                    session
                }: {
        navigate: RedirectFunction,
        request: Request,
        translations: I18nPages;
        language: I18nCountry;
        session: Awaited<ReturnType<typeof getSession>>
    }) {
        const url = new URL(request.url)

        const {pathname} = url;
        const company = url.searchParams.get('company') || session.company || 'pontua';
        const country = url.searchParams.get('country') || session.country || 'br';
        const countryKey = getCountryByKeyFromCache(country);
        const countryCompany = `${company}-${countryKey}` as Tenants;
        const tenant = getTenantFromCache(countryCompany);
        const clientConfigs = getClientConfigFromCache(countryCompany);

        super({
            language,
            pathname,
            company,
            country: countryKey,
            clientConfigs,
            logger
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
        const url = new URL(request.url)
        const {pathname} = url;
        const company = url.searchParams.get('company') || session.company || 'pontua';
        const country = url.searchParams.get('country') || session.country || 'br';
        const countryKey = getCountryByKeyFromCache(country);
        const countryCompany = `${company}-${countryKey}` as Tenants;
        const tenant = await getTenantFromCache(countryCompany);
        const language = session.language || tenant.language;
        const translations = await getI18nFromCache(language);

        return new ServerAppRouteController({
            language,
            navigate,
            translations,
            request,
            session
        });
    }

    returnExtendedSpread = () => ({
        countryCompany: this.countryCompany,
        tenant: this.tenant,
        translations: this.translations,
    });

}