import { getRequestConfig } from 'next-intl/server';
import { defaultLocale } from './settings';

export default getRequestConfig(async ({ locale }) => {
  try {
    const messages = await import(`../messages/${locale}.json`).then(
      module => module.default
    );

    return {
      messages,
      timeZone: 'Asia/Riyadh',
      now: new Date(),
      defaultLocale,
      locale: locale ?? defaultLocale
    };
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
    // Fallback to default locale if message loading fails
    const defaultMessages = await import(`../messages/${defaultLocale}.json`).then(
      module => module.default
    );
    return {
      messages: defaultMessages,
      timeZone: 'Asia/Riyadh',
      now: new Date(),
      defaultLocale,
      locale: defaultLocale
    };
  }
});
