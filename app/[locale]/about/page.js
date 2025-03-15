"use client";
import checkIcon from "../../../images/check.png";
import lookingGlass from "../../../images/looking_glass.png";
import searchIcon from "../../../images/icon_search.png";
import searchIconSm from "../../../images/search_icon_sm.png";
import ctaBackground from "../../../images/cta_background_1.jpg";
import "../../../styles/about.css";
import "../../../styles/main_styles.css";
import "../../../plugins/OwlCarousel2-2.3.4/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.carousel.css";
import "../../../plugins/OwlCarousel2-2.3.4/owl.theme.default.css";
import "../../../plugins/OwlCarousel2-2.3.4/animate.css";
import dynamic from "next/dynamic";
import { useLocale, useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import background1 from "../../../images/background_1.png";
import Loader from "../components/Loader";
import BlogCarousel from "../components/BlogCarousel";
import Logo from "../../../images/homelogo.png";
import Achievements from "../components/Achievements";

// Error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Carousel error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center p-4">
          <p>Something went wrong with the carousel. Please try again later.</p>
          <button 
            className="btn btn-primary mt-2" 
            onClick={() => this.setState({ hasError: false, error: null })}
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

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
    `<div class="slider_nav_btn slider_nav_btn_prev courses_slider_prev d-flex flex-row align-items-center justify-content-center trans_200">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" class="trans_200">
        <path d="M576-253.85 349.85-480 576-706.15 613.15-669l-189 189 189 189L576-253.85Z" />
      </svg>
    </div>`,

    // Next Button
    `<div class="slider_nav_btn slider_nav_btn_next courses_slider_next d-flex flex-row align-items-center justify-content-center trans_200">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" class="trans_200">
        <path d="m535.85-480-189-189L384-706.15 610.15-480 384-253.85 346.85-291l189-189Z" />
      </svg>
    </div>`,
  ],
  dots: true,
  autoplay: false,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
    0: { items: 1 },
    600: { items: 2 },
    1000: { items: 3 },
  },
  rewind: false,
  lazyLoad: true
};

export default function AboutPage() {
  const t = useTranslations();
  const locale = useLocale();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Improved jQuery loading
    if (typeof window !== "undefined" && !window.jQuery) {
      const jquery = require("jquery");
      // Avoid overwriting existing jQuery instance
      if (!window.jQuery) {
        window.jQuery = jquery;
      }
      if (!window.$) {
        window.$ = jquery;
      }
    }

    // Fetch news data
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://api.lineduc.com/api/getNews");
        if (!response.ok) {
          throw new Error(`Failed to fetch news: ${response.status}`);
        }
        const data = await response.json();
        setNews(data);
        setError(null);
      } catch (error) {
        console.error("Error fetching news:", error);
        setError(error.message || "Failed to load news. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loader type="pulse" size="lg" color="primary" text="Loading about page..." />;
  }

  if (error) {
    return (
      <div className="alert alert-danger text-center p-5 mt-5">
        <h4>Error</h4>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <div className="home">
        <div className="home_outer grad_light">
          <div className="home_inner">
            <div className="home_background">
              <img src={background1.src} alt="" />
            </div>
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="home_content">
                    <h2>{t("about.hero.title")}</h2>
                    <p>{t("about.hero.description")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}

      <div className="about">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="split_section">
                <div className="row">
                  <div className="col-12 col-lg-6 eq-height">
                    <div className="split_section_left">
                      <div className="section_title_container align-left">
                        <div className="section_subtitle">
                          <div className="d-flex flex-row align-items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 -960 960 960"
                              fill="#5f6368"
                            >
                              <path d="M260-319.23q49.69 0 96.69 11.27T450-272.61v-393.24q-42.15-27.46-91.23-41.19-49.08-13.73-98.77-13.73-36 0-67.27 5.65-31.27 5.66-64.27 18.5-4.61 1.54-6.54 4.43-1.92 2.88-1.92 6.34v378.31q0 5.39 3.85 7.89 3.84 2.5 8.46.57 28.46-9.69 60.07-14.92 31.62-5.23 67.62-5.23Zm250 46.62q46.31-24.08 93.31-35.35 47-11.27 96.69-11.27 36 0 67.62 5.23 31.61 5.23 60.07 14.92 4.62 1.93 8.46-.57 3.85-2.5 3.85-7.89v-378.31q0-3.46-1.92-6.15-1.93-2.69-6.54-4.62-33-12.84-64.27-18.5-31.27-5.65-67.27-5.65-49.69 0-98.77 13.73T510-665.85v393.24Zm-30 87.99q-48.38-35.69-104.38-55.15-56-19.46-115.62-19.46-36.61 0-71.92 8.11Q152.77-243 120-227.23q-21.38 9.84-40.69-3.12T60-267.08v-434.3q0-12.93 6.66-24.27Q73.31-737 85.85-742q40.61-19.77 84.65-29.27 44.04-9.5 89.5-9.5 58.38 0 114.08 15.96 55.69 15.97 105.92 47.12 50.23-31.15 105.92-47.12 55.7-15.96 114.08-15.96 45.46 0 89.5 9.5T874.15-742q12.54 5 19.19 16.35 6.66 11.34 6.66 24.27v434.3q0 23.77-20.08 36.35-20.08 12.57-42.23 2.73-32.38-15.39-67.11-23.31-34.73-7.92-70.58-7.92-59.62 0-115.62 19.46-56 19.46-104.38 55.15ZM285-496.69Z" />
                            </svg>
                            <span>{t("about.main.subtitle")}</span>
                          </div>
                        </div>
                        <div className="section_title">
                          <h2>{t("about.main.title")}</h2>
                        </div>
                      </div>
                      <p>{t("about.main.description")}</p>
                      <div className="coursette_list">
                        <ul>
                          <li className="d-flex flex-row align-items-center">
                            <img src={checkIcon} alt="" />
                            <p>{t("about.main.features.content")}</p>
                          </li>
                          <li className="d-flex flex-row align-items-center">
                            <img src={checkIcon} alt="" />
                            <p>{t("about.main.features.paths")}</p>
                          </li>
                          <li className="d-flex flex-row align-items-center">
                            <img src={checkIcon} alt="" />
                            <p>{t("about.main.features.experience")}</p>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Button Fill --> */}
                      <div className="button_fill about_button trans_200">
                        <a href="#">
                          <div className="d-flex flex-row align-items-center">
                            <span>{t("about.main.cta")}</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 eq-height">
                    <div className="split_section_right">
                      <div className="split_section_pic">
                        {/* <img src="https://placehold.co/636x418" alt="" /> */}
                        <img src={Logo.src} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
     <Achievements/>
      {/* Blog Section */}

      <div className="blog">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="section_title_container section_title_container_centered">
                <div className="section_subtitle">
                  <div className="d-flex flex-row align-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 -960 960 960"
                    >
                      <path d="M228.31-164q-27.01 0-45.66-18.65Q164-201.3 164-228.31v-503.38q0-27.01 18.65-45.66Q201.3-796 228.31-796h387.23L796-615.54v387.23q0 27.01-18.65 45.66Q758.7-164 731.69-164H228.31Zm0-52h503.38q5.39 0 8.85-3.46t3.46-8.85V-576H576v-168H228.31q-5.39 0-8.85 3.46t-3.46 8.85v503.38q0 5.39 3.46 8.85t8.85 3.46ZM298-308h364v-52H298v52Zm12-280h170v-52H310v52Zm-12 158h364v-52H298v52Zm-82-314v156-156V-216v-528Z" />
                    </svg>
                    <span>{t("about.blog.subtitle")}</span>
                  </div>
                </div>
                <div className="section_title">
                  <h2>{t("about.blog.title")}</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row section_content_row">
            <div className="col">
              {loading ? (
                <Loader type="pulse" text="Loading news..." />
              ) : error ? (
                <div className="alert alert-danger text-center">
                  {error}
                </div>
              ) : (
                <BlogCarousel news={news} />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* <!-- CTA 1 --> */}

      <div className="cta1 mt-5">
        <div className="cta1_inner grad_light d-flex flex-column align-items-center justify-content-center">
          <div
            className="background_image"
            style={{ backgroundImage: `url(${ctaBackground.src})` }}
          ></div>
          <div className="cta1_content">
            <h2>{t("about.cta.title")}</h2>
            <p>{t("about.cta.description")}</p>
            <div className="cta1_buttons d-flex flex-row align-items-center justify-content-center">
              {/* <!-- Button Fill --> */}
              {/* <div className="button_fill trans_200">
                <a href="#">
                  <div className="d-flex flex-row align-items-center">
                    <span>{t("about.cta.buttons.start")}</span>
                  </div>
                </a>
              </div> */}
              {/* <!-- Button Outline --> */}
              <div className="button_outline trans_200">
                <a href="/courses">
                  <div className="d-flex flex-row align-items-center">
                    <span>{t("about.cta.buttons.courses")}</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
