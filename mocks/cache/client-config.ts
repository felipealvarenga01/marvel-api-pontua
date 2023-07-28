import type { ClientConfig, SetupClient } from '../../app/server/infra/types';

const pontuaBrClientConfig: SetupClient = {
  pages: [
    {
      page: 'login',
    },
    {
      page: 'home',
    },
    {
      page: 'perfil',
    },
    {
      page: 'forgot-password',
    },
  ],
  featureToggles: {
    shouldRecordFormData: 'sessionStorage',
  },
  generalConfig: {
    phonePrefixCode: '55',
  },
};

export default {
  'pontua-br': pontuaBrClientConfig,
} as ClientConfig;
