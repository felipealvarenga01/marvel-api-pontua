import type { CleaveOptions } from 'cleave.js/options';

export type PagesRoutes = 'login' | 'home' | 'perfil';

export type I18nCountry = 'pt-BR';

export type I18nPages = {
  pages: Pages;
} & { common: Commons };

export type Pages = Partial<
  Record<
    PagesRoutes,
    {
      title?: string;
      subtitle?: string;
      steps?: Record<string, any>;
      errors?: Record<string, string | Record<string, string>>;
    }
  >
>;

export type Commons = Record<string, string | Record<string, string>>;

export type Tenants = 'pontua-br' | 'pontua-en';

export type TenantsConfig = {
  company: string;
  tenantId?: string;
  countryCode: string;
  language: string;
  themeConfigs: {
    company: string;
    logo: {
      color: string;
    };
  };

  redirect?: string;
};

export type RecordTenants = Record<Tenants, TenantsConfig>;

export type RecordCountries = Record<string, string[]>;

export type RecordFormDataOptions =
  | 'sessionStorage'
  | 'localStorage'
  | undefined;

export type GeneralConfigOptions = 'phonePrefixCode';

export type StepNextRoute =
  | string
  | null
  | {
      success: string;
      error: string;
    };

export type Step = {
  step: number | 'last';
  route: string;
  inputs?: Record<string, any>;
  others?: Record<string, string>;
  masks?: Record<string, CleaveOptions>;
  back: string | null;
  next: StepNextRoute;
};

export type Page = {
  page: PagesRoutes;
  steps?: Step[];
};

export type SetupClient = {
  pages: Page[];
  featureToggles: {
    shouldRecordFormData: RecordFormDataOptions;
  };
  generalConfig: Record<GeneralConfigOptions, string | number | boolean>;
};

export type I18n = Record<I18nCountry, I18nPages>;

export type ClientConfig = Record<Tenants, SetupClient>;

export type InfraConfig = {
  apiPontuaURL: string;
};

export type InfraConfigs = Record<Tenants, InfraConfig>;
