"use client";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "../../../navigation";
import Image from "next/image";
import "../../../styles/courses.css";
import { useEffect, useState } from "react";
import { getTranslatedContent } from "../../../utils/translation";
import Loader from "../components/Loader";

export default function CoursesPage() {
  const t = useTranslations("courses");
  const locale = useLocale();
  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [categoriesData, coursesData] = await Promise.all([
          fetch("https://api.lineduc.com/api/getCategorys").then((res) =>
            res.json()
          ),
          fetch("https://api.lineduc.com/api/getCourses").then((res) =>
            res.json()
          ),
        ]);

        setCategories(categoriesData);
        console.log(coursesData);
        const translatedCourses = coursesData.map((course) => {
          console.log("Course Field:", course.courseField);
          
          return {
            id: course._id,
            title: course.mainTitle[locale],
            description: course.description[locale],
            category: course.courseField[locale],
            courseField: course.courseField,
            image: course.courseMainImage,
            lessons: course.lessons?.length || 0,
            videosCount: course.videos?.length || 0,
            gamesCount: course.games?.length || 0,
            newLink: course.newLink || course._id,
            // price: course.price || "$37.00",
            author:
              course.author || (locale === "ar" ? "مدير الموقع" : "App Manager"),
          };
        });

        setCourses(translatedCourses);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [locale]);

  const filteredCourses = selectedCategory
    ? courses.filter((course) => {
        // Get the selected category object
        const selectedCategoryObj = categories.find(c => c._id === selectedCategory);
        if (!selectedCategoryObj) {
          console.log("Selected category not found:", selectedCategory);
          return false;
        }
        
        // Get the category title in the current locale
        const categoryTitle = selectedCategoryObj[`categoryTitle_${locale}`];
        
        // For debugging
        console.log("Matching course:", course.title);
        console.log("Course field:", course.courseField);
        console.log("Selected category title:", categoryTitle);
        
        // Direct locale-based matching - this is the simplest and most reliable approach
        const isMatchByLocale = course.courseField && 
                               course.courseField[locale] === categoryTitle;
        
        // Fallback matching methods
        const isMatchEn = course.courseField?.en === selectedCategoryObj?.categoryTitle_en;
        const isMatchAr = course.courseField?.ar === selectedCategoryObj?.categoryTitle_ar;
        
        const isMatch = isMatchByLocale || isMatchEn || isMatchAr;
        
        console.log("Match details:", { 
          isMatchByLocale,
          isMatchEn, 
          isMatchAr,
          isMatch 
        });
        
        return isMatch;
      })
    : courses;
  
  console.log("Selected Category:", selectedCategory);
  console.log("All Courses:", courses);
  console.log("Filtered Courses:", filteredCourses);
  
  if (loading) {
    return <Loader type="pulse" size="lg" color="primary" text={t("status.loading")} />;
  }

  if (error) {
    return (
      <div className="alert alert-danger text-center p-5">
        <h4>{t("status.error")}</h4>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="courses_container mt-5">
      <div className="courses">
        <div className="container">
          {!selectedCategory ? (
            <>
              <div className="row mb-4">
                <div className="col">
                  <div className="section_title_container">
                    <h2>{t("filters.title")}</h2>
                  </div>
                </div>
              </div>

              <div className="row course_cards_container">
                {categories.map((category) => (
                  <div 
                    key={category._id}
                    className="col-12 col-xl-4 col-md-6 mb-4"
                    onClick={() => setSelectedCategory(category._id)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="course_card">
                      <div className="course_card_container">
                        <div className="course_card_top">
                          <div className="course_card_category trans_200">
                            <a href="#"><span>
                              {category[`categoryTitle_${locale}`]}
                            </span></a>
                          </div>
                          <div className="course_card_pic">
                            {category.categoryImage ? (
                              <img
                                src={`https://api.lineduc.com/categoryImages/${category.categoryImage}`}
                                alt={category[`categoryTitle_${locale}`]}
                                style={{ width: "100%", height: "200px", objectFit: "contain" }}
                              />
                            ) : (
                              <div className="category_placeholder">
                                <span>{category[`categoryTitle_${locale}`]}</span>
                              </div>
                            )}
                          </div>
                          <div className="course_card_content">
                            <div className="course_card_meta d-flex flex-row align-items-center">
                              <div className="d-flex flex-row align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 20 20">
                                  <path className="st0" d="M1.95,18.11c-0.53,0-0.99-0.19-1.37-0.58C0.19,17.15,0,16.7,0,16.17V3.83c0-0.55,0.19-1.01,0.58-1.38 c0.38-0.38,0.84-0.56,1.37-0.56h12.33c0.54,0,1.01,0.19,1.38,0.56c0.38,0.38,0.56,0.84,0.56,1.38v5.18L20,5.24v9.53l-3.78-3.78v5.18 c0,0.53-0.19,0.99-0.56,1.37c-0.38,0.38-0.84,0.58-1.38,0.58H1.95z M1.95,16.54h12.33c0.11,0,0.2-0.03,0.27-0.1 c0.07-0.07,0.11-0.16,0.11-0.27V3.83c0-0.11-0.04-0.2-0.11-0.27c-0.07-0.07-0.16-0.1-0.27-0.1H1.95c-0.11,0-0.2,0.03-0.27,0.1 c-0.07,0.07-0.1,0.16-0.1,0.27v12.33c0,0.11,0.03,0.2,0.1,0.27C1.75,16.5,1.84,16.54,1.95,16.54z M1.57,16.54V3.46V16.54z" />
                                </svg>
                                <span>{t("card.category")}</span>
                              </div>
                              <div className="dot"></div>
                              <span>
                                {courses.filter(course => 
                                  course.courseField && 
                                  course.courseField[locale] === category[`categoryTitle_${locale}`]
                                ).length} {t("card.courses")}
                              </span>
                            </div>
                            <div className="course_card_meta d-flex flex-row align-items-center mt-2">
                              <div className="d-flex flex-row align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 20 20" width="16" height="16">
                                  <path className="st0" d="M1.95,18.11c-0.53,0-0.99-0.19-1.37-0.58C0.19,17.15,0,16.7,0,16.17V3.83c0-0.55,0.19-1.01,0.58-1.38 c0.38-0.38,0.84-0.56,1.37-0.56h12.33c0.54,0,1.01,0.19,1.38,0.56c0.38,0.38,0.56,0.84,0.56,1.38v5.18L20,5.24v9.53l-3.78-3.78v5.18 c0,0.53-0.19,0.99-0.56,1.37c-0.38,0.38-0.84,0.58-1.38,0.58H1.95z M1.95,16.54h12.33c0.11,0,0.2-0.03,0.27-0.1 c0.07-0.07,0.11-0.16,0.11-0.27V3.83c0-0.11-0.04-0.2-0.11-0.27c-0.07-0.07-0.16-0.1-0.27-0.1H1.95c-0.11,0-0.2,0.03-0.27,0.1 c-0.07,0.07-0.1,0.16-0.1,0.27v12.33c0,0.11,0.03,0.2,0.1,0.27C1.75,16.5,1.84,16.54,1.95,16.54z M1.57,16.54V3.46V16.54z" />
                                </svg>
                                <span>{
                                  courses.filter(course => 
                                    course.courseField && 
                                    course.courseField[locale] === category[`categoryTitle_${locale}`]
                                  ).reduce((total, course) => total + (course.videosCount || 0), 0)
                                } {t("card.videos")}</span>
                              </div>
                              <div className="dot"></div>
                              <div className="d-flex flex-row align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-controller me-1" viewBox="0 0 16 16">
                                  <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1v-1z"/>
                                  <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729c.14.09.266.19.373.297.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.34 2.34 0 0 1 .382-.306.5.5 0 0 1 .306-.729l1.932-.518a.5.5 0 0 1 .61.39c.16-.018.33-.033.51-.045v-.036a.5.5 0 0 1 .435-.563l1.9-.315a.5.5 0 0 1 .565.435.5.5 0 0 1 .435.565l-.315 1.9a.5.5 0 0 1-.564.434.5.5 0 0 1-.435.565l-1.9.315a.5.5 0 0 1-.565-.435.5.5 0 0 1-.435-.565l.315-1.9a.5.5 0 0 1 .564-.434c.018-.162.034-.332.05-.51a.5.5 0 0 1-.39-.61l.518-1.932a.5.5 0 0 1 .613-.354z"/>
                                </svg>
                                <span>{
                                  courses.filter(course => 
                                    course.courseField && 
                                    course.courseField[locale] === category[`categoryTitle_${locale}`]
                                  ).reduce((total, course) => total + (course.gamesCount || 0), 0)
                                } {t("card.games")}</span>
                              </div>
                            </div>
                            <div className="course_card_title">
                              <h3>{category[`categoryTitle_${locale}`]}</h3>
                            </div>
                            <div className="course_card_author">
                              <span>{t("card.by")} </span>
                              <a href="#">Lin Education</a>
                            </div>
                          </div>
                        </div>
                        <div className="course_card_bottom trans_200 d-flex flex-row align-items-center">
                          <div className="course_card_price"></div>
                          <div className="course_card_link ms-auto d-flex flex-row align-items-center">
                            <a href="#" onClick={(e) => { e.preventDefault(); setSelectedCategory(category._id); }}>
                              <div className="d-flex flex-row align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                                  <path className="trans_200" d="M301.08-597.69v-52H796v52H301.08Zm0 143.69v-52H796v52H301.08Zm0 143.69v-52H796v52H301.08ZM192.31-595.38q-10.73 0-19.52-8.9t-8.79-20.3q0-11.06 8.79-19.24 8.79-8.18 20.02-8.18t19.52 8.03q8.29 8.03 8.29 19.89 0 10.9-8.14 19.8t-20.17 8.9Zm0 143.3q-10.73 0-19.52-8.68-8.79-8.67-8.79-19.74 0-11.81 8.79-20t20.02-8.19q11.23 0 19.52 8.04t8.29 20.65q0 10.57-8.14 19.24-8.14 8.68-20.17 8.68Zm0 144.08q-10.73 0-19.52-8.9T164-337.19q0-11.07 8.79-19.25t20.02-8.18q11.23 0 19.52 8.03t8.29 19.9q0 10.89-8.14 19.79-8.14 8.9-20.17 8.9Z" />
                                </svg>
                                <span className="trans_200">{t("card.viewCourses")}</span>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="row mb-4">
                <div className="col d-flex align-items-center">
                  <button
                    className="back-button me-3"
                    onClick={() => setSelectedCategory(null)}
                    style={{ 
                      background: "#007bff", 
                      color: "white", 
                      border: "none", 
                      borderRadius: "50%", 
                      width: "40px", 
                      height: "40px", 
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "center",
                      cursor: "pointer"
                    }}
                  >
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
                    </svg>
                  </button>
                  <div className="section_title_container mb-0">
                    <h2>
                      {categories.find((c) => c._id === selectedCategory) 
                        ? categories.find((c) => c._id === selectedCategory)?.[`categoryTitle_${locale}`]
                        : t("filters.all")}
                    </h2>
                  </div>
                </div>
              </div>

              {/* Debug info - remove in production */}
              {/* <div className="row mb-4" style={{ display: process.env.NODE_ENV === 'development' ? 'block' : 'none' }}>
                <div className="col">
                  <div className="alert alert-info">
                    <p>Selected Category ID: {selectedCategory}</p>
                    <p>Selected Category Name: {
                      categories.find(c => c._id === selectedCategory)
                        ? categories.find(c => c._id === selectedCategory)?.[`categoryTitle_${locale}`]
                        : "Not found"
                    }</p>
                    <p>Filtered Courses Count: {filteredCourses.length}</p>
                    <p>Total Courses: {courses.length}</p>
                    <button 
                      className="btn btn-sm btn-primary"
                      onClick={() => {
                        console.log("Categories:", categories);
                        console.log("Selected Category:", selectedCategory);
                        console.log("Selected Category Object:", categories.find(c => c._id === selectedCategory));
                        console.log("All Courses:", courses);
                        console.log("Filtered Courses:", filteredCourses);
                        
                        // Show detailed matching info for each course
                        if (selectedCategory) {
                          const selectedCategoryObj = categories.find(c => c._id === selectedCategory);
                          if (selectedCategoryObj) {
                            const categoryTitle_en = selectedCategoryObj?.categoryTitle_en || "";
                            const categoryTitle_ar = selectedCategoryObj?.categoryTitle_ar || "";
                            
                            console.log("Selected Category Titles:", { 
                              en: categoryTitle_en, 
                              ar: categoryTitle_ar,
                              current: selectedCategoryObj[`categoryTitle_${locale}`]
                            });
                            
                            courses.forEach(course => {
                              console.log(`Course "${course.title}" matching info:`, {
                                courseId: course.id,
                                courseField: course.courseField,
                                localeMatch: course.courseField && 
                                            course.courseField[locale] === selectedCategoryObj[`categoryTitle_${locale}`],
                                isMatchEn: course.courseField?.en === categoryTitle_en,
                                isMatchAr: course.courseField?.ar === categoryTitle_ar
                              });
                            });
                          }
                        }
                      }}
                    >
                      Log Debug Info
                    </button>
                  </div>
                </div>
              </div> */}

              <div className="row course_cards_container">
                {filteredCourses.length > 0 ? (
                  filteredCourses.map((course) => (
                    <div
                      key={course.id}
                      className="col-12 col-xl-4 col-md-6 mb-4"
                    >
                      <div className="course_card" style={{ cursor: "pointer" }}>
                        <Link href={`/courses/${course.newLink}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                          <div className="course_card_container">
                            <div className="course_card_top">
                              <div className="course_card_category trans_200">
                                <a href="#"><span>{course.category}</span></a>
                              </div>
                              <div className="course_card_pic">
                                {course.image ? (
                                  <img
                                    src={`https://api.lineduc.com/courseImages/${course.image}`}
                                    alt={course.title}
                                    style={{ width: "100%", height: "200px", objectFit: "contain" }}
                                  />
                                ) : (
                                  <div className="course_placeholder">
                                    <span>{course.title}</span>
                                  </div>
                                )}
                              </div>
                              <div className="course_card_content">
                                <div className="course_card_meta d-flex flex-row align-items-center">
                                  <div className="d-flex flex-row align-items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 20 20">
                                      <path className="st0" d="M1.95,18.11c-0.53,0-0.99-0.19-1.37-0.58C0.19,17.15,0,16.7,0,16.17V3.83c0-0.55,0.19-1.01,0.58-1.38 c0.38-0.38,0.84-0.56,1.37-0.56h12.33c0.54,0,1.01,0.19,1.38,0.56c0.38,0.38,0.56,0.84,0.56,1.38v5.18L20,5.24v9.53l-3.78-3.78v5.18 c0,0.53-0.19,0.99-0.56,1.37c-0.38,0.38-0.84,0.58-1.38,0.58H1.95z M1.95,16.54h12.33c0.11,0,0.2-0.03,0.27-0.1 c0.07-0.07,0.11-0.16,0.11-0.27V3.83c0-0.11-0.04-0.2-0.11-0.27c-0.07-0.07-0.16-0.1-0.27-0.1H1.95c-0.11,0-0.2,0.03-0.27,0.1 c-0.07,0.07-0.1,0.16-0.1,0.27v12.33c0,0.11,0.03,0.2,0.1,0.27C1.75,16.5,1.84,16.54,1.95,16.54z M1.57,16.54V3.46V16.54z" />
                                    </svg>
                                    <span>{t("card.videoCourse")}</span>
                                  </div>
                                  <div className="dot"></div>
                                  <span>{course.videosCount} {t("card.videos")}</span>
                                  {course.gamesCount > 0 && (
                                    <>
                                      <div className="dot"></div>
                                      <div className="d-flex flex-row align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-controller me-1" viewBox="0 0 16 16">
                                          <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1v-1z"/>
                                          <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729c.14.09.266.19.373.297.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.34 2.34 0 0 1 .382-.306.5.5 0 0 1 .306-.729l1.932-.518a.5.5 0 0 1 .61.39c.16-.018.33-.033.51-.045v-.036a.5.5 0 0 1 .435-.563l1.9-.315a.5.5 0 0 1 .565.435.5.5 0 0 1 .435.565l-.315 1.9a.5.5 0 0 1-.564.434.5.5 0 0 1-.435.565l-1.9.315a.5.5 0 0 1-.565-.435.5.5 0 0 1-.435-.565l.315-1.9a.5.5 0 0 1 .564-.434c.018-.162.034-.332.05-.51a.5.5 0 0 1-.39-.61l.518-1.932a.5.5 0 0 1 .613-.354z"/>
                                        </svg>
                                        <span>{course.gamesCount} {t("card.games")}</span>
                                      </div>
                                    </>
                                  )}
                                </div>
                                <div className="course_card_title">
                                  <h3>{course.title}</h3>
                                </div>
                                <div className="course_card_author">
                                  <span>{t("card.by")} </span>
                                  <a href="#">{course.author}</a>
                                </div>
                              </div>
                            </div>
                            <div className="course_card_bottom trans_200 d-flex flex-row align-items-center">
                              {/* <div className="course_card_price">{course.price}</div> */}
                              <div className="course_card_link ms-auto d-flex flex-row align-items-center">
                                <div className="d-flex flex-row align-items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                                    <path className="trans_200" d="M301.08-597.69v-52H796v52H301.08Zm0 143.69v-52H796v52H301.08Zm0 143.69v-52H796v52H301.08ZM192.31-595.38q-10.73 0-19.52-8.9t-8.79-20.3q0-11.06 8.79-19.24 8.79-8.18 20.02-8.18t19.52 8.03q8.29 8.03 8.29 19.89 0 10.9-8.14 19.8t-20.17 8.9Zm0 143.3q-10.73 0-19.52-8.68-8.79-8.67-8.79-19.74 0-11.81 8.79-20t20.02-8.19q11.23 0 19.52 8.04t8.29 20.65q0 10.57-8.14 19.24-8.14 8.68-20.17 8.68Zm0 144.08q-10.73 0-19.52-8.9T164-337.19q0-11.07 8.79-19.25t20.02-8.18q11.23 0 19.52 8.03t8.29 19.9q0 10.89-8.14 19.79-8.14 8.9-20.17 8.9Z" />
                                  </svg>
                                  <span className="trans_200">{t("card.startLearning")}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-12 text-center p-5">
                    <div className="alert alert-info">
                      <h4>{t("status.empty")}</h4>
                      <p>{t("status.noCourses")}</p>
                      <button 
                        className="btn btn-primary mt-3"
                        onClick={() => setSelectedCategory(null)}
                      >
                        {t("filters.all")}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
