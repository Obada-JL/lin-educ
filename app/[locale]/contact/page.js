"use client";
import "../../../styles/contact.css";
import "../../../styles/contact_responsive.css";
import background1 from "../../../images/background_1.png";
import { initializeUI } from "../../../js/contact";
import $ from "jquery";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("contact");

  useEffect(() => {
    if (typeof window !== "undefined") {
      initializeUI();
    }
  }, []);
  const [formData, setFormData] = useState({
    senderName: "",
    senderEmail: "",
    receivedMessage: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post("http://localhost:5000/api/addMessage/", formData);

      // Show success alert
      Swal.fire({
        icon: "success",
        title: "Message Sent!",
        text: "Your message has been sent successfully.",
      });

      setFormData({ senderName: "", senderEmail: "", receivedMessage: "" }); // Clear the form
    } catch (error) {
      console.error("Error sending message:", error);

      // Show error alert
      Swal.fire({
        icon: "error",
        title: "Message Failed!",
        text: "Failed to send your message. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {/* <div className="menu">
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
              <img src="images/looking_glass.png" alt="" />
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
            <li> <a href="/courses">Courses</a> </li>
            <li>
              <a href="blog.html">Blog</a>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>
        </div>
        <div className="menu_section menu_social">
          //  <!-- Social Links --> 
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

    //<!-- Search Panel (Tablet and smaller) --> 
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
                <img src="images/icon_search.png" alt="" />
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
      </div> */}

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
                    <h2>{t("hero.title")}</h2>
                    <p>{t("hero.description")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Company Info --> */}
      <div className="company_info_section">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="info_box_container d-flex flex-lg-row flex-column justify-content-between">
                {/* <!-- Info Box --> */}
                <div className="info_box d-flex flex-column align-items-center justify-content-center">
                  <div className="info_box_icon d-flex flex-column align-items-center justify-content-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 -960 960 960"
                    >
                      <path d="M745.54-491.77q-3.46-107.08-79.81-183.42-76.35-76.35-183.42-79.81v-52q65 1.54 121.71 26.79 56.71 25.26 99.09 67.64 42.38 42.38 67.63 99.09 25.26 56.71 26.8 121.71h-52Zm-144 0q-3.46-48.08-37.31-82.12-33.85-34.03-81.92-37.11v-52q70 3.08 118.88 52.31 48.89 49.24 52.35 118.92h-52ZM742.61-165q-109.07-9-209.69-57.58-100.61-48.58-182.38-130.34-81.38-81.77-129.46-182.2Q173-635.54 164-744.61q-2-21 12.29-36.7Q190.57-797 212-797h104.46q18.15 0 31.23 10.89 13.08 10.88 18.23 28.42L386.85-673q2.38 13.38-1.5 26.15-3.89 12.77-12.66 20.77l-92.38 89.93q22.3 41.84 49.46 78.77 27.15 36.92 59.51 69.06 31.95 31.94 69.03 59.17t80.08 49.54l94.76-92.54q8.39-8.77 19.24-11.7 10.84-2.92 24.23-.92l80.07 17.62q18.15 5 28.73 18.46 10.58 13.46 10.58 32V-213q0 21.43-16.19 35.71-16.2 14.29-37.2 12.29ZM256.92-586.92l75.39-72.31q1.92-1.54 2.5-4.23.58-2.69-.19-5l-17.55-70.39q-.77-3.07-2.69-4.61-1.92-1.54-5-1.54H223q-2.31 0-3.85 1.54-1.53 1.54-1.53 3.85 3.07 38 13.42 76.3 10.34 38.31 25.88 76.39Zm334 331.69q35.87 15.78 75.01 23.97 39.15 8.18 72.68 12.03 2.31 0 3.85-1.54t1.54-3.85v-86.15q0-3.08-1.54-5t-4.61-2.69l-65-14.08q-2.31-.77-4.04-.19-1.73.58-3.66 2.5l-74.23 75Zm-334-331.69Zm334 331.69Z" />
                    </svg>
                  </div>
                  <h3>{t("info.phone.number")}</h3>
                  <p>{t("info.phone.description")}</p>
                </div>
                {/* <!-- Info Box --> */}
                <div className="info_box d-flex flex-column align-items-center justify-content-center">
                  <div className="info_box_icon d-flex flex-column align-items-center justify-content-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20px"
                      viewBox="0 -960 960 960"
                      width="20px"
                      fill="#5f6368"
                    >
                      <path d="M180.31-212q-27.01 0-45.66-18.66Q116-249.32 116-276.35v-407.62q0-27.03 18.65-45.53t45.66-18.5h599.38q27.01 0 45.66 18.66Q844-710.68 844-683.65v407.62q0 27.03-18.65 45.53T779.69-212H180.31ZM480-449.69 168-633.31v357q0 5.39 3.46 8.85t8.85 3.46h599.38q5.39 0 8.85-3.46t3.46-8.85v-357L480-449.69Zm0-67.31 305.85-179h-611.7L480-517ZM168-633.31V-696v419.69q0 5.39 3.46 8.85t8.85 3.46H168v-369.31Z" />
                    </svg>
                  </div>
                  <h3>contact@lineduc.com</h3>
                  <p>
                    Quis ipsum suspendisse ultrices gravida. Risus commodo
                    viverra maecenas accumsan lacus vel facilisis.
                  </p>
                </div>
                {/* <!-- Info Box --> */}
                <div className="info_box d-flex flex-column align-items-center justify-content-center">
                  <div className="info_box_icon d-flex flex-column align-items-center justify-content-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20px"
                      viewBox="0 -960 960 960"
                      width="20px"
                      fill="#5f6368"
                    >
                      <path d="M480.28-485.39q26.64 0 45.33-18.97 18.7-18.97 18.7-45.61t-18.98-45.34Q506.36-614 479.72-614t-45.33 18.97q-18.7 18.98-18.7 45.62 0 26.64 18.98 45.33 18.97 18.69 45.61 18.69ZM480-184.46q114.38-100.08 178.15-195.08 63.77-95 63.77-167.54 0-105.38-68.5-175.34-68.5-69.96-173.42-69.96-104.92 0-173.42 69.96-68.5 69.96-68.5 175.34 0 72.54 63.77 167.54 63.77 95 178.15 195.08Zm0 68.84Q333.03-240.57 259.55-348.21q-73.47-107.64-73.47-198.87 0-122.46 82.07-209.69Q350.23-844 479.5-844q129.27 0 211.85 87.23 82.57 87.23 82.57 209.69 0 91.23-72.96 198.43Q628-241.46 480-115.62Zm0-434.07Z" />
                    </svg>
                  </div>
                  <h3>Amsterdam, NL</h3>
                  <p>
                    Quis ipsum suspendisse ultrices gravida. Risus commodo
                    viverra maecenas accumsan lacus vel facilisis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Contact Form Section --> */}
      <div className="contact_form_section" id="message">
        <div className="container">
          <div className="row eq-height">
            <div className="col-xl-6 col-12">
              <div className="contact_form_pic">
                <img src="https://placehold.co/960x737" alt="" />
              </div>
            </div>
            <div className="col-xl-6 col-12">
              <div className="contact_form_split d-flex flex-column align-items-start justify-content-center">
                <div className="contact_form_title">
                  <h3>{t("form.title")}</h3>
                  <p>{t("form.subtitle")}</p>
                </div>
                <div className="contact_form_container">
                  <form
                    className="contact_form"
                    action="#"
                    onSubmit={handleSubmit}
                  >
                    <div className="d-flex flex-md-row flex-column justify-content-between">
                      <div className="d-flex flex-column">
                        <label htmlFor="contact_input_name">
                          {t("form.name")}
                        </label>
                        <input
                          type="text"
                          className="contact_input"
                          id="contact_input_name"
                          required
                          placeholder="Name"
                          value={formData.senderName}
                          onChange={handleChange}
                          name="senderName" // Must match the state key
                        />
                      </div>
                      <div className="d-flex flex-column">
                        <label htmlFor="contact_input_email">
                          {t("form.email")}
                        </label>
                        <input
                          type="text"
                          className="contact_input"
                          id="contact_input_email"
                          required
                          placeholder="Email"
                          value={formData.senderEmail}
                          onChange={handleChange}
                          name="senderEmail" // Must match the state key
                        />
                      </div>
                    </div>
                    <div className="contact_textarea_container d-flex flex-column">
                      <label htmlFor="contact_textarea">
                        {t("form.message")}
                      </label>
                      <textarea
                        name="receivedMessage" // Must match the state key
                        id="contact_textarea"
                        className="contact_textarea"
                        placeholder="Your message"
                        value={formData.receivedMessage}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    <div className="contact_button_container">
                      <button
                        className="contact_button d-flex flex-row align-items-center justify-content-center trans_200"
                        disabled={loading}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 -960 960 960"
                        >
                          <path d="M164-222v-516l648.46 258L164-222Zm52-77 454-181-454-181v116.69L408.92-480 216-415.69V-299Zm0 0v-362 362Z" />
                        </svg>
                        <span>{loading ? "Sending..." : t("form.send")}</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- FAQ -->
      <div className="faq" id="faq">
        <div className="faq_inner">
          <div className="container">
            <div className="row">
              <div className="col">
                <h3 className="contact_section_title">{t("faq.title")}</h3>
                {/* <!-- Accordions --> */}
      {/* <div className="accordions_col_container d-flex flex-lg-row flex-column justify-content-between flex-wrap">
                  <div className="accordions">
                    <div className="accordion_container">
                      <div className="accordion d-flex flex-row align-items-center">
                        <div className="accordion_arrow">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 -960 960 960"
                          >
                            <path d="M480-346.85 253.85-573 291-610.15l189 189 189-189L706.15-573 480-346.85Z" />
                          </svg>
                        </div>
                        <div>{t("faq.questions.0")}</div>
                      </div>
                      <div className="accordion_panel">
                        <div>
                          <p>{t("faq.answers.0")}</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion_container">
                      <div className="accordion d-flex flex-row align-items-center">
                        <div className="accordion_arrow">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 -960 960 960"
                          >
                            <path d="M480-346.85 253.85-573 291-610.15l189 189 189-189L706.15-573 480-346.85Z" />
                          </svg>
                        </div>
                        <div>{t("faq.questions.1")}</div>
                      </div>
                      <div className="accordion_panel">
                        <div>
                          <p>{t("faq.answers.1")}</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion_container">
                      <div className="accordion d-flex flex-row align-items-center">
                        <div className="accordion_arrow">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 -960 960 960"
                          >
                            <path d="M480-346.85 253.85-573 291-610.15l189 189 189-189L706.15-573 480-346.85Z" />
                          </svg>
                        </div>
                        <div>{t("faq.questions.2")}</div>
                      </div>
                      <div className="accordion_panel">
                        <div>
                          <p>{t("faq.answers.2")}</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion_container">
                      <div className="accordion d-flex flex-row align-items-center">
                        <div className="accordion_arrow">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 -960 960 960"
                          >
                            <path d="M480-346.85 253.85-573 291-610.15l189 189 189-189L706.15-573 480-346.85Z" />
                          </svg>
                        </div>
                        <div>{t("faq.questions.3")}</div>
                      </div>
                      <div className="accordion_panel">
                        <div>
                          <p>{t("faq.answers.3")}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordions">
                    <div className="accordion_container">
                      <div className="accordion d-flex flex-row align-items-center">
                        <div className="accordion_arrow">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 -960 960 960"
                          >
                            <path d="M480-346.85 253.85-573 291-610.15l189 189 189-189L706.15-573 480-346.85Z" />
                          </svg>
                        </div>
                        <div>{t("faq.questions.4")}</div>
                      </div>
                      <div className="accordion_panel">
                        <div>
                          <p>{t("faq.answers.4")}</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion_container">
                      <div className="accordion d-flex flex-row align-items-center">
                        <div className="accordion_arrow">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 -960 960 960"
                          >
                            <path d="M480-346.85 253.85-573 291-610.15l189 189 189-189L706.15-573 480-346.85Z" />
                          </svg>
                        </div>
                        <div>{t("faq.questions.5")}</div>
                      </div>
                      <div className="accordion_panel">
                        <div>
                          <p>{t("faq.answers.5")}</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion_container">
                      <div className="accordion d-flex flex-row align-items-center">
                        <div className="accordion_arrow">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 -960 960 960"
                          >
                            <path d="M480-346.85 253.85-573 291-610.15l189 189 189-189L706.15-573 480-346.85Z" />
                          </svg>
                        </div>
                        <div>{t("faq.questions.6")}</div>
                      </div>
                      <div className="accordion_panel">
                        <div>
                          <p>{t("faq.answers.6")}</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion_container">
                      <div className="accordion d-flex flex-row align-items-center">
                        <div className="accordion_arrow">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 -960 960 960"
                          >
                            <path d="M480-346.85 253.85-573 291-610.15l189 189 189-189L706.15-573 480-346.85Z" />
                          </svg>
                        </div>
                        <div>{t("faq.questions.7")}</div>
                      </div>
                      <div className="accordion_panel">
                        <div>
                          <p>{t("faq.answers.7")}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
