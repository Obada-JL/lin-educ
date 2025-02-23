"use client";

import Image from "next/image";
import Logo from "../../../images/homelogo.png";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "../../../navigation";
import { usePathname, useRouter } from "next/navigation";

export default function NavBar() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("navbar"); // Specify the namespace

  // Define the language switch label based on current locale
  const switchLabel = locale === "ar" ? "English" : "العربية";

  const navLinks = [
    { path: "/", label: "home" },
    { path: "/about", label: "about" },
    { path: "/courses", label: "courses" },
    { path: "/contact", label: "contact" },
  ];

  const handleLanguageSwitch = () => {
    const nextLocale = locale === "ar" ? "en" : "ar";
    const newPath = pathname.replace(`/${locale}`, `/${nextLocale}`);
    router.push(newPath);
  };

  return (
    <header className="header" dir={locale === "ar" ? "rtl" : "ltr"}>
      <div className="d-flex flex-row align-items-center justify-content-start">
        <div className="logo_container">
          <Link href="/">
            <div className="logo">
              <Image
                src={Logo}
                alt={t("logo.alt")}
                width={100}
                height={100}
                priority
              />
            </div>
          </Link>
        </div>

        <nav className="main_nav">
          <ul className="d-flex flex-row align-items-center">
            {navLinks.map(({ path, label }) => (
              <li key={path}>
                <Link href={path}>
                  {t(label)}{" "}
                  {/* This will now correctly use the navbar namespace */}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          onClick={handleLanguageSwitch}
          className="lang-switcher"
          aria-label={t("switchLanguage")}
        >
          {switchLabel}
        </button>
      </div>
    </header>
  );
}
