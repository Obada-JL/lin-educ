// 'use client';

// import React, { useEffect, useState } from 'react';
// import { useTranslations } from 'next-intl';
// import dynamic from 'next/dynamic';
// import Loader from './Loader';
// import BlogCarousel from './BlogCarousel';

// // Error boundary component
// class ErrorBoundary extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { hasError: false, error: null };
//     }

//     static getDerivedStateFromError(error) {
//         return { hasError: true, error };
//     }

//     componentDidCatch(error, errorInfo) {
//         console.error("Carousel error:", error, errorInfo);
//     }

//     render() {
//         if (this.state.hasError) {
//             return (
//                 <div className="text-center p-4">
//                     <p>Something went wrong with the carousel. Please try again later.</p>
//                     <button
//                         className="btn btn-primary mt-2"
//                         onClick={() => this.setState({ hasError: false, error: null })}
//                     >
//                         Try Again
//                     </button>
//                 </div>
//             );
//         }

//         return this.props.children;
//     }
// }

// // Dynamic import for react-owl-carousel
// const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
//     ssr: false,
// });

// export default function AboutClient() {
//     const t = useTranslations();
//     const [news, setNews] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         // Improved jQuery loading
//         if (typeof window !== "undefined" && !window.jQuery) {
//             const jquery = require("jquery");
//             // Avoid overwriting existing jQuery instance
//             if (!window.jQuery) {
//                 window.jQuery = jquery;
//             }
//             if (!window.$) {
//                 window.$ = jquery;
//             }
//         }

//         // Fetch news data
//         const fetchData = async () => {
//             try {
//                 setLoading(true);
//                 const response = await fetch("https://api.lineduc.com/api/getNews");
//                 if (!response.ok) {
//                     throw new Error(`Failed to fetch news: ${response.status}`);
//                 }
//                 const data = await response.json();
//                 setNews(data);
//                 setError(null);
//             } catch (error) {
//                 console.error("Error fetching news:", error);
//                 setError(error.message || "Failed to load news. Please try again later.");
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, []);

//     if (loading) {
//         return <Loader type="pulse" size="lg" color="primary" text="Loading news..." />;
//     }

//     if (error) {
//         return (
//             <div className="alert alert-danger text-center">
//                 {error}
//             </div>
//         );
//     }

//     return (
//         <div className="blog">
//             <div className="container">
//                 <div className="row">
//                     <div className="col">
//                         <div className="section_title_container section_title_container_centered">
//                             <div className="section_subtitle">
//                                 <div className="d-flex flex-row align-items-center">
//                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
//                                         <path d="M228.31-164q-27.01 0-45.66-18.65Q164-201.3 164-228.31v-503.38q0-27.01 18.65-45.66Q201.3-796 228.31-796h387.23L796-615.54v387.23q0 27.01-18.65 45.66Q758.7-164 731.69-164H228.31Zm0-52h503.38q5.39 0 8.85-3.46t3.46-8.85V-576H576v-168H228.31q-5.39 0-8.85 3.46t-3.46 8.85v503.38q0 5.39 3.46 8.85t8.85 3.46ZM298-308h364v-52H298v52Zm12-280h170v-52H310v52Zm-12 158h364v-52H298v52Zm-82-314v156-156V-216v-528Z" />
//                                     </svg>
//                                     <span>{t("about.blog.subtitle")}</span>
//                                 </div>
//                             </div>
//                             <div className="section_title">
//                                 <h2>{t("about.blog.title")}</h2>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="row section_content_row">
//                     <div className="col">
//                         <ErrorBoundary>
//                             <BlogCarousel news={news} />
//                         </ErrorBoundary>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// } 