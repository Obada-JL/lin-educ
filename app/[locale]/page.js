"use client";
import heroIcon1 from "../../images/hero_icon_1.png";
import subTitle1 from "../../images/subtitle_icon_1.png";
import subTitle2 from "../../images/subtitle_icon_2.png";
import starEmpty from "../../images/star_empty_1.png";
import starFull from "../../images/star_empty_1.png";
import ctaBackground from "../../images/cta_background_1.jpg";
import mainProductsImage from "../../images/main_products_image.png";
import siraProduct from "../../images/siraProduct.png";
import ammaProduct from "../../images/ammaProduct.png";
import tacwidProduct from "../../images/tacwidProduct.png";
import ramadanProduct from "../../images/ramadanProduct.png";
import icon1 from "../../images/icon1.png";
import icon2 from "../../images/icon2.png";
import icon3 from "../../images/icon3.png";
import icon4 from "../../images/icon4.png";
import icon5 from "../../images/icon5.png";
import icon6 from "../../images/icon6.png";
import "../../styles/main_styles.css";
import "../../plugins/OwlCarousel2-2.3.4/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.carousel.css";
import "../../plugins/OwlCarousel2-2.3.4/owl.theme.default.css";
import "../../plugins/OwlCarousel2-2.3.4/animate.css";
// import "../plugins/OwlCarousel2-2.3.4/owl.carousel.js";
import $ from "jquery";
// import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { getTranslatedContent } from "../../utils/translation";

// Dynamic import for react-owl-carousel
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const options = {
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    // Previous Button
    // <div className="slider_nav_btn slider_nav_btn_prev  courses_slider_prev d-flex flex-row align-items-center justify-content-center trans_200">
    `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        className="trans_200"
      >
        <path d="M576-253.85 349.85-480 576-706.15 613.15-669l-189 189 189 189L576-253.85Z" />
      </svg>
      `,
    // </div>

    // Next Button
    // <div className="slider_nav_btn slider_nav_btn_next courses_slider_next d-flex flex-row align-items-center justify-content-center trans_200">
    `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        className="trans_200"
      >
        <path d="m535.85-480-189-189L384-706.15 610.15-480 384-253.85 346.85-291l189-189Z" />
      </svg>
      `,
    // </div>
  ],
  dots: true,
  responsive: {
    0: { items: 1 },
    600: { items: 2 },
    1000: { items: 3 },
  },
};

function HomePage() {
  const t = useTranslations();
  const locale = useLocale();
  const dir = t.raw("dir") ?? "ltr";
  console.log("Current direction:", dir);
  const [products, setProducts] = useState([]);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Fetch products
        const productsResponse = await fetch('http://localhost:5000/api/getProducts');
        if (!productsResponse.ok) throw new Error('Failed to fetch products');
        const productsData = await productsResponse.json();

        // Fetch news
        const newsResponse = await fetch('http://localhost:5000/api/getNews');
        if (!newsResponse.ok) throw new Error('Failed to fetch news');
        const newsData = await newsResponse.json();

        // Transform products data to match your structure
        const transformedProducts = productsData.map(product => ({
          id: product._id,
          title: product.title[locale] || '',
          name: product.name[locale] || '',
          description: product.description[locale] || '',
          mainImage: product.mainImage,
          sliderImages: product.sliderImages || [],
          features: product.features || []
        }));

        setProducts(transformedProducts);
        setNews(newsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [locale]);
  
  console.log(products)
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.$ = window.jQuery = require("jquery");
    }
  }, []);

  return (
    <>
      <div className="home pb-5">
        <div className="home_outer grad_light">
          <div className="home_inner">
            <div className="home_container d-flex flex-row align-items-center justify-content-center">
              <div
                className={`${
                  dir === "rtl" ? "home_content_right" : "home_content_left"
                } home_content`}
              >
                <h1 className="home_title">{t("hero.title")}</h1>
                <p className="home_description">{t("hero.description")}</p>
                <div
                  className="home_button trans_200"
                  id="home_button"
                  style={{
                    paddingRight: dir === "rtl" ? "31px" : "4px",
                    paddingLeft: dir === "rtl" ? "0px" : undefined,
                  }}
                >
                  <div className="d-flex flex-row align-items-center">
                    <span>{t("hero.startNow")}</span>
                    <div
                      className="arrow_box d-flex flex-row align-items-center justify-content-center"
                      style={{
                        marginRight: dir === "rtl" ? "19px" : "0px",
                        marginLeft: dir === "rtl" ? "0px" : undefined,
                      }}
                    >
                      {/* <img
                        className="arrow center"
                        src="images/hero_arrow_down_blue_2.png"
                        alt="Simple down arrow."
                      /> */}
                      <h3> &darr;</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home_content_right home_content d-flex flex-row align-items-center justify-content-center">
                <div className="home_image">
                  <div className="home_stats home_stats_1">
                    <div className="d-flex flex-row align-items-center">
                      <div className="home_stats_user">
                        <div>
                          <img src={siraProduct.src} alt="sira product" />
                        </div>
                      </div>
                      <div className="home_stats_user">
                        <div>
                          <img src={tacwidProduct.src} alt="tacwid product" />
                        </div>
                      </div>
                      <div className="home_stats_user">
                        <div>
                          <img src={ramadanProduct.src} alt="ramadan product" />
                        </div>
                      </div>
                      <div className="home_stats_user trans_200">
                        <a href="#">
                          <div className="d-flex flex-row align-items-center justify-content-center">
                            <img
                              // className="trans_200"
                              src={ammaProduct.src}
                              alt="amma product"
                            />
                          </div>
                        </a>
                      </div>
                      <div
                        className="home_stats_content"
                        style={{
                          marginRight: dir === "rtl" ? "16px" : "0px",
                          marginLeft: dir === "rtl" ? "0px" : undefined,
                        }}
                      >
                        <div>4</div>
                        <div>{t("hero.stats.products")}</div>
                      </div>
                    </div>
                  </div>
                  <div className="home_stats home_stats_2">
                    <div className="d-flex flex-row align-items-center">
                      <div className="home_stats_icon_container d-flex flex-row align-items-center justify-content-center">
                        <img src={heroIcon1} alt="" />
                      </div>
                      <div
                        className="home_stats_content"
                        style={{
                          marginRight: dir === "rtl" ? "16px" : "0px",
                          marginLeft: dir === "rtl" ? "0px" : undefined,
                        }}
                      >
                        <div>130+</div>
                        <div>{t("stats.onlineCourses")}</div>
                      </div>
                    </div>
                  </div>
                  <img src={mainProductsImage.src} alt="Hero image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Why Us --> */}

      <div className="why_us mt-5">
        <div className="why_us_outer grad_light">
          <div className="why_us_inner">
            <div className="container">
              <div className="row">
                <div className="section_title_container section_title_container_centered">
                  <div className="section_subtitle section_subtitle_white">
                    <div className="d-flex flex-row align-items-center">
                      <img src={subTitle2} alt="" />
                      <span>{t("whyUs.title")}</span>
                    </div>
                  </div>
                  <div className="section_title">
                    <h2>{t("whyUs.subtitle")}</h2>
                  </div>
                </div>
              </div>
              <div className="row feature_boxes_container section_content_row">
                {/* <!-- Feature Box (Why us?) --> */}
                <div className="  col-lg-4">
                  <div className="feature_box d-flex flex-row">
                    <div className="feature_box_icon">
                      <img src={icon1.src} alt="" />
                    </div>
                    <div
                      className="feature_box_content"
                      style={{
                        paddingRight: dir === "rtl" ? "24px" : "0px",
                        paddingLeft: dir === "rtl" ? "0px" : undefined,
                      }}
                    >
                      <div className="feature_box_title">
                        <h3>{t("whyUs.features.quality.title")}</h3>
                      </div>
                      <p>{t("whyUs.features.quality.description")}</p>
                    </div>
                  </div>
                </div>
                {/* <!-- Feature Box (Why us?) --> */}
                <div className=" col-lg-4">
                  <div className="feature_box d-flex flex-row">
                    <div className="feature_box_icon">
                      <img src={icon2.src} alt="" />
                    </div>
                    <div
                      className="feature_box_content"
                      style={{
                        paddingRight: dir === "rtl" ? "24px" : "0px",
                        paddingLeft: dir === "rtl" ? "0px" : undefined,
                      }}
                    >
                      <div className="feature_box_title">
                        <h3>{t("whyUs.features.flexible.title")}</h3>
                      </div>
                      <p>{t("whyUs.features.flexible.description")}</p>
                    </div>
                  </div>
                </div>
                {/* <!-- Feature Box (Why us?) --> */}
                <div className=" col-lg-4">
                  <div className="feature_box d-flex flex-row">
                    <div className="feature_box_icon">
                      <img src={icon3.src} alt="" />
                    </div>
                    <div
                      className="feature_box_content"
                      style={{
                        paddingRight: dir === "rtl" ? "24px" : "0px",
                        paddingLeft: dir === "rtl" ? "0px" : undefined,
                      }}
                    >
                      <div className="feature_box_title">
                        <h3>{t("whyUs.features.interactive.title")}</h3>
                      </div>
                      <p>{t("whyUs.features.interactive.description")}</p>
                    </div>
                  </div>
                </div>
                {/* <!-- Feature Box (Why us?) --> */}
                <div className=" col-lg-4">
                  <div className="feature_box d-flex flex-row">
                    <div className="feature_box_icon">
                      <img src={icon4.src} alt="" />
                    </div>
                    <div
                      className="feature_box_content"
                      style={{
                        paddingRight: dir === "rtl" ? "24px" : "0px",
                        paddingLeft: dir === "rtl" ? "0px" : undefined,
                      }}
                    >
                      <div className="feature_box_title">
                        <h3>{t("whyUs.features.affordable.title")}</h3>
                      </div>
                      <p>{t("whyUs.features.affordable.description")}</p>
                    </div>
                  </div>
                </div>
                {/* <!-- Feature Box (Why us?) --> */}
                <div className=" col-lg-4">
                  <div className="feature_box d-flex flex-row">
                    <div className="feature_box_icon">
                      <img src={icon5.src} alt="" />
                    </div>
                    <div
                      className="feature_box_content"
                      style={{
                        paddingRight: dir === "rtl" ? "24px" : "0px",
                        paddingLeft: dir === "rtl" ? "0px" : undefined,
                      }}
                    >
                      <div className="feature_box_title">
                        <h3>{t("whyUs.features.certification.title")}</h3>
                      </div>
                      <p>{t("whyUs.features.certification.description")}</p>
                    </div>
                  </div>
                </div>
                {/* <!-- Feature Box (Why us?) --> */}
                <div className=" col-lg-4">
                  <div className="feature_box d-flex flex-row">
                    <div className="feature_box_icon">
                      <img src={icon6.src} alt="" />
                    </div>
                    <div
                      className="feature_box_content"
                      style={{
                        paddingRight: dir === "rtl" ? "24px" : "0px",
                        paddingLeft: dir === "rtl" ? "0px" : undefined,
                      }}
                    >
                      <div className="feature_box_title">
                        <h3>{t("whyUs.features.support.title")}</h3>
                      </div>
                      <p>{t("whyUs.features.support.description")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Popular Products --> */}
      <div className="popular">
        <div className="container">
          <div className="row">
            <div className="section_title_container">
              <div className="section_subtitle">
                <div className="d-flex flex-row align-items-center">
                  <img src={subTitle1} alt="" />
                  <span>{t("products.subtitle")}</span>
                </div>
              </div>
              <div className="section_title">
                <h2>{t("products.title")}</h2>
              </div>
            </div>
          </div>
          <div className="row course_cards_container section_content_row">
            <div className="col">
              <div className="popular_courses_slider_container">
                <OwlCarousel
                  className="owl-carousel owl-theme popular_courses_slider"
                  {...options}
                >
                  {products.map((product) => (
                    <div key={product.id} className=" course_card_owl_item">
                    <div className="course_card">
                      <div className="course_card_container">
                        <div className="course_card_top">
                          <div className="course_card_pic">
                              <img 
                                src={`http://localhost:5000/productImages/${product.mainImage}`} 
                                alt={product.title} 
                              />
                          </div>
                          <div className="course_card_content">
                            <div className="course_card_title">
                                <h3>{product.title}</h3>
                              </div>
                              <div className="course_card_text">
                                <p>{product.description}</p>
                            </div>
                          </div>
                        </div>
                        <div className="course_card_bottom trans_200 d-flex flex-row align-items-center">
                          <div className="course_card_link ms-auto d-flex flex-row align-items-center">
                              <Link href={`/products/${product.id}`}>
                              <div className="d-flex flex-row align-items-center">
                                  <span className="trans_200">{t("products.details")}</span>
                              </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </OwlCarousel>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              {/* <!-- All Courses Link --> */}
              <div className="section_button_container d-flex flex-row">
                <div className="button_fill button_arrow courses_button ms-auto trans_200">
                  <a href="/courses">
                    <div className="d-flex flex-row align-items-center">
                      <span>{t("products.viewAll")}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960"
                      >
                        <path d="M648.08-454H212v-52h436.08L443.23-710.85 480-748l268 268-268 268-36.77-37.15L648.08-454Z" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cta1 mt-5">
        <div className="cta1_inner grad_light d-flex flex-column align-items-center justify-content-center">
          <div
            className="background_image"
            style={{ backgroundImage: `url(${ctaBackground.src})` }}
          ></div>
          <div className="cta1_content">
            <h2>{t("cta.title")}</h2>
            <p>{t("cta.description")}</p>
            <div className="cta1_buttons d-flex flex-row align-items-center justify-content-center">
              {/* <!-- Button Fill --> */}
              <div className="button_fill trans_200">
                <a href="#">
                  <div className="d-flex flex-row align-items-center">
                    <span>{t("cta.buttons.start")}</span>
                  </div>
                </a>
              </div>
              {/* <!-- Button Outlline --> */}
              <div className="button_outline trans_200">
                <a href="/courses">
                  <div className="d-flex flex-row align-items-center">
                    <span>{t("cta.buttons.view")}</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="events">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="section_title_container">
                <div className="section_subtitle">
                  <div className="d-flex flex-row align-items-center">
                    <img src={subTitle2} alt="" />
                    <span>{t("news.subtitle")}</span>
                  </div>
                </div>
                <div className="section_title">
                  <h2>{t("news.title")}</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="row events_row section_content_row">
            <div className="col">
              {news.slice(0, 3).map((item) => (
                <div key={item._id} className="event d-flex flex-row justify-content-between">
                <div className="event_left d-flex flex-row">
                  <div className="event_date d-flex flex-column align-items-center justify-content-center">
                      <span>{new Date(item.createdAt).getDate()}</span>
                      <span>{new Date(item.createdAt).toLocaleString(locale, { month: 'short' })}</span>
                  </div>
                  <div className="event_pic">
                      <div className="background_image">
                        <img 
                          src={`http://localhost:5000/newsImages/${item.newsImage}`}
                          alt={item.newsTitle[locale]}
                        />
                </div>
                  </div>
                </div>
                <div className="event_right">
                  <div className="event_title">
                      <h3>{item.newsTitle[locale]}</h3>
                  </div>
                    <p>{item.newsDescription[locale]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
