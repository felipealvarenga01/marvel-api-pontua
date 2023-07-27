import {I18nCountry, I18nPages, Tenants, TenantsConfig} from "~/server/infra/types";

export type ServerSpread = {
    countryCompany: Tenants;
    tenant: TenantsConfig;
    translations: I18nPages;
    language?: I18nCountry;
}

export type ClientSpread = {
    themeConfigs: TenantsConfig['themeConfigs'];
};


