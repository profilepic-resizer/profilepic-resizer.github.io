import { ui, defaultLocale, type Locale, languages } from './ui';

export function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (lang && lang in ui) return lang as Locale;
  return defaultLocale;
}

export function useTranslations(lang: Locale) {
  return function t(key: keyof (typeof ui)[typeof defaultLocale]): string {
    return ui[lang]?.[key] || ui[defaultLocale][key] || key;
  };
}

export function getLocalizedPath(path: string, lang: Locale): string {
  // Clean path
  const cleanPath = path.replace(/^\/(en|es|fr|pt|ja)/, '').replace(/\/+/g, '/');
  const base = cleanPath === '' ? '/' : cleanPath;
  
  if (lang === defaultLocale) {
    return base;
  }
  return `/${lang}${base.startsWith('/') ? base : `/${base}`}`;
}

export function getAlternateUrls(currentUrl: URL, siteUrl: string = 'https://profilepic-resizer.github.io') {
  const currentPath = currentUrl.pathname;
  const cleanPath = currentPath.replace(/^\/(en|es|fr|pt|ja)/, '').replace(/\/+/g, '/');
  const base = cleanPath === '' ? '/' : cleanPath;

  const alternates = Object.keys(languages).map((code) => {
    const lang = code as Locale;
    const localizedPath = getLocalizedPath(base, lang);
    return {
      lang,
      url: `${siteUrl}${localizedPath === '/' ? '' : localizedPath}`,
    };
  });

  return alternates;
}
