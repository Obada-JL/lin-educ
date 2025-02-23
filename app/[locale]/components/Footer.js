"use client";
import Image from "next/image";
import logoLight from "../../../images/homelogo.png";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const locale = pathname.split("/")[1];

  return (
    <footer className="footer mt-5">
      <div className="footer_inner grad_dark">
        <div className="footer_container d-flex flex-row">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-4 order-2 order-lg-1">
                <div className="footer_content d-flex flex-row flex-lg-column">
                  <div className="footer_logo d-flex flex-row align-items-center">
                    <div className="logo">
                      <Image
                        src={logoLight}
                        alt="Coursette Logo"
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                  <p>{t("description")}</p>
                  <div className="social_links_container d-flex flex-row">
                    <div>
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          viewBox="0 0 50 50"
                        >
                          <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
                        </svg>
                      </a>
                    </div>
                    <div>
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          viewBox="0 0 512 512"
                        >
                          <g>
                            <polygon points="153.2,135.6 322,377 358.6,377 189.8,135.6" />
                            <path d="M256,20.6C126,20.6,20.6,126,20.6,256S126,491.4,256,491.4S491.4,386,491.4,256S386,20.6,256,20.6z M310.7,394.2 l-73.8-107.4l-92.4,107.4h-23.9l105.7-122.8L120.7,117.6h80.6l69.9,101.7l87.5-101.7h23.9L281.7,234.7h0l109.6,159.5H310.7z" />
                          </g>
                        </svg>
                      </a>
                    </div>
                    <div>
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          viewBox="0 0 50 50"
                        >
                          <path d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23s23-10.317,23-23S37.682,2,25,2z M18,35h-4V20h4V35z M16,17 c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C18,16.105,17.105,17,16,17z M37,35h-4v-5v-2.5c0-1.925-1.575-3.5-3.5-3.5 S26,25.575,26,27.5V35h-4V20h4v1.816C27.168,20.694,28.752,20,30.5,20c3.59,0,6.5,2.91,6.5,6.5V35z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 offset-lg-2 order-1 order-lg-2">
                <div className="row">
                  <div className="col-12 col-sm-6 col-md-4">
                    <div className="footer_nav_column">
                      <p>{t("navigation.title")}</p>
                      <ul>
                        <li>
                          <Link href={`/${locale}`}>
                            {t("navigation.home")}
                          </Link>
                        </li>
                        <li>
                          <Link href={`/${locale}/about`}>
                            {t("navigation.about")}
                          </Link>
                        </li>
                        <li>
                          <Link href={`/${locale}/courses`}>
                            {t("navigation.courses")}
                          </Link>
                        </li>
                        <li>
                          <Link href={`/${locale}/products`}>
                            {t("navigation.products")}
                          </Link>
                        </li>
                        <li>
                          <Link href={`/${locale}/contact`}>
                            {t("navigation.contact")}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-md-4">
                    <div className="footer_nav_column">
                      <p>{t("categories.title")}</p>
                      <ul>
                        <li>
                          <a href="#">{t("categories.ramadan")}</a>
                        </li>
                        <li>
                          <a href="#">{t("categories.sirah")}</a>
                        </li>
                        <li>
                          <a href="#">{t("categories.tacwid")}</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-md-4">
                    <div className="footer_nav_column">
                      <p>{t("help.title")}</p>
                      <ul>
                        <li>
                          <Link href={`/${locale}/contact#faq`}>
                            {t("help.faq")}
                          </Link>
                        </li>
                        <li>
                          <Link href={`/${locale}/contact#message`}>
                            {t("help.support")}
                          </Link>
                        </li>
                        <li>
                          <Link href={`/${locale}/contact`}>
                            {t("help.contact")}
                          </Link>
                        </li>
                        <li>
                          <Link href={`/${locale}/#news`}>
                            {t("help.news")}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="footer_bottom_content d-flex flex-row align-items-center justify-content-between">
                  <div className="copyright_text">
                    {t("copyright", { year: currentYear })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
