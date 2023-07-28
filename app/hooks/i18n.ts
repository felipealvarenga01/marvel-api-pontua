import { useMatches } from '@remix-run/react';
import get from 'lodash/get';

type Translation = Record<string, string | Record<string, string>>;

type Translations = Record<string, Translation>;

export type Translate = {
  translate: (
    key: string,
    values?: Record<string, string | number | undefined>,
  ) => string;
};

export type TranslationConfig = {
  translations: Translations;
  defaultLanguage: string;
  fallbackLanguage: string;
};

function translateHigh(translations: Translation) {
  function getKey(key: string, plural: false): Record<string, string> | string;
  function getKey(key: string, plural?: true): string;
  function getKey(key: string, plural?: boolean) {
    const pluralKey = `${key}${plural ? '_plural' : ''}`;

    return get(translations, pluralKey);
  }

  function translate(
    key: string,
    values?: Record<string, string | number | undefined>,
  ): string {
    let message = getKey(key) || key;
    if (values) {
      message = Object.entries(values).reduce((acc, [k, v]) => {
        if (typeof v === 'number' && v > 1 && getKey(key, true)) {
          return getKey(key, true).replace(`{${k}}`, `${v}`);
        }

        return acc.replace(`{${k}}`, `${v}`);
      }, message);
    }

    return message;
  }

  return translate;
}

export function useTranslation(prefixKey?: string): Translate {
  const [, { data }] = useMatches();

  const { translations } = data;

  const filteredTranslations = prefixKey
    ? get(translations, prefixKey)
    : translations;

  return {
    translate: translateHigh(filteredTranslations),
  };
}
