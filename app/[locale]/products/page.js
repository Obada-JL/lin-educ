"use client";
import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import "../../../styles/products.css";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const locale = useLocale();
  const t = useTranslations("product"); // Change namespace to "product"

  // Helper function to safely get localized content
  const getLocalizedContent = (obj, locale) => {
    return obj?.[locale] || "";
  };

  useEffect(() => {
    fetch("https://api.lineduc.com/api/getProducts")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>{t("loading")}</div>;

  return (
    <div className="products_container mt-5">
      <div className="products">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="filters_container">
                <div className="section_title_sm mb-3">
                  <h2>{t("filters.title")}</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="row product_cards_container">
            {products.map((product) => (
              <div key={product._id} className="col-12 col-xl-4 col-md-6 mb-5">
                <div className="product_card">
                  <div className="product_card_container">
                    <div className="product_card_top">
                      <div className="product_card_pic">
                        {product.mainImage && (
                          <img
                            src={`https://api.lineduc.com/productsImages/${product.mainImage}`}
                            alt={getLocalizedContent(product.title, locale)}
                          />
                        )}
                      </div>
                      <div className="product_card_content">
                        <h3>{getLocalizedContent(product.title, locale)}</h3>
                        <p className="product_name">
                          {getLocalizedContent(product.name, locale)}
                        </p>
                        <p className="product_description">
                          {getLocalizedContent(product.description, locale)}
                        </p>
                      </div>
                    </div>
                    <div className="product_card_bottom trans_200 d-flex flex-row justify-content-between align-items-center">
                      <a
                        href={`/products/${product._id}`}
                        className="product_card_link me-auto"
                      >
                        <div className="d-flex flex-row align-items-center">
                          <span className="trans_200">{t("viewDetails")}</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 -960 960 960"
                          >
                            <path
                              className="trans_200"
                              d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
