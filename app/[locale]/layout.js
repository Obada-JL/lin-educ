import "bootstrap/dist/css/bootstrap.css";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { locales } from "../../i18n";
import Script from "next/script";

// These are the locales we support

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params: { locale } }) {
  try {
    const messages = (await import(`../../messages/${locale}.json`)).default;

    if (!locales.includes(locale)) {
      notFound();
    }

    return (
      <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
        <head>
          <title>Lin Education</title>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="/styles/bootstrap.min.css" />
          <link rel="stylesheet" href="/styles/main_styles.css" />
          <link rel="stylesheet" href="/styles/responsive.css" />
          <link rel="icon" href="/homelogo.png" />
        </head>
        <body className={`vsc-initialized ${locale === "ar" ? "rtl" : "ltr"}`}>
          <NextIntlClientProvider
            locale={locale}
            messages={messages}
            timeZone="Asia/Riyadh"
          >
            <NavBar />
            <main>{children}</main>
            <Footer />
          </NextIntlClientProvider>
          
          {/* Load jQuery before Bootstrap */}
          <Script
            src="https://code.jquery.com/jquery-3.6.0.min.js"
            strategy="beforeInteractive"
          />
          <Script
            src="/styles/bootstrap-5.3.3/bootstrap.min.js"
            strategy="afterInteractive"
          />
        </body>
      </html>
    );
  } catch (error) {
    console.error("Layout Error:", error);
    notFound();
  }
}
