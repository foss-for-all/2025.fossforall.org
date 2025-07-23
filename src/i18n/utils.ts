import { ui, defaultLang, showDefaultLang } from "./ui";

export function getUrlWithoutLang(url: URL) {
  const path = url.pathname.split("/");
  const lang = path[1];

  if (lang in ui)
    return {
      path: `/${path.slice(2).join("/")}`,
      i18n: true,
    };
  return {
    path: url.pathname,
    i18n: false,
  };
}

export function getLangFromUrl(url: URL): keyof typeof ui {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

function normalize(path: string) {
  return path.startsWith("/") ? path : `/${path}`;
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    return !showDefaultLang && l === defaultLang
      ? normalize(path)
      : `/${l}${normalize(path)}`;
  };
}
