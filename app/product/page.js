import Image from "next/image";
import "../../styles/course.css";
export default function ProductPage() {
  return (
    <>
      <div className="menu">
        <div className="menu_section menu_cart">
          <a href="#"></a>
          <div className="d-flex flex-row align-items-center">
            <div className="menu_section_icon d-flex flex-column justify-content-center align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                <path d="M286.15-97.69q-29.15 0-49.57-20.43-20.42-20.42-20.42-49.57 0-29.16 20.42-49.58 20.42-20.42 49.57-20.42 29.16 0 49.58 20.42 20.42 20.42 20.42 49.58 0 29.15-20.42 49.57-20.42 20.43-49.58 20.43Zm387.7 0q-29.16 0-49.58-20.43-20.42-20.42-20.42-49.57 0-29.16 20.42-49.58 20.42-20.42 49.58-20.42 29.15 0 49.57 20.42t20.42 49.58q0 29.15-20.42 49.57Q703-97.69 673.85-97.69ZM240.61-730 342-517.69h272.69q3.46 0 6.16-1.73 2.69-1.73 4.61-4.81l107.31-195q2.31-4.23.38-7.5-1.92-3.27-6.54-3.27h-486Zm-28.76-60h555.38q24.54 0 37.11 20.89 12.58 20.88 1.2 42.65L677.38-494.31q-9.84 17.31-26.03 26.96-16.2 9.66-35.5 9.66H324l-46.31 84.61q-3.08 4.62-.19 10 2.88 5.39 8.65 5.39h457.69v60H286.15q-40 0-60.11-34.5-20.12-34.5-1.42-68.89l57.07-102.61L136.16-810H60v-60h113.85l38 80ZM342-517.69h280-280Z" />
              </svg>
            </div>
            <p>Your cart</p>
          </div>
        </div>
        <div className="menu_section menu_favs">
          <a href="#"></a>
          <div className="d-flex flex-row align-items-center">
            <div className="menu_section_icon d-flex flex-column justify-content-center align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                <path d="m480-146.93-44.15-39.69q-99.46-90.23-164.5-155.07-65.04-64.85-103.08-115.43-38.04-50.57-53.15-92.27Q100-591.08 100-634q0-85.15 57.42-142.58Q214.85-834 300-834q52.38 0 99 24.5t81 70.27q34.38-45.77 81-70.27 46.62-24.5 99-24.5 85.15 0 142.58 57.42Q860-719.15 860-634q0 42.92-15.12 84.61-15.11 41.7-53.15 92.27-38.04 50.58-102.89 115.43Q624-276.85 524.15-186.62L480-146.93Zm0-81.07q96-86.38 158-148.08 62-61.69 98-107.19t50-80.81q14-35.3 14-69.92 0-60-40-100t-100-40q-47.38 0-87.58 26.88-40.19 26.89-63.65 74.81h-57.54q-23.85-48.31-63.85-75Q347.38-774 300-774q-59.62 0-99.81 40Q160-694 160-634q0 34.62 14 69.92 14 35.31 50 80.81t98 107q62 61.5 158 148.27Zm0-273Z" />
              </svg>
            </div>
            <p>Your favorites</p>
          </div>
        </div>
        <div className="menu_section menu_search">
          <div className="d-flex flex-row align-items-center">
            <div className="menu_section_icon d-flex flex-column justify-content-center align-items-center">
              <img src="/images/looking_glass.png" alt="" />
            </div>
            <p>Search</p>
          </div>
        </div>
        <div className="menu_section menu_settings">
          <a href="#"></a>
          <div className="d-flex flex-row align-items-center">
            <div className="menu_section_icon d-flex flex-column justify-content-center align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                <path d="m387.69-100-15.23-121.85q-16.07-5.38-32.96-15.07-16.88-9.7-30.19-20.77L196.46-210l-92.3-160 97.61-73.77q-1.38-8.92-1.96-17.92-.58-9-.58-17.93 0-8.53.58-17.34t1.96-19.27L104.16-590l92.3-159.23 112.46 47.31q14.47-11.46 30.89-20.96t32.27-15.27L387.69-860h184.62l15.23 122.23q18 6.54 32.57 15.27 14.58 8.73 29.43 20.58l114-47.31L855.84-590l-99.15 74.92q2.15 9.69 2.35 18.12.19 8.42.19 16.96 0 8.15-.39 16.58-.38 8.42-2.76 19.27L854.46-370l-92.31 160-112.61-48.08q-14.85 11.85-30.31 20.96-15.46 9.12-31.69 14.89L572.31-100H387.69ZM440-160h78.62L533-267.15q30.62-8 55.96-22.73 25.35-14.74 48.89-37.89L737.23-286l39.39-68-86.77-65.38q5-15.54 6.8-30.47 1.81-14.92 1.81-30.15 0-15.62-1.81-30.15-1.8-14.54-6.8-29.7L777.38-606 738-674l-100.54 42.38q-20.08-21.46-48.11-37.92-28.04-16.46-56.73-23.31L520-800h-79.38l-13.24 106.77q-30.61 7.23-56.53 22.15-25.93 14.93-49.47 38.46L222-674l-39.38 68L269-541.62q-5 14.24-7 29.62t-2 32.38q0 15.62 2 30.62 2 15 6.62 29.62l-86 65.38L222-286l99-42q22.77 23.38 48.69 38.31 25.93 14.92 57.31 22.92L440-160Zm40.46-200q49.92 0 84.96-35.04 35.04-35.04 35.04-84.96 0-49.92-35.04-84.96Q530.38-600 480.46-600q-50.54 0-85.27 35.04T360.46-480q0 49.92 34.73 84.96Q429.92-360 480.46-360ZM480-480Z" />
              </svg>
            </div>
            <p>Settings</p>
          </div>
        </div>
        <div className="menu_section menu_nav">
          <p>Navigation</p>
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li>
              <a href="/courses">Courses</a>
            </li>
            <li>
              <a href="blog.html">Blog</a>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>
        </div>
        <div className="menu_section menu_social">
          {/* <!-- Social Links --> */}
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

      {/* <!-- Search Panel (Tablet and smaller) --> */}
      <div className="search_panel">
        <div className="search_panel_form_container">
          <form className="header_search_form" action="#">
            <div>
              <input
                id="header_search_input_sm"
                className="search_input"
                type="text"
                placeholder="What would you like to learn?"
              />
              <button className="header_search_btn" type="button">
                <img src="/images/icon_search.png" alt="" />
              </button>
              <div className="search_suggestions_container trans_200">
                <div>
                  <p>Recently visited</p>
                  <div className="recent_search_items">
                    <div className="recent_search_item d-flex flex-row align-items-center">
                      <a href="course.html"></a>
                      <div className="recent_search_item_pic">
                        <img src="https://placehold.co/40x40" alt="" />
                      </div>
                      <p>Project Management Course</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p>Top searches</p>
                  <div className="top_searches">
                    <div className="top_search d-flex flex-row align-items-center">
                      <img src="images/search_icon_sm.png" alt="" />
                      <a href="course.html">Robotics course</a>
                    </div>
                    <div className="top_search d-flex flex-row align-items-center">
                      <img src="images/search_icon_sm.png" alt="" />
                      <a href="course.html">Generative AI</a>
                    </div>
                    <div className="top_search d-flex flex-row align-items-center">
                      <img src="images/search_icon_sm.png" alt="" />
                      <a href="course.html">Machine Learning</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* <!-- Home --> */}
      <div className="home">
        <div className="home_outer grad_light">
          <div className="home_inner">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-12">
                  <div className="home_container">
                    <div className="breadcrumbs d-flex flex-row align-items-center">
                      <div>
                        <a href="index.html">
                          <svg
                            className="home_icon trans_200"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 -960 960 960"
                          >
                            <path d="M219.69-184v-358.15L144.15-486 124-511.69 480-776l181.85 134.92V-728h75.38v143.54l99.54 72.77L816.62-486l-75.54-56.15V-184H537.23v-209.23H422.77V-184H219.69Zm32-32h139.08v-209.23h178.46V-216h139.85v-349.62L480-735.77 251.69-565.62V-216Zm164-336.77h128.62q0-26.15-18.69-44.85-18.7-18.69-45.62-18.69-26.92 0-45.62 18.63-18.69 18.62-18.69 44.91ZM390.77-216v-209.23h178.46V-216v-209.23H390.77V-216Z" />
                          </svg>
                        </a>
                      </div>
                      <div>
                        <svg
                          className="chevron_right"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 -960 960 960"
                        >
                          <path d="m549.69-480-189-189L384-692.31 596.31-480 384-267.69 360.69-291l189-189Z" />
                        </svg>
                      </div>
                      <div className="breadcrumbs_link">
                        <a href="/courses">Courses</a>
                      </div>
                      <div>
                        <svg
                          className="chevron_right"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 -960 960 960"
                        >
                          <path d="m549.69-480-189-189L384-692.31 596.31-480 384-267.69 360.69-291l189-189Z" />
                        </svg>
                      </div>
                      <div className="breadcrumbs_link">
                        <a href="/courses">Machine Learning</a>
                      </div>
                    </div>
                    <div className="home_title">
                      <h1>Machine Learning Bootcamp</h1>
                    </div>
                    <p className="home_description">
                      Embark on a comprehensive journey into the world of
                      machine learning with our intensive Machine Learning
                      Bootcamp designed for beginners and aspiring data
                      scientists.
                    </p>
                    <div className="home_rating_container d-flex flex-row">
                      <div className="home_rating d-flex flex-row align-items-center">
                        <svg
                          className="star_full"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          viewBox="0 0 20 20"
                        >
                          <path
                            className="st0"
                            d="M3.8,19.3l1.7-6.9L0,7.8l7.1-0.6L10,0.7l2.8,6.5L20,7.8l-5.5,4.6l1.7,6.9L10,15.7L3.8,19.3z"
                          />
                        </svg>
                        <svg
                          className="star_full"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          viewBox="0 0 20 20"
                        >
                          <path
                            className="st0"
                            d="M3.8,19.3l1.7-6.9L0,7.8l7.1-0.6L10,0.7l2.8,6.5L20,7.8l-5.5,4.6l1.7,6.9L10,15.7L3.8,19.3z"
                          />
                        </svg>
                        <svg
                          className="star_full"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          viewBox="0 0 20 20"
                        >
                          <path
                            className="st0"
                            d="M3.8,19.3l1.7-6.9L0,7.8l7.1-0.6L10,0.7l2.8,6.5L20,7.8l-5.5,4.6l1.7,6.9L10,15.7L3.8,19.3z"
                          />
                        </svg>
                        <svg
                          className="star_full"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          viewBox="0 0 20 20"
                        >
                          <path
                            className="st0"
                            d="M3.8,19.3l1.7-6.9L0,7.8l7.1-0.6L10,0.7l2.8,6.5L20,7.8l-5.5,4.6l1.7,6.9L10,15.7L3.8,19.3z"
                          />
                        </svg>
                        <svg
                          className="star_half"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          viewBox="0 0 20 20"
                        >
                          <path
                            className="st0"
                            d="M14.6,17l-1.2-5l3.9-3.3l-5.1-0.5l-2.1-4.8v10.9L14.6,17z M3.9,19.3l1.7-6.9L0.1,7.8l7.2-0.6l2.8-6.5l2.8,6.5 l7.2,0.6l-5.5,4.6l1.7,6.9l-6.2-3.7L3.9,19.3z"
                          />
                        </svg>
                      </div>
                      <div className="home_rating_num">4.5</div>
                      <div className="home_rating_count">(17232 ratings)</div>
                    </div>
                    <div className="home_author d-flex flex-row">
                      <p>Created by </p>
                      <a href="#">Digital Univerity</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Course Main Content --> */}

      <div className="course_main_content">
        <div className="container">
          <div className="row">
            {/* <!-- Main Content --> */}
            <div className="col-xl-8 col-12  order-2 order-xl-1">
              <div className="course_main_container">
                {/* <!-- Main features --> */}
                <div className="feature_box_container d-flex flex-row flex-wrap justify-content-between">
                  <div className="feature_box d-flex flex-column align-items-center justify-content-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 20 20"
                    >
                      <path
                        className="st0"
                        d="M0,19.7v-2.9l1.9-1.9v4.8H0z M4.5,19.7v-7.5l1.7-1.7l0.2,0.2v8.9H4.5z M9.1,19.7v-7l1.9,1.9v5.1H9.1z M13.6,19.7v-6.2l1.9-1.9v8H13.6z M18.1,19.7V9L20,7.2v12.6H18.1z M0,12.5V9.9l6.5-6.5l5.2,5.2L20,0.3v2.6l-8.3,8.3L6.5,6 C6.5,6,0,12.5,0,12.5z"
                      />
                    </svg>
                    <div className="feature_title">Beginner Level</div>
                    <p>No experience required</p>
                  </div>
                  <div className="feature_box d-flex flex-column align-items-center justify-content-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 20 20"
                    >
                      <path
                        className="st0"
                        d="M13.9,14.5l1-1l-4.2-4.2V3.4H9.3v6.5L13.9,14.5z M10,20c-1.4,0-2.7-0.3-3.9-0.8c-1.2-0.5-2.3-1.2-3.2-2.1 c-0.9-0.9-1.6-2-2.1-3.2C0.3,12.7,0,11.4,0,10c0-1.4,0.3-2.7,0.8-3.9S2,3.8,2.9,2.9c0.9-0.9,2-1.6,3.2-2.1C7.3,0.3,8.6,0,10,0 c1.4,0,2.7,0.3,3.9,0.8c1.2,0.5,2.3,1.2,3.2,2.1c0.9,0.9,1.6,2,2.1,3.2C19.7,7.3,20,8.6,20,10c0,1.4-0.3,2.7-0.8,3.9 c-0.5,1.2-1.2,2.3-2.1,3.2c-0.9,0.9-2,1.6-3.2,2.1C12.7,19.7,11.4,20,10,20z M10,18.6c2.4,0,4.4-0.8,6.1-2.5 c1.7-1.7,2.5-3.7,2.5-6.1c0-2.4-0.8-4.4-2.5-6.1c-1.7-1.7-3.7-2.5-6.1-2.5c-2.4,0-4.4,0.8-6.1,2.5C2.3,5.6,1.4,7.6,1.4,10 c0,2.4,0.8,4.4,2.5,6.1S7.6,18.6,10,18.6z"
                      />
                    </svg>
                    <div className="feature_title">30 hr to complete</div>
                    <p>10 hours a week</p>
                  </div>
                  <div className="feature_box d-flex flex-column align-items-center justify-content-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 20 20"
                    >
                      <path
                        className="st0"
                        d="M10,9.5c-1.3,0-2.4-0.4-3.3-1.3c-0.9-0.9-1.3-2-1.3-3.3s0.4-2.4,1.3-3.3c0.9-0.9,2-1.3,3.3-1.3s2.4,0.4,3.3,1.3 c0.9,0.9,1.3,2,1.3,3.3s-0.4,2.4-1.3,3.3C12.4,9.1,11.3,9.5,10,9.5z M0,19.7V17c0-0.5,0.1-0.9,0.4-1.3c0.3-0.4,0.7-0.8,1.1-1.1 c1.3-0.7,2.7-1.3,4.1-1.7c1.4-0.4,2.9-0.6,4.3-0.6c1.5,0,2.9,0.2,4.3,0.6s2.8,1,4.1,1.7c0.5,0.3,0.9,0.6,1.1,1.1 c0.3,0.4,0.4,0.9,0.4,1.3v2.7H0z M1.9,17.8h16.1V17c0-0.2-0.1-0.3-0.2-0.4c-0.1-0.1-0.3-0.3-0.5-0.4c-1.1-0.7-2.3-1.2-3.5-1.5 c-1.3-0.3-2.6-0.5-3.9-0.5c-1.3,0-2.6,0.2-3.9,0.5c-1.3,0.3-2.4,0.8-3.5,1.5c-0.2,0.1-0.4,0.3-0.5,0.4C2,16.7,1.9,16.8,1.9,17 C1.9,17,1.9,17.8,1.9,17.8z M10,7.6c0.7,0,1.4-0.3,1.9-0.8c0.5-0.5,0.8-1.2,0.8-1.9S12.4,3.5,11.9,3c-0.5-0.5-1.2-0.8-1.9-0.8 S8.6,2.5,8.1,3C7.6,3.5,7.3,4.2,7.3,4.9c0,0.7,0.3,1.4,0.8,1.9C8.6,7.3,9.3,7.6,10,7.6z"
                      />
                    </svg>
                    <div className="feature_title">16k students</div>
                    <p>Already completed</p>
                  </div>
                </div>
                {/* <!-- Course section nav --> */}
                <div className="course_nav">
                  <div className="course_section_title">
                    <h3>Details</h3>
                  </div>
                  <div className="details_container d-flex flex-row flex-wrap">
                    <div className="details_item active">Overview</div>
                    <div
                      className="details_item"
                      data-scroll-to=".section_certificate"
                    >
                      Certificate
                    </div>
                    <div
                      className="details_item"
                      data-scroll-to=".section_teachers"
                    >
                      Teachers
                    </div>
                    <div
                      className="details_item"
                      data-scroll-to=".section_similar"
                    >
                      Similar
                    </div>
                  </div>
                </div>
                {/* <!-- Features list --> */}
                <div className="section_feature_check_list">
                  <div className="course_section_title">
                    <h3>What you'll learn</h3>
                  </div>
                  <div className="feature_check_list d-flex flex-row flex-wrap">
                    <div>
                      <div className="feature_check_item d-flex flex-row">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          viewBox="0 0 20 20"
                        >
                          <path
                            className="st0"
                            d="M6.8,17.5L0,10.7l1.8-1.8l5,5L18.2,2.5L20,4.3L6.8,17.5z"
                          />
                        </svg>
                        {/* <!-- <img src="images/check_light.png" alt=""> --> */}
                        <p>
                          Consectetur adipiscing elit sed do eiusmod tempor
                          incididunt ut labore.
                        </p>
                      </div>
                      <div className="feature_check_item d-flex flex-row">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          viewBox="0 0 20 20"
                        >
                          <path
                            className="st0"
                            d="M6.8,17.5L0,10.7l1.8-1.8l5,5L18.2,2.5L20,4.3L6.8,17.5z"
                          />
                        </svg>
                        <p>
                          Quis ipsum suspendisse ultrices gravida. Risus commodo
                          viverra maecenas.
                        </p>
                      </div>
                      <div className="feature_check_item d-flex flex-row">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          viewBox="0 0 20 20"
                        >
                          <path
                            className="st0"
                            d="M6.8,17.5L0,10.7l1.8-1.8l5,5L18.2,2.5L20,4.3L6.8,17.5z"
                          />
                        </svg>
                        <p>
                          Risus commodo viverra maecenas accumsan lacus vel
                          facilisis.
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="feature_check_item d-flex flex-row">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          viewBox="0 0 20 20"
                        >
                          <path
                            className="st0"
                            d="M6.8,17.5L0,10.7l1.8-1.8l5,5L18.2,2.5L20,4.3L6.8,17.5z"
                          />
                        </svg>
                        <p>
                          Consectetur adipiscing elit sed do eiusmod tempor
                          incididunt ut labore.
                        </p>
                      </div>
                      <div className="feature_check_item d-flex flex-row">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          viewBox="0 0 20 20"
                        >
                          <path
                            className="st0"
                            d="M6.8,17.5L0,10.7l1.8-1.8l5,5L18.2,2.5L20,4.3L6.8,17.5z"
                          />
                        </svg>
                        <p>
                          Quis ipsum suspendisse ultrices gravida. Risus commodo
                          viverra maecenas.
                        </p>
                      </div>
                      <div className="feature_check_item d-flex flex-row">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          viewBox="0 0 20 20"
                        >
                          <path
                            className="st0"
                            d="M6.8,17.5L0,10.7l1.8-1.8l5,5L18.2,2.5L20,4.3L6.8,17.5z"
                          />
                        </svg>
                        <p>
                          Risus commodo viverra maecenas accumsan lacus vel
                          facilisis.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Skills --> */}
                <div className="section_skills">
                  <div className="course_section_title">
                    <h3>Skills you'll gain</h3>
                  </div>
                  <div className="course_skills_list d-flex flex-row flex-wrap">
                    <div>Business</div>
                    <div>Cybersecurity</div>
                    <div>Data Science</div>
                    <div>Management</div>
                    <div>Math</div>
                    <div>Machine Learning</div>
                  </div>
                </div>
                {/* <!-- Certificate --> */}
                <div className="section_certificate">
                  <div className="course_section_title">
                    <h3>Certificate</h3>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis.
                  </p>
                </div>
                {/* <!-- Teachers --> */}
                <div className="section_teachers">
                  <div className="course_section_title">
                    <h3>Teachers</h3>
                  </div>
                  <div className="teachers_container">
                    {/* <!-- Teacher --> */}
                    <div className="teacher d-flex flex-row">
                      <div className="teacher_pic">
                        <img src="https://placehold.co/540x655" alt="" />
                      </div>
                      <div className="teacher_content">
                        <div className="teacher_info_container d-flex flex-row">
                          <div className="teacher_pic_sm">
                            <img src="images/teacher_sm_1.jpg" alt="" />
                          </div>
                          <div className="teacher_info">
                            <div className="teacher_name">Ana Martinez</div>
                            <div className="teacher_title">Arts Teacher</div>
                            <div className="teacher_rating d-flex flex-row align-items-center">
                              <img src="images/star_full_1.png" alt="" />
                              <div className="teacher_rating_num">4.9</div>
                              <div className="teacher_rating_count">
                                (238 reviews)
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="teacher_description">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit sed do eius tempor incididunt ut labore et
                            dolore magna aliqua. Quis ipsum suspendisse ultrices
                            gravida. Risus commodo viverra maecenas accumsan
                            lacus vel facilisis.
                          </p>
                        </div>
                        <div className="teacher_social">
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
                    </div>
                    {/* <!-- Teacher --> */}
                    <div className="teacher d-flex flex-row">
                      <div className="teacher_pic">
                        <img src="https://placehold.co/540x655" alt="" />
                      </div>
                      <div className="teacher_content">
                        <div className="teacher_info_container d-flex flex-row">
                          <div className="teacher_pic_sm">
                            <img src="images/teacher_sm_2.jpg" alt="" />
                          </div>
                          <div className="teacher_info">
                            <div className="teacher_name">Luca Rossi</div>
                            <div className="teacher_title">Arts Teacher</div>
                            <div className="teacher_rating d-flex flex-row align-items-center">
                              <img src="images/star_full_1.png" alt="" />
                              <div className="teacher_rating_num">4.9</div>
                              <div className="teacher_rating_count">
                                (238 reviews)
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="teacher_description">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit sed do eius tempor incididunt ut labore et
                            dolore magna aliqua. Quis ipsum suspendisse ultrices
                            gravida. Risus commodo viverra maecenas accumsan
                            lacus vel facilisis.
                          </p>
                        </div>
                        <div className="teacher_social">
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
                    </div>
                  </div>
                </div>
                {/* <!-- Similar Courses --> */}
                <div className="section_similar">
                  <div className="course_section_title">
                    <h3>Similar courses</h3>
                  </div>
                  <div className="courses_container d-flex flex-row justify-content-between flex-wrap">
                    {/* <!-- Course --> */}
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
                    {/* <!-- Course --> */}
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
              </div>
            </div>
            {/* <!-- Sidebar --> */}
            <div className="col-xl-4 col-12 order-1 order-xl-2">
              <div className="sidebar">
                <div className="sidebar_pic">
                  {/* <!-- <img src="images/course_01.jpg" alt=""> --> */}
                  <div
                    className="background_image"
                    style={{
                      backgroundImage: "url(https://placehold.co/696x313)",
                    }}
                  ></div>
                </div>
                <div className="sidebar_content">
                  <div className="course_price_container d-flex flex-row align-items-center">
                    <div className="course_price">$19.99</div>
                    <div className="course_discounted">$44.99</div>
                  </div>
                  <div className="discount_expiration d-flex flex-row align-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 20 20"
                    >
                      <path
                        className="st0"
                        d="M10,19.1c-1.1,0-2.2-0.2-3.2-0.6c-1-0.4-1.8-1-2.6-1.7c-0.7-0.7-1.3-1.6-1.7-2.6c-0.4-1-0.6-2-0.6-3.2 s0.2-2.2,0.6-3.2c0.4-1,1-1.8,1.7-2.6C5,4.5,5.8,3.9,6.8,3.4c1-0.4,2-0.6,3.2-0.6s2.2,0.2,3.2,0.6c1,0.4,1.8,1,2.6,1.7 c0.7,0.7,1.3,1.6,1.7,2.6c0.4,1,0.6,2,0.6,3.2s-0.2,2.2-0.6,3.2c-0.4,1-1,1.8-1.7,2.6c-0.7,0.7-1.6,1.3-2.6,1.7 C12.2,18.9,11.1,19.1,10,19.1z M12.4,14.2l1.2-1.2l-2.8-2.8V6.3H9.1v4.6L12.4,14.2z M4.1,0.9l1.2,1.2L1.2,6.3L0,5L4.1,0.9z M15.9,0.9L20,5l-1.2,1.2l-4.1-4.1L15.9,0.9z M10,17.3c1.8,0,3.3-0.6,4.5-1.9s1.9-2.7,1.9-4.5c0-1.8-0.6-3.3-1.9-4.5 S11.8,4.5,10,4.5S6.7,5.2,5.5,6.4s-1.9,2.7-1.9,4.5s0.6,3.3,1.9,4.5S8.2,17.3,10,17.3z"
                      />
                    </svg>
                    <p>6 days left!</p>
                  </div>
                  <div className="sidebar_list">
                    <div className="sidebar_list_item d-flex flex-row justify-content-between">
                      <div>Level</div>
                      <div>Beginner</div>
                    </div>
                    <div className="sidebar_list_item d-flex flex-row justify-content-between">
                      <div>Lessons</div>
                      <div>24</div>
                    </div>
                    <div className="sidebar_list_item d-flex flex-row justify-content-between">
                      <div>Start Date</div>
                      <div>July 26, 2024</div>
                    </div>
                    <div className="sidebar_list_item d-flex flex-row justify-content-between">
                      <div>Certificate</div>
                      <div>Yes</div>
                    </div>
                    <div className="sidebar_list_item d-flex flex-row justify-content-between">
                      <div>Duration</div>
                      <div>30 Hr</div>
                    </div>
                  </div>
                  <div className="sidebar_buttons">
                    <div className="button_fill trans_200">
                      <a href="#">
                        <div className="d-flex flex-row align-items-center">
                          <span>Add to cart</span>
                        </div>
                      </a>
                    </div>
                    <div className="button_outline trans_200">
                      <a href="#">
                        <div className="d-flex flex-row align-items-center">
                          <span>Buy now</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
