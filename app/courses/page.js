import "../../styles/courses.css";
import background1 from "../../images/background_1.png";
export default function CoursesPage() {
  return (
    <>
      {/* <!-- Home --> */}
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
                    <h2>Explore all courses</h2>
                    <p>
                      Discover our diverse range of courses designed to help you
                      gain new skills, advance your career, and achieve your
                      goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Courses --> */}
      <div className="courses">
        <div className="container">
          <div className="row">
            <div className="col">
              {/* <div className="filters_container">
                <div className="section_title_sm">
                  <h3>Filter by category</h3>
                  <p>8 categories</p>
                </div>
                <div className="filters_list d-flex flex-row flex-wrap">
                  <div className="filter_item checked">All</div>
                  <div className="filter_item">AI</div>
                  <div className="filter_item ">Business</div>
                  <div className="filter_item ">Health</div>
                  <div className="filter_item ">Math</div>
                  <div className="filter_item ">Design</div>
                  <div className="filter_item ">Painting</div>
                  <div className="filter_item ">Science</div>
                  <div className="filter_item ">Machine Learning</div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="row course_cards_container justify-content-center">
            {/* <!-- Course --> */}
            <div className="col-12 col-xl-4 col-md-6">
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
                          <img src="images/star_full_1.png" alt="" />
                        </div>
                        <div>
                          <img src="images/star_full_1.png" alt="" />
                        </div>
                        <div>
                          <img src="images/star_full_1.png" alt="" />
                        </div>
                        <div>
                          <img src="images/star_full_1.png" alt="" />
                        </div>
                        <div>
                          <img src="images/star_empty_1.png" alt="" />
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
            {/* <!-- Course --> */}
            <div className="col-12 col-xl-4 col-md-6">
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
                          <img src="images/star_full_1.png" alt="" />
                        </div>
                        <div>
                          <img src="images/star_full_1.png" alt="" />
                        </div>
                        <div>
                          <img src="images/star_full_1.png" alt="" />
                        </div>
                        <div>
                          <img src="images/star_full_1.png" alt="" />
                        </div>
                        <div>
                          <img src="images/star_empty_1.png" alt="" />
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
            {/* <!-- Course --> */}
            <div className="col-12 col-xl-4 col-md-6">
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
                          <img src="images/star_full_1.png" alt="" />
                        </div>
                        <div>
                          <img src="images/star_full_1.png" alt="" />
                        </div>
                        <div>
                          <img src="images/star_full_1.png" alt="" />
                        </div>
                        <div>
                          <img src="images/star_full_1.png" alt="" />
                        </div>
                        <div>
                          <img src="images/star_empty_1.png" alt="" />
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
            {/* <!-- Course --> */}
            <div className="col-12 col-xl-4 col-md-6">
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
                          <img src="images/star_full_1.png" alt="" />
                        </div>
                        <div>
                          <img src="images/star_full_1.png" alt="" />
                        </div>
                        <div>
                          <img src="images/star_full_1.png" alt="" />
                        </div>
                        <div>
                          <img src="images/star_full_1.png" alt="" />
                        </div>
                        <div>
                          <img src="images/star_empty_1.png" alt="" />
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
            {/* <!-- Course --> */}
            <div className="col-12 col-xl-4 col-md-6">
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
                          <img src="images/star_full_1.png" alt="" />
                        </div>
                        <div>
                          <img src="images/star_full_1.png" alt="" />
                        </div>
                        <div>
                          <img src="images/star_full_1.png" alt="" />
                        </div>
                        <div>
                          <img src="images/star_full_1.png" alt="" />
                        </div>
                        <div>
                          <img src="images/star_empty_1.png" alt="" />
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
          </div>
          <div className="row">
            <div className="col">
              <div className="pagination d-flex flex-row align-items-center justify-content-center">
                <div className="page_nav_item page_nav_left">
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 -960 960 960"
                    >
                      <path d="M576-267.69 363.69-480 576-692.31 599.31-669l-189 189 189 189L576-267.69Z" />
                    </svg>
                  </a>
                </div>
                <div className="page_item active">
                  <a href="#">1</a>
                </div>
                <div className="page_item">
                  <a href="#">2</a>
                </div>
                <div className="page_item">
                  <a href="#">3</a>
                </div>
                <div className="page_nav_item page_nav_right">
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 -960 960 960"
                    >
                      <path d="m549.69-480-189-189L384-692.31 596.31-480 384-267.69 360.69-291l189-189Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
