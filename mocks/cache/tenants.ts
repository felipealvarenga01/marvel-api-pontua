import {Tenants, TenantsConfig} from "../../app/server/infra/types";

export default {
  'pontua-br': {
    company: 'pontua',
    tenantId: '123456',
    countryCode: 'br',
    language: 'pt-BR',
    themeConfigs: {
      logo: {
        color: 'neutral'
      }
    },
    redirect: 'asd'
  },
  
} as Record<Tenants, TenantsConfig>