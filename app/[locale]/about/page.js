"use client";
import checkIcon from "../../../images/check.png";
import lookingGlass from "../../../images/looking_glass.png";
import searchIcon from "../../../images/icon_search.png";
import searchIconSm from "../../../images/search_icon_sm.png";
import ctaBackground from "../../../images/cta_background_1.jpg";
import "../../../styles/about.css";
import "../../../styles/main_styles.css";
import "../../../plugins/OwlCarousel2-2.3.4/owl.carousel.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "../../../plugins/OwlCarousel2-2.3.4/owl.theme.default.css";
import "../../../plugins/OwlCarousel2-2.3.4/animate.css";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import background1 from "../../../images/background_1.png";

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
    `<div className="slider_nav_btn slider_nav_btn_prev  courses_slider_prev d-flex flex-row align-items-center justify-content-center trans_200">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        className="trans_200"
      >
        <path d="M576-253.85 349.85-480 576-706.15 613.15-669l-189 189 189 189L576-253.85Z" />
      </svg>
    </div>`,

    // Next Button
    `<div className="slider_nav_btn slider_nav_btn_next courses_slider_next d-flex flex-row align-items-center justify-content-center trans_200">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        className="trans_200"
      >
        <path d="m535.85-480-189-189L384-706.15 610.15-480 384-253.85 346.85-291l189-189Z" />
      </svg>
    </div>`,
  ],
  dots: true,
  responsive: {
    0: { items: 1 },
    600: { items: 2 },
    1000: { items: 3 },
  },
};
export default function AboutPage() {
  const t = useTranslations();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.$ = window.jQuery = require("jquery");
    }
  }, []);
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
                        <img src="https://placehold.co/636x418" alt="" />
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
      <div className="stats">
        <div className="stats_inner grad_light">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="section_title_container section_title_container_centered">
                  <div className="section_title">
                    <h2>{t("about.stats.title")}</h2>
                  </div>
                  <p>{t("about.stats.description")}</p>
                </div>
              </div>
            </div>
            <div className="row stats_items">
              {/* <!-- Stats Item --> */}
              <div className="col-xl-3 col-md-6 col-12">
                <div className="stats_item">
                  <div className="stats_item_icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 -960 960 960"
                    >
                      <path d="M140-140v-51.54l40-40V-140h-40Zm160 0v-211.54l40-40V-140h-40Zm160 0v-251.54l40 41V-140h-40Zm160 0v-210.54l40-40V-140h-40Zm160 0v-371.54l40-40V-140h-40ZM140-375.46v-56.08l260-260 160 160 260-260v56.08l-260 260-160-160-260 260Z" />
                    </svg>
                  </div>
                  <div className="stats_subtitle d-flex flex-row align-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 18 13"
                      width="18"
                      height="13"
                    >
                      <path
                        className="st0"
                        d="M-0.01,13v-1.27c0-0.36,0.09-0.67,0.26-0.91c0.18-0.24,0.43-0.46,0.75-0.64C1.83,9.7,2.7,9.31,3.59,9.01 c0.9-0.3,2.02-0.45,3.37-0.45c1.35,0,2.48,0.15,3.37,0.45c0.9,0.3,1.76,0.69,2.58,1.17c0.32,0.18,0.58,0.4,0.75,0.64 c0.18,0.24,0.27,0.55,0.27,0.91V13C13.94,13-0.01,13-0.01,13z M15.96,13v-1.1c0-0.61-0.09-1.15-0.26-1.64 c-0.17-0.49-0.38-0.88-0.64-1.18c0.33,0.15,0.67,0.31,1.02,0.49c0.35,0.18,0.72,0.38,1.11,0.61c0.22,0.11,0.41,0.33,0.57,0.66 c0.15,0.32,0.23,0.68,0.23,1.06V13C17.99,13,15.96,13,15.96,13z M6.96,5.86c-0.82,0-1.51-0.28-2.07-0.84S4.04,3.78,4.04,2.97 s0.28-1.49,0.85-2.05c0.57-0.56,1.26-0.84,2.07-0.84c0.82,0,1.51,0.28,2.07,0.84C9.6,1.49,9.89,2.17,9.89,2.97S9.6,4.46,9.04,5.02 S7.78,5.86,6.96,5.86z M13.34,2.97c0,0.8-0.28,1.49-0.85,2.05c-0.57,0.56-1.26,0.84-2.07,0.84c0.01,0,0.07,0.01,0.18,0.04 c0.11,0.03,0.18,0.04,0.18,0.05c0.34-0.41,0.62-0.86,0.82-1.35c0.2-0.5,0.31-1.04,0.31-1.62c0-0.59-0.11-1.12-0.32-1.61 C11.38,0.88,11.11,0.42,10.78,0c-0.05,0.03-0.11,0.06-0.18,0.07c-0.07,0.01-0.13,0.02-0.18,0.02c0.82,0,1.51,0.28,2.07,0.84 C13.06,1.49,13.34,2.17,13.34,2.97z M0.89,12.11h12.14v-0.38c0-0.18-0.04-0.33-0.13-0.45c-0.09-0.13-0.26-0.26-0.53-0.4 c-0.71-0.44-1.5-0.79-2.37-1.04C9.13,9.57,8.12,9.45,6.96,9.45c-1.16,0-2.17,0.12-3.04,0.37c-0.87,0.24-1.66,0.6-2.37,1.06 c-0.27,0.14-0.44,0.27-0.53,0.39c-0.09,0.12-0.13,0.28-0.13,0.46C0.89,11.72,0.89,12.11,0.89,12.11z M6.97,4.97 c0.56,0,1.03-0.2,1.43-0.59c0.39-0.39,0.59-0.86,0.59-1.42s-0.2-1.02-0.6-1.41c-0.4-0.39-0.88-0.58-1.43-0.58 c-0.56,0-1.03,0.2-1.43,0.59C5.14,1.96,4.94,2.43,4.94,2.98c0,0.55,0.2,1.02,0.6,1.41C5.93,4.78,6.41,4.97,6.97,4.97z"
                      />
                    </svg>
                    <span>{t("about.stats.items.satisfaction.title")}</span>
                  </div>
                  <div className="stats_title">
                    <p>{t("about.stats.items.satisfaction.title")}</p>
                  </div>
                  <div className="stats_num">
                    {t("about.stats.items.satisfaction.value")}
                  </div>
                  <div className="stats_subtitle_2">
                    <p>{t("about.stats.items.satisfaction.period")}</p>
                  </div>
                  <p className="stats_description">
                    Quis ipsum suspendisse ultrices gravida. Risus commodo
                    viverra maecenas accumsan.
                  </p>
                </div>
              </div>
              {/* <!-- Stats Item --> */}
              <div className="col-xl-3 col-md-6 col-12">
                <div className="stats_item">
                  <div className="stats_item_icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 -960 960 960"
                    >
                      <path d="M140-140v-51.54l40-40V-140h-40Zm160 0v-211.54l40-40V-140h-40Zm160 0v-251.54l40 41V-140h-40Zm160 0v-210.54l40-40V-140h-40Zm160 0v-371.54l40-40V-140h-40ZM140-375.46v-56.08l260-260 160 160 260-260v56.08l-260 260-160-160-260 260Z" />
                    </svg>
                  </div>
                  <div className="stats_subtitle d-flex flex-row align-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 18 18"
                      width="18"
                      height="18"
                    >
                      <path
                        className="st0"
                        d="M10.81,6.59V5.56c0.46-0.19,0.96-0.33,1.5-0.41c0.54-0.09,1.08-0.13,1.63-0.13c0.29,0,0.58,0.01,0.87,0.03 c0.29,0.02,0.61,0.06,0.98,0.13v1.06c-0.41-0.07-0.76-0.12-1.04-0.13c-0.28-0.02-0.55-0.02-0.81-0.02c-0.53,0-1.06,0.04-1.6,0.12 C11.81,6.28,11.3,6.41,10.81,6.59z M10.81,11.97V10.9c0.39-0.17,0.86-0.31,1.4-0.41c0.54-0.1,1.12-0.15,1.73-0.15 c0.35,0,0.68,0.01,0.96,0.04c0.29,0.03,0.58,0.07,0.88,0.14v1.06c-0.41-0.07-0.76-0.12-1.04-0.13c-0.28-0.02-0.55-0.02-0.81-0.02 c-0.53,0-1.06,0.05-1.6,0.15C11.81,11.66,11.3,11.8,10.81,11.97z M10.81,9.3V8.23c0.48-0.19,0.99-0.33,1.54-0.42 c0.55-0.09,1.08-0.14,1.6-0.14c0.35,0,0.68,0.01,0.96,0.04c0.29,0.03,0.58,0.07,0.88,0.14v1.06c-0.35-0.07-0.67-0.12-0.96-0.13 c-0.29-0.02-0.59-0.02-0.89-0.02c-0.5,0-1.01,0.05-1.54,0.14C11.87,8.98,11.34,9.12,10.81,9.3z M4.04,13.56 c0.8,0,1.58,0.1,2.35,0.31s1.51,0.5,2.24,0.86V4.36C7.94,3.92,7.21,3.59,6.43,3.37c-0.78-0.22-1.58-0.33-2.4-0.33 c-0.57,0-1.06,0.03-1.49,0.09C2.12,3.18,1.64,3.31,1.12,3.5c-0.14,0.05-0.24,0.11-0.3,0.2C0.76,3.79,0.73,3.89,0.73,3.99v9.55 c0,0.16,0.06,0.29,0.18,0.36c0.12,0.08,0.25,0.09,0.39,0.03c0.34-0.13,0.73-0.22,1.2-0.28C2.96,13.59,3.47,13.56,4.04,13.56z M9.36,14.74c0.73-0.4,1.47-0.7,2.24-0.89c0.76-0.19,1.55-0.29,2.35-0.29c0.57,0,1.08,0.02,1.55,0.07c0.47,0.05,0.86,0.15,1.18,0.31 c0.14,0.06,0.27,0.05,0.39-0.03c0.12-0.08,0.18-0.2,0.18-0.36V3.99c0-0.11-0.03-0.2-0.09-0.28C17.1,3.63,17,3.56,16.86,3.5 c-0.54-0.16-1.01-0.28-1.43-0.36C15,3.07,14.51,3.03,13.94,3.03c-0.82,0-1.62,0.11-2.4,0.33c-0.78,0.22-1.51,0.55-2.19,0.99 C9.36,4.36,9.36,14.74,9.36,14.74z M8.99,15.7c-0.76-0.42-1.55-0.76-2.38-1.02S4.93,14.3,4.04,14.3c-0.42,0-0.84,0.01-1.26,0.04 c-0.42,0.03-0.84,0.09-1.24,0.19c-0.38,0.12-0.73,0.06-1.05-0.18C0.16,14.11,0,13.78,0,13.36V4.02c0-0.27,0.07-0.52,0.22-0.75 s0.35-0.38,0.59-0.47c0.52-0.18,1.05-0.3,1.59-0.38C2.94,2.34,3.49,2.3,4.04,2.3c0.88,0,1.74,0.12,2.58,0.35 c0.84,0.24,1.63,0.58,2.37,1.03c0.76-0.43,1.55-0.77,2.38-1.01c0.83-0.24,1.69-0.37,2.57-0.37c0.55,0,1.09,0.04,1.63,0.11 c0.54,0.08,1.07,0.2,1.59,0.38c0.25,0.09,0.45,0.25,0.6,0.47S18,3.74,18,4.02v9.35c0,0.41-0.13,0.73-0.38,0.98 c-0.25,0.25-0.53,0.33-0.82,0.24c-0.47-0.13-0.94-0.22-1.42-0.24c-0.47-0.03-0.95-0.04-1.44-0.04c-0.89,0-1.75,0.13-2.57,0.39 C10.54,14.94,9.75,15.28,8.99,15.7z"
                      />
                    </svg>
                    <span>{t("about.stats.items.completion.title")}</span>
                  </div>
                  <div className="stats_title">
                    <p>{t("about.stats.items.completion.title")}</p>
                  </div>
                  <div className="stats_num">
                    {t("about.stats.items.completion.value")}
                  </div>
                  <div className="stats_subtitle_2">
                    <p>{t("about.stats.items.completion.period")}</p>
                  </div>
                  <p className="stats_description">
                    Quis ipsum suspendisse ultrices gravida. Risus commodo
                    viverra maecenas accumsan.
                  </p>
                </div>
              </div>
              {/* <!-- Stats Item --> */}
              <div className="col-xl-3 col-md-6 col-12">
                <div className="stats_item">
                  <div className="stats_item_icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 -960 960 960"
                    >
                      <path d="M140-140v-51.54l40-40V-140h-40Zm160 0v-211.54l40-40V-140h-40Zm160 0v-251.54l40 41V-140h-40Zm160 0v-210.54l40-40V-140h-40Zm160 0v-371.54l40-40V-140h-40ZM140-375.46v-56.08l260-260 160 160 260-260v56.08l-260 260-160-160-260 260Z" />
                    </svg>
                  </div>
                  <div className="stats_subtitle d-flex flex-row align-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 14 18"
                      width="14"
                      height="18"
                    >
                      <path
                        className="st0"
                        d="M4.86,9.88l0.76-2.5L3.63,5.96h2.46l0.77-2.53l0.77,2.53h2.46L8.1,7.38l0.76,2.5L6.85,8.34 C6.85,8.34,4.86,9.88,4.86,9.88z M2.39,18v-5.91c-0.72-0.54-1.3-1.3-1.74-2.28C0.22,8.83,0,7.85,0,6.85C0,4.95,0.67,3.34,2,2 c1.33-1.33,2.95-2,4.85-2s3.52,0.67,4.85,2s2,2.95,2,4.85c0,1.01-0.2,2-0.6,2.97c-0.4,0.97-1.01,1.73-1.81,2.29V18l-4.43-0.71 C6.85,17.29,2.39,18,2.39,18z M6.85,12.9c1.68,0,3.11-0.59,4.28-1.76s1.76-2.6,1.76-4.28s-0.59-3.11-1.76-4.28s-2.6-1.76-4.28-1.76	S3.75,1.39,2.57,2.57s-1.76,2.6-1.76,4.28s0.59,3.11,1.76,4.28S5.17,12.9,6.85,12.9z M3.2,17.3l3.65-0.9l3.63,0.9v-4.72	c-0.53,0.38-1.1,0.66-1.72,0.85c-0.62,0.18-1.25,0.28-1.91,0.28s-1.29-0.09-1.92-0.26c-0.63-0.18-1.21-0.46-1.73-0.86 C3.2,12.59,3.2,17.3,3.2,17.3z"
                      />
                    </svg>
                    <span>{t("about.stats.items.instructors.title")}</span>
                  </div>
                  <div className="stats_title">
                    <p>{t("about.stats.items.instructors.title")}</p>
                  </div>
                  <div className="stats_num">
                    {t("about.stats.items.instructors.value")}
                  </div>
                  <div className="stats_subtitle_2">
                    <p>{t("about.stats.items.instructors.period")}</p>
                  </div>
                  <p className="stats_description">
                    Quis ipsum suspendisse ultrices gravida. Risus commodo
                    viverra maecenas accumsan.
                  </p>
                </div>
              </div>
              {/* <!-- Stats Item --> */}
              <div className="col-xl-3 col-md-6 col-12">
                <div className="stats_item">
                  <div className="stats_item_icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 -960 960 960"
                    >
                      <path d="M140-140v-51.54l40-40V-140h-40Zm160 0v-211.54l40-40V-140h-40Zm160 0v-251.54l40 41V-140h-40Zm160 0v-210.54l40-40V-140h-40Zm160 0v-371.54l40-40V-140h-40ZM140-375.46v-56.08l260-260 160 160 260-260v56.08l-260 260-160-160-260 260Z" />
                    </svg>
                  </div>
                  <div className="stats_subtitle d-flex flex-row align-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 18 18"
                      width="18"
                      height="18"
                    >
                      <path
                        className="st0"
                        d="M3.24,11.47h7.74v-0.84H3.24V11.47z M3.24,8.02h11.51V7.18H3.24V8.02z M3.24,4.56h11.51V3.73H3.24V4.56z M0,17.52V1.96c0-0.42,0.14-0.78,0.42-1.06s0.63-0.42,1.06-0.42h15.04c0.42,0,0.78,0.14,1.06,0.42C17.86,1.19,18,1.54,18,1.96v11.27 c0,0.42-0.14,0.78-0.42,1.06s-0.63,0.42-1.06,0.42H2.8L0,17.52z M2.46,13.88h14.06c0.16,0,0.31-0.07,0.44-0.2s0.2-0.28,0.2-0.44 V1.96c0-0.16-0.07-0.31-0.2-0.44c-0.13-0.13-0.28-0.2-0.44-0.2H1.48c-0.16,0-0.31,0.07-0.44,0.2C0.9,1.66,0.84,1.8,0.84,1.96v13.56 L2.46,13.88z M0.84,13.88V1.32V13.88z"
                      />
                    </svg>
                    <span>{t("about.stats.items.feedback.title")}</span>
                  </div>
                  <div className="stats_title">
                    <p>{t("about.stats.items.feedback.title")}</p>
                  </div>
                  <div className="stats_num">
                    {t("about.stats.items.feedback.value")}
                  </div>
                  <div className="stats_subtitle_2">
                    <p>{t("about.stats.items.feedback.period")}</p>
                  </div>
                  <p className="stats_description">
                    Quis ipsum suspendisse ultrices gravida. Risus commodo
                    viverra maecenas accumsan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
              <div className="blog_slider_container">
                <OwlCarousel
                  {...options}
                  // className="owl-carousel owl-theme blog_slider"
                >
                  {/* <!-- Blog Item --> */}
                  <div className="blog_slider_item">
                    <div className="blog_item">
                      <div className="blog_pic">
                        <img src="https://placehold.co/540x302" alt="" />
                      </div>
                      <div className="blog_content">
                        <h4>
                          <a href="blog_single.html">
                            New Course Launch: Mastering Data Science
                          </a>
                        </h4>
                        <div className="blog_meta d-flex flex-row align-items-center justify-content-between">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 -960 960 960"
                            >
                              <path d="M367.69-826v-52h224.62v52H367.69ZM454-391.69h52v-224.62h-52v224.62ZM480-116q-66.15 0-123.42-24.78-57.26-24.77-100.15-67.65-42.88-42.89-67.65-100.15Q164-365.85 164-432t24.78-123.42q24.77-57.26 67.65-100.15 42.89-42.88 100.15-67.65Q413.85-748 479.56-748q56.36 0 108.59 19.89 52.23 19.88 95.93 54.88l45.84-44.84 36.15 36.15-44.84 45.84q35 42.7 54.88 95.16Q796-488.46 796-431.86q0 66.01-24.78 123.28-24.77 57.26-67.65 100.15-42.89 42.88-100.15 67.65Q546.15-116 480-116Zm0-52q110 0 187-77t77-187q0-110-77-187t-187-77q-110 0-187 77t-77 187q0 110 77 187t187 77Zm0-264Z" />
                            </svg>
                            <span>6 mins read</span>
                          </div>
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 -960 960 960"
                            >
                              <path d="M228.31-116q-27.01 0-45.66-19Q164-154 164-180.31v-503.38Q164-710 182.65-729q18.65-19 45.66-19h87.38v-100.61h53.54V-748h223.08v-100.61h52V-748h87.38q27.01 0 45.66 19Q796-710 796-683.69v503.38Q796-154 777.35-135q-18.65 19-45.66 19H228.31Zm0-52h503.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-335.38H216v335.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85ZM216-567.69h528v-116q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H228.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v116Zm0 0V-696v128.31Z" />
                            </svg>
                            <span>12.05.24</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Blog Item --> */}
                  <div className="blog_slider_item">
                    <div className="blog_item">
                      <div className="blog_pic">
                        <img src="https://placehold.co/540x302" alt="" />
                      </div>
                      <div className="blog_content">
                        <h4>
                          <a href="blog_single.html">
                            Success Story of Software Developer Julia Martinez
                          </a>
                        </h4>
                        <div className="blog_meta d-flex flex-row align-items-center justify-content-between">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 -960 960 960"
                            >
                              <path d="M367.69-826v-52h224.62v52H367.69ZM454-391.69h52v-224.62h-52v224.62ZM480-116q-66.15 0-123.42-24.78-57.26-24.77-100.15-67.65-42.88-42.89-67.65-100.15Q164-365.85 164-432t24.78-123.42q24.77-57.26 67.65-100.15 42.89-42.88 100.15-67.65Q413.85-748 479.56-748q56.36 0 108.59 19.89 52.23 19.88 95.93 54.88l45.84-44.84 36.15 36.15-44.84 45.84q35 42.7 54.88 95.16Q796-488.46 796-431.86q0 66.01-24.78 123.28-24.77 57.26-67.65 100.15-42.89 42.88-100.15 67.65Q546.15-116 480-116Zm0-52q110 0 187-77t77-187q0-110-77-187t-187-77q-110 0-187 77t-77 187q0 110 77 187t187 77Zm0-264Z" />
                            </svg>
                            <span>6 mins read</span>
                          </div>
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 -960 960 960"
                            >
                              <path d="M228.31-116q-27.01 0-45.66-19Q164-154 164-180.31v-503.38Q164-710 182.65-729q18.65-19 45.66-19h87.38v-100.61h53.54V-748h223.08v-100.61h52V-748h87.38q27.01 0 45.66 19Q796-710 796-683.69v503.38Q796-154 777.35-135q-18.65 19-45.66 19H228.31Zm0-52h503.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-335.38H216v335.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85ZM216-567.69h528v-116q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H228.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v116Zm0 0V-696v128.31Z" />
                            </svg>
                            <span>12.05.24</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Blog Item --> */}
                  <div className="blog_slider_item">
                    <div className="blog_item">
                      <div className="blog_pic">
                        <img src="https://placehold.co/540x302" alt="" />
                      </div>
                      <div className="blog_content">
                        <h4>
                          <a href="blog_single.html">
                            Upcoming Event: Tech Trends 2024 Conference
                          </a>
                        </h4>
                        <div className="blog_meta d-flex flex-row align-items-center justify-content-between">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 -960 960 960"
                            >
                              <path d="M367.69-826v-52h224.62v52H367.69ZM454-391.69h52v-224.62h-52v224.62ZM480-116q-66.15 0-123.42-24.78-57.26-24.77-100.15-67.65-42.88-42.89-67.65-100.15Q164-365.85 164-432t24.78-123.42q24.77-57.26 67.65-100.15 42.89-42.88 100.15-67.65Q413.85-748 479.56-748q56.36 0 108.59 19.89 52.23 19.88 95.93 54.88l45.84-44.84 36.15 36.15-44.84 45.84q35 42.7 54.88 95.16Q796-488.46 796-431.86q0 66.01-24.78 123.28-24.77 57.26-67.65 100.15-42.89 42.88-100.15 67.65Q546.15-116 480-116Zm0-52q110 0 187-77t77-187q0-110-77-187t-187-77q-110 0-187 77t-77 187q0 110 77 187t187 77Zm0-264Z" />
                            </svg>
                            <span>6 mins read</span>
                          </div>
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 -960 960 960"
                            >
                              <path d="M228.31-116q-27.01 0-45.66-19Q164-154 164-180.31v-503.38Q164-710 182.65-729q18.65-19 45.66-19h87.38v-100.61h53.54V-748h223.08v-100.61h52V-748h87.38q27.01 0 45.66 19Q796-710 796-683.69v503.38Q796-154 777.35-135q-18.65 19-45.66 19H228.31Zm0-52h503.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-335.38H216v335.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85ZM216-567.69h528v-116q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H228.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v116Zm0 0V-696v128.31Z" />
                            </svg>
                            <span>12.05.24</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Blog Item --> */}
                  <div className="blog_slider_item">
                    <div className="blog_item">
                      <div className="blog_pic">
                        <img src="https://placehold.co/540x302" alt="" />
                      </div>
                      <div className="blog_content">
                        <h4>
                          <a href="blog_single.html">
                            New Course Launch: Mastering Data Science
                          </a>
                        </h4>
                        <div className="blog_meta d-flex flex-row align-items-center justify-content-between">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 -960 960 960"
                            >
                              <path d="M367.69-826v-52h224.62v52H367.69ZM454-391.69h52v-224.62h-52v224.62ZM480-116q-66.15 0-123.42-24.78-57.26-24.77-100.15-67.65-42.88-42.89-67.65-100.15Q164-365.85 164-432t24.78-123.42q24.77-57.26 67.65-100.15 42.89-42.88 100.15-67.65Q413.85-748 479.56-748q56.36 0 108.59 19.89 52.23 19.88 95.93 54.88l45.84-44.84 36.15 36.15-44.84 45.84q35 42.7 54.88 95.16Q796-488.46 796-431.86q0 66.01-24.78 123.28-24.77 57.26-67.65 100.15-42.89 42.88-100.15 67.65Q546.15-116 480-116Zm0-52q110 0 187-77t77-187q0-110-77-187t-187-77q-110 0-187 77t-77 187q0 110 77 187t187 77Zm0-264Z" />
                            </svg>
                            <span>6 mins read</span>
                          </div>
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 -960 960 960"
                            >
                              <path d="M228.31-116q-27.01 0-45.66-19Q164-154 164-180.31v-503.38Q164-710 182.65-729q18.65-19 45.66-19h87.38v-100.61h53.54V-748h223.08v-100.61h52V-748h87.38q27.01 0 45.66 19Q796-710 796-683.69v503.38Q796-154 777.35-135q-18.65 19-45.66 19H228.31Zm0-52h503.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-335.38H216v335.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85ZM216-567.69h528v-116q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H228.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v116Zm0 0V-696v128.31Z" />
                            </svg>
                            <span>12.05.24</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Blog Item --> */}
                  <div className="blog_slider_item">
                    <div className="blog_item">
                      <div className="blog_pic">
                        <img src="https://placehold.co/540x302" alt="" />
                      </div>
                      <div className="blog_content">
                        <h4>
                          <a href="blog_single.html">
                            Success Story of Software Developer Julia Martinez
                          </a>
                        </h4>
                        <div className="blog_meta d-flex flex-row align-items-center justify-content-between">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 -960 960 960"
                            >
                              <path d="M367.69-826v-52h224.62v52H367.69ZM454-391.69h52v-224.62h-52v224.62ZM480-116q-66.15 0-123.42-24.78-57.26-24.77-100.15-67.65-42.88-42.89-67.65-100.15Q164-365.85 164-432t24.78-123.42q24.77-57.26 67.65-100.15 42.89-42.88 100.15-67.65Q413.85-748 479.56-748q56.36 0 108.59 19.89 52.23 19.88 95.93 54.88l45.84-44.84 36.15 36.15-44.84 45.84q35 42.7 54.88 95.16Q796-488.46 796-431.86q0 66.01-24.78 123.28-24.77 57.26-67.65 100.15-42.89 42.88-100.15 67.65Q546.15-116 480-116Zm0-52q110 0 187-77t77-187q0-110-77-187t-187-77q-110 0-187 77t-77 187q0 110 77 187t187 77Zm0-264Z" />
                            </svg>
                            <span>6 mins read</span>
                          </div>
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 -960 960 960"
                            >
                              <path d="M228.31-116q-27.01 0-45.66-19Q164-154 164-180.31v-503.38Q164-710 182.65-729q18.65-19 45.66-19h87.38v-100.61h53.54V-748h223.08v-100.61h52V-748h87.38q27.01 0 45.66 19Q796-710 796-683.69v503.38Q796-154 777.35-135q-18.65 19-45.66 19H228.31Zm0-52h503.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-335.38H216v335.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85ZM216-567.69h528v-116q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H228.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v116Zm0 0V-696v128.31Z" />
                            </svg>
                            <span>12.05.24</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Blog Item --> */}
                  <div className="blog_slider_item">
                    <div className="blog_item">
                      <div className="blog_pic">
                        <img src="https://placehold.co/540x302" alt="" />
                      </div>
                      <div className="blog_content">
                        <h4>
                          <a href="blog_single.html">
                            Upcoming Event: Tech Trends 2024 Conference
                          </a>
                        </h4>
                        <div className="blog_meta d-flex flex-row align-items-center justify-content-between">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 -960 960 960"
                            >
                              <path d="M367.69-826v-52h224.62v52H367.69ZM454-391.69h52v-224.62h-52v224.62ZM480-116q-66.15 0-123.42-24.78-57.26-24.77-100.15-67.65-42.88-42.89-67.65-100.15Q164-365.85 164-432t24.78-123.42q24.77-57.26 67.65-100.15 42.89-42.88 100.15-67.65Q413.85-748 479.56-748q56.36 0 108.59 19.89 52.23 19.88 95.93 54.88l45.84-44.84 36.15 36.15-44.84 45.84q35 42.7 54.88 95.16Q796-488.46 796-431.86q0 66.01-24.78 123.28-24.77 57.26-67.65 100.15-42.89 42.88-100.15 67.65Q546.15-116 480-116Zm0-52q110 0 187-77t77-187q0-110-77-187t-187-77q-110 0-187 77t-77 187q0 110 77 187t187 77Zm0-264Z" />
                            </svg>
                            <span>6 mins read</span>
                          </div>
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 -960 960 960"
                            >
                              <path d="M228.31-116q-27.01 0-45.66-19Q164-154 164-180.31v-503.38Q164-710 182.65-729q18.65-19 45.66-19h87.38v-100.61h53.54V-748h223.08v-100.61h52V-748h87.38q27.01 0 45.66 19Q796-710 796-683.69v503.38Q796-154 777.35-135q-18.65 19-45.66 19H228.31Zm0-52h503.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-335.38H216v335.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85ZM216-567.69h528v-116q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H228.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v116Zm0 0V-696v128.31Z" />
                            </svg>
                            <span>12.05.24</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
                {/* <!-- Category Slider Nav Button (Prev) --> */}
                {/* <div className="slider_nav_btn slider_nav_btn_prev blog_slider_prev d-flex flex-row align-items-center justify-content-center trans_200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    className="trans_200"
                  >
                    <path d="M576-253.85 349.85-480 576-706.15 613.15-669l-189 189 189 189L576-253.85Z" />
                  </svg>
                </div> */}
                {/* <!-- Category Slider Nav Button (Next) --> */}
                {/* <div className="slider_nav_btn slider_nav_btn_next blog_slider_next d-flex flex-row align-items-center justify-content-center trans_200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    className="trans_200"
                  >
                    <path d="m535.85-480-189-189L384-706.15 610.15-480 384-253.85 346.85-291l189-189Z" />
                  </svg>
                </div> */}
              </div>
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
              <div className="button_fill trans_200">
                <a href="#">
                  <div className="d-flex flex-row align-items-center">
                    <span>{t("about.cta.buttons.start")}</span>
                  </div>
                </a>
              </div>
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
