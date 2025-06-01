import localeKo from './ko';
import localeEn from './en';

export const languages = {
  en: localeEn.localeName,
  ko: localeKo.localeName
};

export const defaultLang = 'ko';

export const ui = {
  en: localeEn.locale,
  ko: localeKo.locale
} as const;