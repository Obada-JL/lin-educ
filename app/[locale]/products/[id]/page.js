"use client";
import { useTranslations, useLocale } from "next-intl";
import { useState, useEffect } from "react";
import React from "react";
import { Link } from "../../../../navigation";
import "../../../../styles/course.css";
import dynamic from "next/dynamic";

// Import Swiper and its modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Add a helper function to render SVG content
const renderSvgIcon = (iconContent) => {
  if (!iconContent) return null;
  
  try {
    // Check if the icon is an SVG string
    if (typeof iconContent === 'string') {
      // If it starts with <svg, it's an SVG string
      if (iconContent.trim().toLowerCase().startsWith('<svg')) {
        return { __html: iconContent };
      }
      
      // If it starts with http or https, or ends with .svg, it's likely a URL
      if (iconContent.startsWith('http') || iconContent.endsWith('.svg')) {
        return null; // Will be rendered as an image
      }
      
      // If it contains SVG path data (common SVG path commands)
      if (iconContent.includes('M') && 
          (iconContent.includes('L') || iconContent.includes('C') || 
           iconContent.includes('A') || iconContent.includes('Z'))) {
        // Wrap it in an SVG tag
        return { __html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="${iconContent}"/></svg>` };
      }
    }
  } catch (error) {
    console.error("Error parsing SVG content:", error);
  }
  
  // If it's not recognized as SVG content, return null
  return null;
};

// Custom styles for the product slider
const productSliderStyles = `
  .product-swiper {
    width: 100%;
    height: 400px;
    border-radius: 10px;
    overflow: hidden;
  }
  
  .product-swiper .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .product-swiper img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
  .product-swiper .swiper-button-next,
  .product-swiper .swiper-button-prev {
    color: #fff;
    background: rgba(0, 0, 0, 0.3);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .product-swiper .swiper-button-next:after,
  .product-swiper .swiper-button-prev:after {
    font-size: 18px;
  }
  
  .product-swiper .swiper-pagination-bullet {
    background: #fff;
    opacity: 0.7;
  }
  
  .product-swiper .swiper-pagination-bullet-active {
    background: #fff;
    opacity: 1;
  }
  
  /* Feature box styles */
  .feature_box_container {
    margin-bottom: 30px;
    width: 100%;
  }
  
  .feature_box {
    background-color: #f8f9fa;
    border-radius: 10px;
    padding: 20px;
    margin: 0 10px 20px;
    width: calc(33.333% - 20px);
    min-width: 250px;
    transition: all 0.3s ease;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  }
  
  .feature_box:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
  
  .feature_title {
    font-weight: 600;
    font-size: 18px;
    margin: 10px 0;
    color: #333;
  }
  
  .feature_box p {
    color: #666;
    margin: 0;
  }
  
  /* Feature icon styles */
  .feature-icon-container {
    width: 48px;
    height: 48px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .feature-icon-container svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    color: #3498db;
  }
  
  .feature-icon-container img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
  .feature-icon-fallback {
    width: 48px;
    height: 48px;
    background-color: #f0f0f0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
    font-size: 24px;
  }
  
  /* Learning section styles */
  .feature_check_item {
    margin-bottom: 12px;
    background-color: #f8f9fa;
    padding: 10px 15px;
    border-radius: 8px;
    transition: all 0.3s ease;
  }
  
  .feature_check_item:hover {
    background-color: #e9ecef;
    transform: translateX(5px);
  }
  
  .feature_check_item svg {
    min-width: 20px;
    height: 20px;
    fill: #28a745;
  }
  
  .feature_check_item p {
    margin: 0;
    font-weight: 500;
  }
`;

export default function ProductPage({ params }) {
  const t = useTranslations();
  const locale = useLocale();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Properly unwrap params using React.use()
  const resolvedParams = React.use(params);
  const productId = resolvedParams.id;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://api.lineduc.com/api/getProduct/${productId}`
        );
        if (!response.ok) throw new Error("Failed to fetch product");
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
    try {
      return <div className="loading">{t("loading")}</div>;
    } catch {
      return <div className="loading">Loading...</div>;
    }
  }

  if (error || !product) {
    return notFound();
  }

  // Prepare images for the carousel
  const productImages = [];
  if (product.mainImage) {
    productImages.push({
      src: `https://api.lineduc.com/productsImages/${product.mainImage}`,
      alt: product.title[locale],
      objectFit: "contain"
    });
  }
  if (product.sliderImages && product.sliderImages.length > 0) {
    product.sliderImages.forEach((image, index) => {
      productImages.push({
        src: `https://api.lineduc.com/productsImages/${image}`,
        alt: `${product.title[locale]} ${index + 1}`,
        objectFit: "contain"
      });
    });
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
                      {/* <p>Created by </p> */}
                      <a href="#">{t("product.author")}</a>
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
                <div className="course_section_title mb-4">
                  <h3>{t("product.features")}</h3>
                </div>
                <div className="feature_box_container d-flex flex-row flex-wrap justify-content-start">
                  {product.mainFeatures.map((feature, index) => (
                    <div key={index} className="feature_box d-flex flex-column align-items-center justify-content-center">
                      <div className="feature-icon-container">
                        {feature.icon ? (
                          renderSvgIcon(feature.icon) ? (
                            <div dangerouslySetInnerHTML={renderSvgIcon(feature.icon)} />
                          ) : (
                            <img 
                              src={feature.icon} 
                              alt={feature.title[locale]} 
                              onError={(e) => {
                                e.target.onerror = null;
                                // Replace with a fallback icon
                                e.target.parentNode.innerHTML = `<div class="feature-icon-fallback">★</div>`;
                              }}
                            />
                          )
                        ) : (
                          // Fallback icon when no icon is provided
                          <div className="feature-icon-fallback">★</div>
                        )}
                      </div>
                      <div className="feature_title">{feature.title[locale]}</div>
                      <p>{feature.description[locale]}</p>
                    </div>
                  ))}
                </div>
                {/* <!-- Features list --> */}
                <div className="section_feature_check_list">
                  <div className="course_section_title">
                    <h3>{t("product.whatYoullLearn")}</h3>
                  </div>
                  <div className="feature_check_list d-flex flex-row flex-wrap">
                    <div className="w-100">
                      {product.learnsSection.map((learn, index) => (
                        <div className="feature_check_item d-flex flex-row gap-3 align-items-center" key={index}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                          >
                            <path
                              className="st0"
                              d="M6.8,17.5L0,10.7l1.8-1.8l5,5L18.2,2.5L20,4.3L6.8,17.5z"
                            />
                          </svg>
                          <p>
                            {learn[locale]}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Sidebar --> */}
            <div className="col-xl-4 col-12 order-1 order-xl-2">
              <div className="sidebar">
                <div className="sidebar_pic" dir="ltr">
                  {product && productImages.length > 0 && (
                    <>
                      <style>{productSliderStyles}</style>
                      <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation={true}
                        pagination={{ clickable: true }}
                        loop={true}
                        autoplay={{
                          delay: 5000,
                          disableOnInteraction: false,
                        }}
                        className="product-swiper"
                      >
                        {productImages.map((image, index) => (
                          <SwiperSlide key={index}>
                            <img
                              src={image.src}
                              alt={image.alt}
                              style={{
                                width: "100%",
                                // height: "auto",
                                objectFit: image.objectFit,
                              }}
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </>
                  )}
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
                    {product.features && (
                      <>
                        <div className="sidebar_list_item d-flex flex-row justify-content-between">
                          <div>{t("product.features.dimensions")}</div>
                          <div>{product.features.dimensions?.[locale]}</div>
                        </div>
                        <div className="sidebar_list_item d-flex flex-row justify-content-between">
                          <div>{t("product.features.pageCount")}</div>
                          <div>{product.features.pageCount?.[locale]}</div>
                        </div>
                        <div className="sidebar_list_item d-flex flex-row justify-content-between">
                          <div>{t("product.features.publishingPlace")}</div>
                          <div>
                            {product.features.publishingPlace?.[locale]}
                          </div>
                        </div>
                        <div className="sidebar_list_item d-flex flex-row justify-content-between">
                          <div>{t("product.features.edition")}</div>
                          <div>{product.features.edition?.[locale]}</div>
                        </div>
                        <div className="sidebar_list_item d-flex flex-row justify-content-between">
                          <div>{t("product.features.publishDate")}</div>
                          <div>{product.features.publishDate?.[locale]}</div>
                        </div>
                        <div className="sidebar_list_item d-flex flex-row justify-content-between">
                          <div>{t("product.features.language")}</div>
                          <div>{product.features.language?.[locale]}</div>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="sidebar_buttons">
                    {/* <div className="button_fill trans_200">
                      <a href="#">
                        <div className="d-flex flex-row align-items-center">
                          <span>Add to cart{product.features.language?.[locale]}</span>
                        </div>
                      </a>
                    </div> */}
                    <div className="button_outline trans_200">
                      <a href={`${product.buyLink}`} target="_blank">
                        <div className="d-flex flex-row align-items-center">
                          <span>{t("product.buyLink")}</span>
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
