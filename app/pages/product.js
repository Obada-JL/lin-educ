import Image from "next/image";

export default function ProductPage() {
  return (
    <>
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
                          class="star_full"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          viewBox="0 0 20 20"
                        >
                          <path
                            class="st0"
                            d="M3.8,19.3l1.7-6.9L0,7.8l7.1-0.6L10,0.7l2.8,6.5L20,7.8l-5.5,4.6l1.7,6.9L10,15.7L3.8,19.3z"
                          />
                        </svg>
                        <svg
                          class="star_full"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          viewBox="0 0 20 20"
                        >
                          <path
                            class="st0"
                            d="M3.8,19.3l1.7-6.9L0,7.8l7.1-0.6L10,0.7l2.8,6.5L20,7.8l-5.5,4.6l1.7,6.9L10,15.7L3.8,19.3z"
                          />
                        </svg>
                        <svg
                          class="star_full"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          viewBox="0 0 20 20"
                        >
                          <path
                            class="st0"
                            d="M3.8,19.3l1.7-6.9L0,7.8l7.1-0.6L10,0.7l2.8,6.5L20,7.8l-5.5,4.6l1.7,6.9L10,15.7L3.8,19.3z"
                          />
                        </svg>
                        <svg
                          class="star_full"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          viewBox="0 0 20 20"
                        >
                          <path
                            class="st0"
                            d="M3.8,19.3l1.7-6.9L0,7.8l7.1-0.6L10,0.7l2.8,6.5L20,7.8l-5.5,4.6l1.7,6.9L10,15.7L3.8,19.3z"
                          />
                        </svg>
                        <svg
                          class="star_half"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          viewBox="0 0 20 20"
                        >
                          <path
                            class="st0"
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
                        class="st0"
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
                        class="st0"
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
                        class="st0"
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
                            class="st0"
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
                            class="st0"
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
                            class="st0"
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
                            class="st0"
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
                            class="st0"
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
                            class="st0"
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
                        <Image src="https://placehold.co/540x655" alt="" />
                      </div>
                      <div className="teacher_content">
                        <div className="teacher_info_container d-flex flex-row">
                          <div className="teacher_pic_sm">
                            <Image src="images/teacher_sm_1.jpg" alt="" />
                          </div>
                          <div className="teacher_info">
                            <div className="teacher_name">Ana Martinez</div>
                            <div className="teacher_title">Arts Teacher</div>
                            <div className="teacher_rating d-flex flex-row align-items-center">
                              <Image src="images/star_full_1.png" alt="" />
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
                        <Image src="https://placehold.co/540x655" alt="" />
                      </div>
                      <div className="teacher_content">
                        <div className="teacher_info_container d-flex flex-row">
                          <div className="teacher_pic_sm">
                            <Image src="images/teacher_sm_2.jpg" alt="" />
                          </div>
                          <div className="teacher_info">
                            <div className="teacher_name">Luca Rossi</div>
                            <div className="teacher_title">Arts Teacher</div>
                            <div className="teacher_rating d-flex flex-row align-items-center">
                              <Image src="images/star_full_1.png" alt="" />
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
                                    class="st0"
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
                                <Image src="images/star_full_1.png" alt="" />
                              </div>
                              <div>
                                <Image src="images/star_full_1.png" alt="" />
                              </div>
                              <div>
                                <Image src="images/star_full_1.png" alt="" />
                              </div>
                              <div>
                                <Image src="images/star_full_1.png" alt="" />
                              </div>
                              <div>
                                <Image src="images/star_empty_1.png" alt="" />
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
                                    class="trans_200"
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
                                    class="st0"
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
                                <Image src="images/star_full_1.png" alt="" />
                              </div>
                              <div>
                                <Image src="images/star_full_1.png" alt="" />
                              </div>
                              <div>
                                <Image src="images/star_full_1.png" alt="" />
                              </div>
                              <div>
                                <Image src="images/star_full_1.png" alt="" />
                              </div>
                              <div>
                                <Image src="images/star_empty_1.png" alt="" />
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
                                    class="trans_200"
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
                    style="background-image:url(https://placehold.co/540x302)"
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
                        class="st0"
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
