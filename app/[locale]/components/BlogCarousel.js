"use client";
import React from 'react';
import dynamic from "next/dynamic";
import { useLocale, useTranslations } from "next-intl";

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

export default function BlogCarousel({ news }) {
  const t = useTranslations();
  const locale = useLocale();

  // If no news, show a message
  if (!news || news.length === 0) {
    return (
      <div className="text-center p-5">
        <p>No news available</p>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div className="blog_slider_container" dir="ltr">
        <OwlCarousel className="owl-carousel owl-theme" {...options}>
          {news.map((item) => (
            <div key={item._id} className="blog_slider_item">
              <div className="blog_item">
                <div className="blog_pic">
                  {item.newsImage && (
                    <img
                      src={`https://api.lineduc.com/newsImages/${item.newsImage}`}
                      alt={item.newsTitle?.[locale] || ""}
                      height={400}
                    />
                  )}
                </div>
                <div className="blog_content">
                  <h4>
                    <a href="#" className={`${locale === "ar" ? "text-end" : "text-start"}`}>{item.newsTitle?.[locale] || "News Title"}</a>
                  </h4>
                  <div className="blog_meta d-flex flex-row align-items-center justify-content-between">
                    {/* <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960"
                      >
                        <path d="M367.69-826v-52h224.62v52H367.69ZM454-391.69h52v-224.62h-52v224.62Z" />
                      </svg>
                      <span>{t("about.blog.readTime")}</span>
                    </div> */}
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960"
                      >
                        <path d="M228.31-116q-27.01 0-45.66-19Q164-154 164-180.31z" />
                      </svg>
                      <span>
                        {new Date(item.newsDate).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </ErrorBoundary>
  );
} 