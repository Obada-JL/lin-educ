"use client";
import heroIcon1 from "../images/hero_icon_1.png";
import subTitle1 from "../images/subtitle_icon_1.png";
import subTitle2 from "../images/subtitle_icon_2.png";
import starEmpty from "../images/star_empty_1.png";
import starFull from "../images/star_empty_1.png";
import ctaBackground from "../images/cta_background_1.jpg";
import "../styles/main_styles.css";
import "../plugins/OwlCarousel2-2.3.4/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.carousel.css";
import "../plugins/OwlCarousel2-2.3.4/owl.theme.default.css";
import "../plugins/OwlCarousel2-2.3.4/animate.css";
// import "../plugins/OwlCarousel2-2.3.4/owl.carousel.js";
import $ from "jquery";
// import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import { useEffect } from "react";

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

const page = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.$ = window.jQuery = require("jquery");
    }
  }, []);
  // useEffect(() => {
  //   // Ensure jQuery plugins initialize only on the client side
  //   if (typeof window !== "undefined") {
  //     $(".owl-carousel").owlCarousel();
  //   }
  // }, []);
  // const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  //   ssr: false,
  //   loading: () => <p>Loading Carousel...</p>,
  // });

  // const OwlCarouselComponent = () => {
  //   const options = {
  //     loop: true,
  //     margin: 10,
  //     nav: true,
  //     responsive: {
  //       0: { items: 1 },
  //       600: { items: 3 },
  //       1000: { items: 5 },
  //     },
  //   };
  // };

  return (
    <>
      <div className="home pb-5">
        <div className="home_outer grad_light">
          <div className="home_inner">
            <div className="home_container d-flex flex-row align-items-center justify-content-center">
              <div className="home_content_left home_content">
                <h1 className="home_title">
                  Unlock Your Potential With Coursette
                </h1>
                <p className="home_description">
                  Expand your knowledge and skills with our wide range of
                  amazing courses.
                </p>
                <div className="home_button trans_200" id="home_button">
                  <div className="d-flex flex-row align-items-center">
                    <span>Start Learning</span>
                    <div className="arrow_box d-flex flex-row align-items-center justify-content-center">
                      <img
                        className="arrow center"
                        src="images/hero_arrow_down_blue_2.png"
                        alt="Simple down arrow."
                      />
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
                          <img
                            src="https://placehold.co/48x48"
                            alt="User pic."
                          />
                        </div>
                      </div>
                      <div className="home_stats_user">
                        <div>
                          <img
                            src="https://placehold.co/48x48"
                            alt="User pic."
                          />
                        </div>
                      </div>
                      <div className="home_stats_user">
                        <div>
                          <img
                            src="https://placehold.co/48x48"
                            alt="User pic."
                          />
                        </div>
                      </div>
                      <div className="home_stats_button trans_200">
                        <a href="#">
                          <div className="d-flex flex-row align-items-center justify-content-center">
                            <img
                              className="trans_200"
                              src="images/plus.png"
                              alt=""
                            />
                          </div>
                        </a>
                      </div>
                      <div className="home_stats_content">
                        <div>275k+</div>
                        <div>Online Students</div>
                      </div>
                    </div>
                  </div>
                  <div className="home_stats home_stats_2">
                    <div className="d-flex flex-row align-items-center">
                      <div className="home_stats_icon_container d-flex flex-row align-items-center justify-content-center">
                        <img src={heroIcon1} alt="" />
                      </div>
                      <div className="home_stats_content">
                        <div>130+</div>
                        <div>Online Courses</div>
                      </div>
                    </div>
                  </div>
                  <img src="https://placehold.co/633x643" alt="Hero image" />
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
                      <span>Why p/ick us?</span>
                    </div>
                  </div>
                  <div className="section_title">
                    <h2>
                      Why 1000+ clients <span>trust</span> Coursette
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row feature_boxes_container section_content_row">
                {/* <!-- Feature Box (Why us?) --> */}
                <div className="col-12 col-xl-4 col-lg-6">
                  <div className="feature_box d-flex flex-row">
                    <div className="feature_box_icon">
                      <img src="https://placehold.co/56x56" alt="" />
                    </div>
                    <div className="feature_box_content">
                      <div className="feature_box_title">
                        <h3>Quality Content</h3>
                      </div>
                      <p>
                        Access high-quality courses taught by industry experts.
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- Feature Box (Why us?) --> */}
                <div className="col-12 col-xl-4 col-lg-6">
                  <div className="feature_box d-flex flex-row">
                    <div className="feature_box_icon">
                      <img src="https://placehold.co/56x56" alt="" />
                    </div>
                    <div className="feature_box_content">
                      <div className="feature_box_title">
                        <h3>Flexible Learning</h3>
                      </div>
                      <p>
                        Access high-quality courses taught by industry experts.
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- Feature Box (Why us?) --> */}
                <div className="col-12 col-xl-4 col-lg-6">
                  <div className="feature_box d-flex flex-row">
                    <div className="feature_box_icon">
                      <img src="https://placehold.co/56x56" alt="" />
                    </div>
                    <div className="feature_box_content">
                      <div className="feature_box_title">
                        <h3>Interactive Learning</h3>
                      </div>
                      <p>
                        Access high-quality courses taught by industry experts.
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- Feature Box (Why us?) --> */}
                <div className="col-12 col-xl-4 col-lg-6">
                  <div className="feature_box d-flex flex-row">
                    <div className="feature_box_icon">
                      <img src="https://placehold.co/56x56" alt="" />
                    </div>
                    <div className="feature_box_content">
                      <div className="feature_box_title">
                        <h3>Affordable Pricing</h3>
                      </div>
                      <p>
                        Access high-quality courses taught by industry experts.
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- Feature Box (Why us?) --> */}
                <div className="col-12 col-xl-4 col-lg-6">
                  <div className="feature_box d-flex flex-row">
                    <div className="feature_box_icon">
                      <img src="https://placehold.co/56x56" alt="" />
                    </div>
                    <div className="feature_box_content">
                      <div className="feature_box_title">
                        <h3>Certification</h3>
                      </div>
                      <p>
                        Access high-quality courses taught by industry experts.
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- Feature Box (Why us?) --> */}
                <div className="col-12 col-xl-4 col-lg-6">
                  <div className="feature_box d-flex flex-row">
                    <div className="feature_box_icon">
                      <img src="https://placehold.co/56x56" alt="" />
                    </div>
                    <div className="feature_box_content">
                      <div className="feature_box_title">
                        <h3>Community Support</h3>
                      </div>
                      <p>
                        Access high-quality courses taught by industry experts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Popular Courses --> */}
      <div className="popular">
        <div className="container">
          <div className="row">
            <div className="section_title_container">
              <div className="section_subtitle">
                <div className="d-flex flex-row align-items-center">
                  <img src={subTitle1} alt="" />
                  <span>Products</span>
                </div>
              </div>
              <div className="section_title">
                <h2>Explore Products</h2>
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
                  {/* <!-- Course Card --> */}
                  <div className="item course_card_owl_item">
                    <div className="course_card">
                      <div className="course_card_container">
                        <div className="course_card_top">
                          <div className="course_card_category trans_200">
                            <a href="/courses">
                              <span>Design</span>
                            </a>
                          </div>
                          <div className="course_card_pic">
                            <img src="https://placehold.co/540x302" alt="" />
                          </div>
                          <div className="course_card_content">
                            <div className="course_card_meta d-flex flex-row align-items-center">
                              <div className="d-flex flex-row align-items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  x="0px"
                                  y="0px"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    className="st0"
                                    d="M1.95,18.11c-0.53,0-0.99-0.19-1.37-0.58C0.19,17.15,0,16.7,0,16.17V3.83c0-0.55,0.19-1.01,0.58-1.38 c0.38-0.38,0.84-0.56,1.37-0.56h12.33c0.54,0,1.01,0.19,1.38,0.56c0.38,0.38,0.56,0.84,0.56,1.38v5.18L20,5.24v9.53l-3.78-3.78v5.18 c0,0.53-0.19,0.99-0.56,1.37c-0.38,0.38-0.84,0.58-1.38,0.58H1.95z M1.95,16.54h12.33c0.11,0,0.2-0.03,0.27-0.1 c0.07-0.07,0.11-0.16,0.11-0.27V3.83c0-0.11-0.04-0.2-0.11-0.27c-0.07-0.07-0.16-0.1-0.27-0.1H1.95c-0.11,0-0.2,0.03-0.27,0.1 c-0.07,0.07-0.1,0.16-0.1,0.27v12.33c0,0.11,0.03,0.2,0.1,0.27C1.75,16.5,1.84,16.54,1.95,16.54z M1.57,16.54V3.46V16.54z"
                                  />
                                </svg>
                                <span>video course</span>
                              </div>
                              <div className="dot"></div>
                              <span>15 lessons</span>
                            </div>
                            <div className="course_card_title">
                              <h3>Analytics Introduction</h3>
                            </div>
                            <div className="course_card_author">
                              <span>by </span>
                              <a href="#">Coursette</a>
                            </div>
                            <div className="course_card_rating d-flex flex-row align-items-center">
                              <span>4.2</span>
                              <div>
                                <img src={starFull} alt="" />
                              </div>
                              <div>
                                <img src={starFull} alt="" />
                              </div>
                              <div>
                                <img src={starFull} alt="" />
                              </div>
                              <div>
                                <img src={starFull} alt="" />
                              </div>
                              <div>
                                <img src={starEmpty} alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="course_card_bottom trans_200 d-flex flex-row align-items-center">
                          <div className="course_card_price">$37,00</div>
                          <div className="course_card_link ms-auto d-flex flex-row align-items-center">
                            <a href="course.html">
                              <div className="d-flex flex-row align-items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 -960 960 960"
                                >
                                  <path
                                    className="trans_200"
                                    d="M301.08-597.69v-52H796v52H301.08Zm0 143.69v-52H796v52H301.08Zm0 143.69v-52H796v52H301.08ZM192.31-595.38q-10.73 0-19.52-8.9t-8.79-20.3q0-11.06 8.79-19.24 8.79-8.18 20.02-8.18t19.52 8.03q8.29 8.03 8.29 19.89 0 10.9-8.14 19.8t-20.17 8.9Zm0 143.3q-10.73 0-19.52-8.68-8.79-8.67-8.79-19.74 0-11.81 8.79-20t20.02-8.19q11.23 0 19.52 8.04t8.29 20.65q0 10.57-8.14 19.24-8.14 8.68-20.17 8.68Zm0 144.08q-10.73 0-19.52-8.9T164-337.19q0-11.07 8.79-19.25t20.02-8.18q11.23 0 19.52 8.03t8.29 19.9q0 10.89-8.14 19.79-8.14 8.9-20.17 8.9Z"
                                  />
                                </svg>
                                <span className="trans_200">Details</span>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Course Card --> */}
                  <div className="item course_card_owl_item">
                    <div className="course_card">
                      <div className="course_card_container">
                        <div className="course_card_top">
                          <div className="course_card_category trans_200">
                            <a href="/courses">
                              <span>Design</span>
                            </a>
                          </div>
                          <div className="course_card_pic">
                            <img src="https://placehold.co/540x302" alt="" />
                          </div>
                          <div className="course_card_content">
                            <div className="course_card_meta d-flex flex-row align-items-center">
                              <div className="d-flex flex-row align-items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  x="0px"
                                  y="0px"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    className="st0"
                                    d="M1.95,18.11c-0.53,0-0.99-0.19-1.37-0.58C0.19,17.15,0,16.7,0,16.17V3.83c0-0.55,0.19-1.01,0.58-1.38 c0.38-0.38,0.84-0.56,1.37-0.56h12.33c0.54,0,1.01,0.19,1.38,0.56c0.38,0.38,0.56,0.84,0.56,1.38v5.18L20,5.24v9.53l-3.78-3.78v5.18 c0,0.53-0.19,0.99-0.56,1.37c-0.38,0.38-0.84,0.58-1.38,0.58H1.95z M1.95,16.54h12.33c0.11,0,0.2-0.03,0.27-0.1 c0.07-0.07,0.11-0.16,0.11-0.27V3.83c0-0.11-0.04-0.2-0.11-0.27c-0.07-0.07-0.16-0.1-0.27-0.1H1.95c-0.11,0-0.2,0.03-0.27,0.1 c-0.07,0.07-0.1,0.16-0.1,0.27v12.33c0,0.11,0.03,0.2,0.1,0.27C1.75,16.5,1.84,16.54,1.95,16.54z M1.57,16.54V3.46V16.54z"
                                  />
                                </svg>
                                <span>video course</span>
                              </div>
                              <div className="dot"></div>
                              <span>15 lessons</span>
                            </div>
                            <div className="course_card_title">
                              <h3>Python For Data Science</h3>
                            </div>
                            <div className="course_card_author">
                              <span>by </span>
                              <a href="#">Coursette</a>
                            </div>
                            <div className="course_card_rating d-flex flex-row align-items-center">
                              <span>4.2</span>
                              <div>
                                <img src={starFull} alt="" />
                              </div>
                              <div>
                                <img src={starFull} alt="" />
                              </div>
                              <div>
                                <img src={starFull} alt="" />
                              </div>
                              <div>
                                <img src={starFull} alt="" />
                              </div>
                              <div>
                                <img src={starEmpty} alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="course_card_bottom trans_200 d-flex flex-row align-items-center">
                          <div className="course_card_price">$160,00</div>
                          <div className="course_card_link ms-auto d-flex flex-row align-items-center">
                            <a href="course.html">
                              <div className="d-flex flex-row align-items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 -960 960 960"
                                >
                                  <path
                                    className="trans_200"
                                    d="M301.08-597.69v-52H796v52H301.08Zm0 143.69v-52H796v52H301.08Zm0 143.69v-52H796v52H301.08ZM192.31-595.38q-10.73 0-19.52-8.9t-8.79-20.3q0-11.06 8.79-19.24 8.79-8.18 20.02-8.18t19.52 8.03q8.29 8.03 8.29 19.89 0 10.9-8.14 19.8t-20.17 8.9Zm0 143.3q-10.73 0-19.52-8.68-8.79-8.67-8.79-19.74 0-11.81 8.79-20t20.02-8.19q11.23 0 19.52 8.04t8.29 20.65q0 10.57-8.14 19.24-8.14 8.68-20.17 8.68Zm0 144.08q-10.73 0-19.52-8.9T164-337.19q0-11.07 8.79-19.25t20.02-8.18q11.23 0 19.52 8.03t8.29 19.9q0 10.89-8.14 19.79-8.14 8.9-20.17 8.9Z"
                                  />
                                </svg>
                                <span className="trans_200">Details</span>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Course Card --> */}
                  <div className="item course_card_owl_item">
                    <div className="course_card">
                      <div className="course_card_container">
                        <div className="course_card_top">
                          <div className="course_card_category trans_200">
                            <a href="/courses">
                              <span>Design</span>
                            </a>
                          </div>
                          <div className="course_card_pic">
                            <img src="https://placehold.co/540x302" alt="" />
                          </div>
                          <div className="course_card_content">
                            <div className="course_card_meta d-flex flex-row align-items-center">
                              <div className="d-flex flex-row align-items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  x="0px"
                                  y="0px"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    className="st0"
                                    d="M1.95,18.11c-0.53,0-0.99-0.19-1.37-0.58C0.19,17.15,0,16.7,0,16.17V3.83c0-0.55,0.19-1.01,0.58-1.38 c0.38-0.38,0.84-0.56,1.37-0.56h12.33c0.54,0,1.01,0.19,1.38,0.56c0.38,0.38,0.56,0.84,0.56,1.38v5.18L20,5.24v9.53l-3.78-3.78v5.18 c0,0.53-0.19,0.99-0.56,1.37c-0.38,0.38-0.84,0.58-1.38,0.58H1.95z M1.95,16.54h12.33c0.11,0,0.2-0.03,0.27-0.1 c0.07-0.07,0.11-0.16,0.11-0.27V3.83c0-0.11-0.04-0.2-0.11-0.27c-0.07-0.07-0.16-0.1-0.27-0.1H1.95c-0.11,0-0.2,0.03-0.27,0.1 c-0.07,0.07-0.1,0.16-0.1,0.27v12.33c0,0.11,0.03,0.2,0.1,0.27C1.75,16.5,1.84,16.54,1.95,16.54z M1.57,16.54V3.46V16.54z"
                                  />
                                </svg>
                                <span>video course</span>
                              </div>
                              <div className="dot"></div>
                              <span>15 lessons</span>
                            </div>
                            <div className="course_card_title">
                              <h3>Machine Learning Course</h3>
                            </div>
                            <div className="course_card_author">
                              <span>by </span>
                              <a href="#">Coursette</a>
                            </div>
                            <div className="course_card_rating d-flex flex-row align-items-center">
                              <span>4.2</span>
                              <div>
                                <img src={starFull} alt="" />
                              </div>
                              <div>
                                <img src={starFull} alt="" />
                              </div>
                              <div>
                                <img src={starFull} alt="" />
                              </div>
                              <div>
                                <img src={starFull} alt="" />
                              </div>
                              <div>
                                <img src={starEmpty} alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="course_card_bottom trans_200 d-flex flex-row align-items-center">
                          <div className="course_card_price">$64,00</div>
                          <div className="course_card_link ms-auto d-flex flex-row align-items-center">
                            <a href="course.html">
                              <div className="d-flex flex-row align-items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 -960 960 960"
                                >
                                  <path
                                    className="trans_200"
                                    d="M301.08-597.69v-52H796v52H301.08Zm0 143.69v-52H796v52H301.08Zm0 143.69v-52H796v52H301.08ZM192.31-595.38q-10.73 0-19.52-8.9t-8.79-20.3q0-11.06 8.79-19.24 8.79-8.18 20.02-8.18t19.52 8.03q8.29 8.03 8.29 19.89 0 10.9-8.14 19.8t-20.17 8.9Zm0 143.3q-10.73 0-19.52-8.68-8.79-8.67-8.79-19.74 0-11.81 8.79-20t20.02-8.19q11.23 0 19.52 8.04t8.29 20.65q0 10.57-8.14 19.24-8.14 8.68-20.17 8.68Zm0 144.08q-10.73 0-19.52-8.9T164-337.19q0-11.07 8.79-19.25t20.02-8.18q11.23 0 19.52 8.03t8.29 19.9q0 10.89-8.14 19.79-8.14 8.9-20.17 8.9Z"
                                  />
                                </svg>
                                <span className="trans_200">Details</span>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Course Card --> */}
                  <div className="item course_card_owl_item">
                    <div className="course_card">
                      <div className="course_card_container">
                        <div className="course_card_top">
                          <div className="course_card_category trans_200">
                            <a href="/courses">
                              <span>Design</span>
                            </a>
                          </div>
                          <div className="course_card_pic">
                            <img src="https://placehold.co/540x302" alt="" />
                          </div>
                          <div className="course_card_content">
                            <div className="course_card_meta d-flex flex-row align-items-center">
                              <div className="d-flex flex-row align-items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  x="0px"
                                  y="0px"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    className="st0"
                                    d="M1.95,18.11c-0.53,0-0.99-0.19-1.37-0.58C0.19,17.15,0,16.7,0,16.17V3.83c0-0.55,0.19-1.01,0.58-1.38 c0.38-0.38,0.84-0.56,1.37-0.56h12.33c0.54,0,1.01,0.19,1.38,0.56c0.38,0.38,0.56,0.84,0.56,1.38v5.18L20,5.24v9.53l-3.78-3.78v5.18 c0,0.53-0.19,0.99-0.56,1.37c-0.38,0.38-0.84,0.58-1.38,0.58H1.95z M1.95,16.54h12.33c0.11,0,0.2-0.03,0.27-0.1 c0.07-0.07,0.11-0.16,0.11-0.27V3.83c0-0.11-0.04-0.2-0.11-0.27c-0.07-0.07-0.16-0.1-0.27-0.1H1.95c-0.11,0-0.2,0.03-0.27,0.1 c-0.07,0.07-0.1,0.16-0.1,0.27v12.33c0,0.11,0.03,0.2,0.1,0.27C1.75,16.5,1.84,16.54,1.95,16.54z M1.57,16.54V3.46V16.54z"
                                  />
                                </svg>
                                <span>video course</span>
                              </div>
                              <div className="dot"></div>
                              <span>15 lessons</span>
                            </div>
                            <div className="course_card_title">
                              <h3>Analytics Introduction</h3>
                            </div>
                            <div className="course_card_author">
                              <span>by </span>
                              <a href="#">Coursette</a>
                            </div>
                            <div className="course_card_rating d-flex flex-row align-items-center">
                              <span>4.2</span>
                              <div>
                                <img src={starFull} alt="" />
                              </div>
                              <div>
                                <img src={starFull} alt="" />
                              </div>
                              <div>
                                <img src={starFull} alt="" />
                              </div>
                              <div>
                                <img src={starFull} alt="" />
                              </div>
                              <div>
                                <img src={starEmpty} alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="course_card_bottom trans_200 d-flex flex-row align-items-center">
                          <div className="course_card_price">$37,00</div>
                          <div className="course_card_link ms-auto d-flex flex-row align-items-center">
                            <a href="course.html">
                              <div className="d-flex flex-row align-items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 -960 960 960"
                                >
                                  <path
                                    className="trans_200"
                                    d="M301.08-597.69v-52H796v52H301.08Zm0 143.69v-52H796v52H301.08Zm0 143.69v-52H796v52H301.08ZM192.31-595.38q-10.73 0-19.52-8.9t-8.79-20.3q0-11.06 8.79-19.24 8.79-8.18 20.02-8.18t19.52 8.03q8.29 8.03 8.29 19.89 0 10.9-8.14 19.8t-20.17 8.9Zm0 143.3q-10.73 0-19.52-8.68-8.79-8.67-8.79-19.74 0-11.81 8.79-20t20.02-8.19q11.23 0 19.52 8.04t8.29 20.65q0 10.57-8.14 19.24-8.14 8.68-20.17 8.68Zm0 144.08q-10.73 0-19.52-8.9T164-337.19q0-11.07 8.79-19.25t20.02-8.18q11.23 0 19.52 8.03t8.29 19.9q0 10.89-8.14 19.79-8.14 8.9-20.17 8.9Z"
                                  />
                                </svg>
                                <span className="trans_200">Details</span>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Course Card --> */}
                  <div className="item course_card_owl_item">
                    <div className="course_card">
                      <div className="course_card_container">
                        <div className="course_card_top">
                          <div className="course_card_category trans_200">
                            <a href="/courses">
                              <span>Design</span>
                            </a>
                          </div>
                          <div className="course_card_pic">
                            <img src="https://placehold.co/540x302" alt="" />
                          </div>
                          <div className="course_card_content">
                            <div className="course_card_meta d-flex flex-row align-items-center">
                              <div className="d-flex flex-row align-items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  x="0px"
                                  y="0px"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    className="st0"
                                    d="M1.95,18.11c-0.53,0-0.99-0.19-1.37-0.58C0.19,17.15,0,16.7,0,16.17V3.83c0-0.55,0.19-1.01,0.58-1.38 c0.38-0.38,0.84-0.56,1.37-0.56h12.33c0.54,0,1.01,0.19,1.38,0.56c0.38,0.38,0.56,0.84,0.56,1.38v5.18L20,5.24v9.53l-3.78-3.78v5.18 c0,0.53-0.19,0.99-0.56,1.37c-0.38,0.38-0.84,0.58-1.38,0.58H1.95z M1.95,16.54h12.33c0.11,0,0.2-0.03,0.27-0.1 c0.07-0.07,0.11-0.16,0.11-0.27V3.83c0-0.11-0.04-0.2-0.11-0.27c-0.07-0.07-0.16-0.1-0.27-0.1H1.95c-0.11,0-0.2,0.03-0.27,0.1 c-0.07,0.07-0.1,0.16-0.1,0.27v12.33c0,0.11,0.03,0.2,0.1,0.27C1.75,16.5,1.84,16.54,1.95,16.54z M1.57,16.54V3.46V16.54z"
                                  />
                                </svg>
                                <span>video course</span>
                              </div>
                              <div className="dot"></div>
                              <span>15 lessons</span>
                            </div>
                            <div className="course_card_title">
                              <h3>Python For Data Science</h3>
                            </div>
                            <div className="course_card_author">
                              <span>by </span>
                              <a href="#">Coursette</a>
                            </div>
                            <div className="course_card_rating d-flex flex-row align-items-center">
                              <span>4.2</span>
                              <div>
                                <img src={starFull} alt="" />
                              </div>
                              <div>
                                <img src={starFull} alt="" />
                              </div>
                              <div>
                                <img src={starFull} alt="" />
                              </div>
                              <div>
                                <img src={starFull} alt="" />
                              </div>
                              <div>
                                <img src={starEmpty} alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="course_card_bottom trans_200 d-flex flex-row align-items-center">
                          <div className="course_card_price">$160,00</div>
                          <div className="course_card_link ms-auto d-flex flex-row align-items-center">
                            <a href="course.html">
                              <div className="d-flex flex-row align-items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 -960 960 960"
                                >
                                  <path
                                    className="trans_200"
                                    d="M301.08-597.69v-52H796v52H301.08Zm0 143.69v-52H796v52H301.08Zm0 143.69v-52H796v52H301.08ZM192.31-595.38q-10.73 0-19.52-8.9t-8.79-20.3q0-11.06 8.79-19.24 8.79-8.18 20.02-8.18t19.52 8.03q8.29 8.03 8.29 19.89 0 10.9-8.14 19.8t-20.17 8.9Zm0 143.3q-10.73 0-19.52-8.68-8.79-8.67-8.79-19.74 0-11.81 8.79-20t20.02-8.19q11.23 0 19.52 8.04t8.29 20.65q0 10.57-8.14 19.24-8.14 8.68-20.17 8.68Zm0 144.08q-10.73 0-19.52-8.9T164-337.19q0-11.07 8.79-19.25t20.02-8.18q11.23 0 19.52 8.03t8.29 19.9q0 10.89-8.14 19.79-8.14 8.9-20.17 8.9Z"
                                  />
                                </svg>
                                <span className="trans_200">Details</span>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Course Card --> */}
                  <div className="item course_card_owl_item">
                    <div className="owl-carousel owl-theme popular_courses_slider">
                      <div className="course_card">
                        <div className="course_card_container">
                          <div className="course_card_top">
                            <div className="course_card_category trans_200">
                              <a href="/courses">
                                <span>Design</span>
                              </a>
                            </div>
                            <div className="course_card_pic">
                              <img src="https://placehold.co/540x302" alt="" />
                            </div>
                            <div className="course_card_content">
                              <div className="course_card_meta d-flex flex-row align-items-center">
                                <div className="d-flex flex-row align-items-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      className="st0"
                                      d="M1.95,18.11c-0.53,0-0.99-0.19-1.37-0.58C0.19,17.15,0,16.7,0,16.17V3.83c0-0.55,0.19-1.01,0.58-1.38 c0.38-0.38,0.84-0.56,1.37-0.56h12.33c0.54,0,1.01,0.19,1.38,0.56c0.38,0.38,0.56,0.84,0.56,1.38v5.18L20,5.24v9.53l-3.78-3.78v5.18 c0,0.53-0.19,0.99-0.56,1.37c-0.38,0.38-0.84,0.58-1.38,0.58H1.95z M1.95,16.54h12.33c0.11,0,0.2-0.03,0.27-0.1 c0.07-0.07,0.11-0.16,0.11-0.27V3.83c0-0.11-0.04-0.2-0.11-0.27c-0.07-0.07-0.16-0.1-0.27-0.1H1.95c-0.11,0-0.2,0.03-0.27,0.1 c-0.07,0.07-0.1,0.16-0.1,0.27v12.33c0,0.11,0.03,0.2,0.1,0.27C1.75,16.5,1.84,16.54,1.95,16.54z M1.57,16.54V3.46V16.54z"
                                    />
                                  </svg>
                                  <span>video course</span>
                                </div>
                                <div className="dot"></div>
                                <span>15 lessons</span>
                              </div>
                              <div className="course_card_title">
                                <h3>Machine Learning Course</h3>
                              </div>
                              <div className="course_card_author">
                                <span>by </span>
                                <a href="#">Coursette</a>
                              </div>
                              <div className="course_card_rating d-flex flex-row align-items-center">
                                <span>4.2</span>
                                <div>
                                  <img src={starFull} alt="" />
                                </div>
                                <div>
                                  <img src={starFull} alt="" />
                                </div>
                                <div>
                                  <img src={starFull} alt="" />
                                </div>
                                <div>
                                  <img src={starFull} alt="" />
                                </div>
                                <div>
                                  <img src={starEmpty} alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="course_card_bottom trans_200 d-flex flex-row align-items-center">
                            <div className="course_card_price">$64,00</div>
                            <div className="course_card_link ms-auto d-flex flex-row align-items-center">
                              <a href="course.html">
                                <div className="d-flex flex-row align-items-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 -960 960 960"
                                  >
                                    <path
                                      className="trans_200"
                                      d="M301.08-597.69v-52H796v52H301.08Zm0 143.69v-52H796v52H301.08Zm0 143.69v-52H796v52H301.08ZM192.31-595.38q-10.73 0-19.52-8.9t-8.79-20.3q0-11.06 8.79-19.24 8.79-8.18 20.02-8.18t19.52 8.03q8.29 8.03 8.29 19.89 0 10.9-8.14 19.8t-20.17 8.9Zm0 143.3q-10.73 0-19.52-8.68-8.79-8.67-8.79-19.74 0-11.81 8.79-20t20.02-8.19q11.23 0 19.52 8.04t8.29 20.65q0 10.57-8.14 19.24-8.14 8.68-20.17 8.68Zm0 144.08q-10.73 0-19.52-8.9T164-337.19q0-11.07 8.79-19.25t20.02-8.18q11.23 0 19.52 8.03t8.29 19.9q0 10.89-8.14 19.79-8.14 8.9-20.17 8.9Z"
                                    />
                                  </svg>
                                  <span className="trans_200">Details</span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
                {/* <!-- Courses Slider Nav Button (Prev) --> */}
                {/* <div className="slider_nav_btn slider_nav_btn_prev disabled courses_slider_prev d-flex flex-row align-items-center justify-content-center trans_200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    className="trans_200"
                  >
                    <path d="M576-253.85 349.85-480 576-706.15 613.15-669l-189 189 189 189L576-253.85Z" />
                  </svg>
                </div> */}
                {/* <!-- Courses Slider Nav Button (Next) --> */}
                {/* <div className="slider_nav_btn slider_nav_btn_next courses_slider_next d-flex flex-row align-items-center justify-content-center trans_200">
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
          <div className="row">
            <div className="col">
              {/* <!-- All Courses Link --> */}
              <div className="section_button_container d-flex flex-row">
                <div className="button_fill button_arrow courses_button ms-auto trans_200">
                  <a href="/courses">
                    <div className="d-flex flex-row align-items-center">
                      <span>See all courses</span>
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
            <h2>Get started now!</h2>
            <p>
              Start your learning journey today and unlock your full potential
              with us.
            </p>
            <div className="cta1_buttons d-flex flex-row align-items-center justify-content-center">
              {/* <!-- Button Fill --> */}
              <div className="button_fill trans_200">
                <a href="#">
                  <div className="d-flex flex-row align-items-center">
                    <span>Get started</span>
                  </div>
                </a>
              </div>
              {/* <!-- Button Outlline --> */}
              <div className="button_outline trans_200">
                <a href="/courses">
                  <div className="d-flex flex-row align-items-center">
                    <span>View courses</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="events" id="news">
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
                      <path d="M583.92-240q-36.77 0-62.65-25.66-25.88-25.66-25.88-62.42 0-36.77 25.65-62.65 25.66-25.88 62.43-25.88 36.76 0 62.65 25.65Q672-365.3 672-328.53q0 36.76-25.66 62.65Q620.68-240 583.92-240ZM228.31-116q-27.01 0-45.66-19Q164-154 164-180.31v-503.38Q164-710 182.65-729q18.65-19 45.66-19h87.38v-100.61h53.54V-748h223.08v-100.61h52V-748h87.38q27.01 0 45.66 19Q796-710 796-683.69v503.38Q796-154 777.35-135q-18.65 19-45.66 19H228.31Zm0-52h503.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-335.38H216v335.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85ZM216-567.69h528v-116q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H228.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v116Zm0 0V-696v128.31Z" />
                    </svg>
                    <span>Comming soon</span>
                  </div>
                </div>
                <div className="section_title">
                  <h2>Upcoming Events</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row events_row section_content_row">
            <div className="col">
              {/* <!-- Events Item --> */}
              <div className="event d-flex flex-row justify-content-between">
                <div className="event_left d-flex flex-row">
                  <div className="event_date d-flex flex-column align-items-center justify-content-center">
                    <span>22</span>
                    <span>May</span>
                  </div>
                  <div className="event_pic">
                    <div
                      className="background_image"
                      style={{
                        backgroundImage: "url(https://placehold.co/696x313)",
                      }}
                    ></div>
                  </div>
                </div>
                <div className="event_right">
                  <div className="event_title">
                    <h3>Tech Industry Meetup</h3>
                  </div>
                  <div className="event_location">City Lounge & Bar</div>
                  <p>
                    Network with fellow professionals and expand your
                    connections at our Tech Industry Meetup. Enjoy an evening of
                    informal networking, sharing insights, and building
                    relationships with individuals from diverse backgrounds
                    across the tech industry.
                  </p>
                  <a href="#">Read more</a>
                </div>
              </div>
              {/* <!-- Events Item --> */}
              <div className="event d-flex flex-row justify-content-between">
                <div className="event_left d-flex flex-row">
                  <div className="event_date d-flex flex-column align-items-center justify-content-center">
                    <span>22</span>
                    <span>May</span>
                  </div>
                  <div className="event_pic">
                    <div
                      className="background_image"
                      style={{
                        backgroundImage: "url(https://placehold.co/696x313)",
                      }}
                    ></div>
                  </div>
                </div>
                <div className="event_right">
                  <div className="event_title">
                    <h3>Tech Career Expo</h3>
                  </div>
                  <div className="event_location">University Auditorium</div>
                  <p>
                    Network with fellow professionals and expand your
                    connections at our Tech Industry Meetup. Enjoy an evening of
                    informal networking, sharing insights, and building
                    relationships with individuals from diverse backgrounds
                    across the tech industry.
                  </p>
                  <a href="#">Read more</a>
                </div>
              </div>
              {/* <!-- Events Item --> */}
              <div className="event d-flex flex-row justify-content-between">
                <div className="event_left d-flex flex-row">
                  <div className="event_date d-flex flex-column align-items-center justify-content-center">
                    <span>22</span>
                    <span>May</span>
                  </div>
                  <div className="event_pic">
                    <div
                      className="background_image"
                      style={{
                        backgroundImage: "url(https://placehold.co/696x313)",
                      }}
                    ></div>
                  </div>
                </div>
                <div className="event_right">
                  <div className="event_title">
                    <h3>Innovate For Social Impact</h3>
                  </div>
                  <div className="event_location">Community Center</div>
                  <p>
                    Network with fellow professionals and expand your
                    connections at our Tech Industry Meetup. Enjoy an evening of
                    informal networking, sharing insights, and building
                    relationships with individuals from diverse backgrounds
                    across the tech industry.
                  </p>
                  <a href="#">Read more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
