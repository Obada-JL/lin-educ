import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n.config';

export default createMiddleware({
  locales,
  defaultLocale,
  // Changed from "as-needed" to "always" to ensure consistent URL structure
  localePrefix: "always"
});

export const config = {
  // Updated matcher pattern to ensure it catches all routes
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
