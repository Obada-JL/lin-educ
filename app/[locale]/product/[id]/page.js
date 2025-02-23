"use client";
import { useTranslations, useLocale } from "next-intl";
import { useState, useEffect } from "react";
import { Link } from "../../../../navigation";
import "../../../../styles/course.css";
import { use } from 'react';
// Import Swiper components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from "swiper/modules";

export default function ProductPage({ params }) {
  const t = useTranslations();
  const locale = useLocale();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  
  // Properly unwrap params using React.use()
  const resolvedParams = use(params);
  const productId = resolvedParams.id;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/getProduct/${productId}`);
        if (!response.ok) throw new Error('Failed to fetch product');
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching product:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]); // Updated dependency to use resolved productId

  if (loading) {
    return <div className="loading">{t("loading")}</div>;
  }

  if (error || !product) {
    return notFound();
  }

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
                        <Link href="/">
                          <svg
                            className="home_icon trans_200"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 -960 960 960"
                          >
                            <path d="M219.69-184v-358.15L144.15-486 124-511.69 480-776l181.85 134.92V-728h75.38v143.54l99.54 72.77L816.62-486l-75.54-56.15V-184H537.23v-209.23H422.77V-184H219.69Zm32-32h139.08v-209.23h178.46V-216h139.85v-349.62L480-735.77 251.69-565.62V-216Zm164-336.77h128.62q0-26.15-18.69-44.85-18.7-18.69-45.62-18.69-26.92 0-45.62 18.63-18.69 18.62-18.69 44.91ZM390.77-216v-209.23h178.46V-216v-209.23H390.77V-216Z" />
                          </svg>
                        </Link>
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
                        <Link href="/products">{t("products.title")}</Link>
                      </div>
                    </div>
                    <div className="home_title">
                      <h1>{product.title[locale]}</h1>
                    </div>
                    <p className="home_description">
                      {product.description[locale]}
                    </p>
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
                <div className="product_images mb-4">
                  <img 
                    src={`http://localhost:5000/productImages/${activeImage === 0 ? product.mainImage : product.sliderImages[activeImage - 1]}`}
                    alt={product.title[locale]}
                    className="main_product_image mb-3"
                    style={{ width: '100%', height: 'auto' }}
                  />
                  <div className="d-flex gap-2">
                    <img 
                      src={`http://localhost:5000/productImages/${product.mainImage}`}
                      alt={product.title[locale]}
                      onClick={() => setActiveImage(0)}
                      className={`thumbnail ${activeImage === 0 ? 'active' : ''}`}
                      style={{ width: '100px', cursor: 'pointer' }}
                    />
                    {product.sliderImages?.map((image, index) => (
                      <img 
                        key={index}
                        src={`http://localhost:5000/productImages/${image}`}
                        alt={`${product.title[locale]} ${index + 1}`}
                        onClick={() => setActiveImage(index + 1)}
                        className={`thumbnail ${activeImage === index + 1 ? 'active' : ''}`}
                        style={{ width: '100px', cursor: 'pointer' }}
                      />
                    ))}
                  </div>
                </div>
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
                
              </div>
            </div>
            {/* <!-- Sidebar --> */}
            <div className="col-xl-4 col-12 order-1 order-xl-2">
              <div className="sidebar">
                <div className="sidebar_pic">
                  <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    className="product-swiper"
                    style={{ borderRadius: '10px', overflow: 'hidden' }}
                  >
                    <SwiperSlide>
                      <img 
                        src={`http://localhost:5000/productImages/${product.mainImage}`}
                        alt={product.title[locale]}
                        style={{ width: '100%', height: '313px', objectFit: 'cover' }}
                      />
                    </SwiperSlide>
                    {product.sliderImages?.map((image, index) => (
                      <SwiperSlide key={index}>
                        <img 
                          src={`http://localhost:5000/productImages/${image}`}
                          alt={`${product.title[locale]} ${index + 1}`}
                          style={{ width: '100%', height: '313px', objectFit: 'cover' }}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
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
