"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { languages } from "../i18n";

export function useLanguage() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  // Define languages locally if import fails
  const defaultLanguages = {
    ar: {
      name: 'العربية',
      dir: 'rtl',
    },
    en: {
      name: 'English',
      dir: 'ltr',
    },
  };

  const availableLanguages = languages || defaultLanguages;

  const switchLanguage = (newLocale) => {
    if (availableLanguages[newLocale]) {
      const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
      router.push(newPath);
    }
  };

  const currentLanguage = availableLanguages[locale] || availableLanguages.en || { name: 'English', dir: 'ltr' };

  return {
    locale,
    currentLanguage,
    switchLanguage,
    isRTL: locale === "ar",
    languages: availableLanguages
  };
} 