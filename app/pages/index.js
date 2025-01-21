export default function HomePage() {
  return (
    <>
      <div className="home">
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
                        <img src="images/hero_icon_1.png" alt="" />
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
    </>
  );
}
