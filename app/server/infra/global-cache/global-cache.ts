// TODO remove nocheck
// @ts-nocheck
import NodeCache from 'node-cache';
import {shouldUseMock as isDev} from '../../../../mocks';
import i18nMock from '../../../../mocks/cache/i18n'
import clientConfigMock from '../../../../mocks/cache/client-config';
import infraConfigMock from '../../../../mocks/cache/infra-config';
import tenantMock from '../../../../mocks/cache/tenants';
import countriesMock from '../../../../mocks/cache/countries';
import {
    ClientConfig,
    I18n,
    I18nCountry,
    I18nPages,
    InfraConfig,
    InfraConfigs,
    RecordCountries,
    RecordTenants,
    SetupClient,
    Tenants,
    TenantsConfig
} from "../types";


function typedKeys<T>(obj: T): Array<keyof T> {
    return Object.keys(obj) as Array<keyof T>;
}

async function createI18nCache() {
    global.i18nCache = new NodeCache();
    
    // Fetch das i18n no App Config
    const i18n: I18n = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(i18nMock);
        }, 1);
    });
    
    typedKeys(i18n).forEach((i) => global.i18nCache.set(i, i18n[i]));
}

async function createClientConfigCache() {
    global.clientConfigCache = new NodeCache();
    
    // Fetch das configurações de client side no App Config
    const configs: ClientConfig = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(clientConfigMock);
        }, 1);
    });
    
    typedKeys(configs).forEach((c) =>
      global.clientConfigCache.set(c, configs[c]),
    );
}

async function createInfraConfigCache() {
    global.infraConfigCache = new NodeCache();
    
    // Fetch das configurações de infra no App Config
    const configs: InfraConfigs = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(infraConfigMock);
        }, 1);
    });
    
    typedKeys(configs).forEach((c) => global.infraConfigCache.set(c, configs[c]));
}

async function createTenantCache() {
    global.tenantCache = new NodeCache();
    
    // Fetch das tenants no App Config
    const tenants: RecordTenants = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(tenantMock);
        }, 1);
    });
    
    typedKeys(tenants).forEach((t) => global.tenantCache.set(t, tenants[t]));
}


async function createCountriesCache() {
    global.countriesCache = new NodeCache();
    
    const countries: RecordCountries = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(countriesMock);
        }, 1);
    });
    

    const {set} = global.countriesCache;
    set('all', countries);
}

function getCountryByKeyFromCache(country: string) {
    const {get} = global.countriesCache;
    const countries: Record<string, string[]> = isDev()
      ? countriesMock
      : get('all');
    
    let countryKey = country;
    
    Object.entries(countries).forEach(([key, value]) => {
        if (key === country) {
            countryKey = key;
        }
        
        if (value.includes(country)) {
            countryKey = key;
        }
    });
    
    return countryKey;
}

function getTenantFromCache(tenantId: Tenants) {
    return (
      isDev() ? tenantMock[tenantId] : global.tenantCache.get(tenantId)
    ) as TenantsConfig;
}


function getI18nFromCache(lang: I18nCountry) {
    return (isDev() ? i18nMock[lang] : global.i18nCache.get(lang)) as I18nPages;
}


function getClientConfigFromCache(tenantId: Tenants) {
    return (
      isDev()
        ? clientConfigMock[tenantId]
        : global.clientConfigCache.get(tenantId)
    ) as SetupClient;
}

function getInfraConfigFromCache(tenantId: Tenants) {
    const test = (
      isDev() ? infraConfigMock[tenantId] : global.infraConfigCache.get(tenantId)
    ) as InfraConfig;
    return test;
}

async function flushCache(){
    //TODO colocar aqui todas as funcoes do cache
    await createI18nCache();
    await createClientConfigCache();
    await createInfraConfigCache();
    await createTenantCache();
    await createCountriesCache();
}
export {
    flushCache,
    getTenantFromCache,
    getClientConfigFromCache,
    getCountryByKeyFromCache,
    getInfraConfigFromCache,
    getI18nFromCache,
};