"use client";
import { useTranslations, useLocale } from "next-intl";
import { useState, useEffect } from "react";
import React from "react";
import { Link } from "../../../../navigation";
import { getTranslatedContent } from "../../../../utils/translation";
import "../../../../styles/course.css"
import Loader from "../../components/Loader";

export default function CoursePage({ params }) {
  const resolvedParams = React.use(params);
  const courseId = resolvedParams.id;
  
  const t = useTranslations("course");
  const locale = useLocale();
  const [activeSection, setActiveSection] = useState("videos");
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categoryCourses, setCategoryCourses] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  // Check if the screen is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 992);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        setLoading(true);
        console.log("Fetching course with ID/link:", courseId);
        
        // Try to fetch the course (could be by ID or newLink)
        const courseResponse = await fetch(`https://api.lineduc.com/api/getCourseByLink/${courseId}`)
          .then(res => {
            if (!res.ok) {
              // If not found by link, try by ID
              console.log("Course not found by link, trying by ID");
              return fetch(`https://api.lineduc.com/api/getCourse/${courseId}`);
            }
            return res;
          });
        
        if (!courseResponse.ok) throw new Error('Failed to fetch course');
        const courseData = await courseResponse.json();
        
        setCourse(courseData);
        console.log("Course data:", courseData);

        // Fetch all courses to find those in the same category
        const allCoursesResponse = await fetch('https://api.lineduc.com/api/getCourses');
        if (!allCoursesResponse.ok) throw new Error('Failed to fetch courses');
        const allCoursesData = await allCoursesResponse.json();
        
        // Filter courses in the same category and map them to a simpler structure
        const sameCategoryCourses = allCoursesData
          .filter(c => {
            // Match by courseField which contains the category
            if (courseData.courseField && c.courseField) {
              return (
                courseData.courseField.en === c.courseField.en || 
                courseData.courseField.ar === c.courseField.ar
              );
            }
            return false;
          })
          .map(c => ({
            id: c._id,
            title: c.mainTitle[locale],
            image: c.courseMainImage,
            videosCount: c.videos?.length || 0,
            gamesCount: c.games?.length || 0,
            newLink: c.newLink || c._id, // Use newLink if available, fallback to ID
            isCurrentCourse: c._id === courseData._id // Compare with the fetched course ID
          }));
        
        setCategoryCourses(sameCategoryCourses);
      } catch (error) {
        console.error('Error:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourseData();
  }, [courseId, locale]);

  // Add YouTube URL parser
  const getYouTubeEmbedUrl = (url) => {
    if (!url) return '';
    console.log(url)
    const videoId = url.split('v=')[1]?.split('&')[0];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
  };

  if (loading) return <Loader type="dots" size="lg" color="primary" text={t("loading")} />;
  if (error) return (
    <div className="alert alert-danger text-center p-5 mt-5">
      <h4>{t("error")}</h4>
      <p>{error}</p>
    </div>
  );
  if (!course) return (
    <div className="alert alert-warning text-center p-5 mt-5">
      <h4>{t("notFound")}</h4>
      <p>{t("courseNotFoundMessage")}</p>
    </div>
  );

  return (
    <div className="course_page" style={{ marginTop: "130px" }}>
      <div className="container">
        <div className="row">
          {/* Sidebar - Now on the left side */}
          <div className="col-lg-3">
            <div className={`course_sidebar ${isMobile ? 'mobile-sidebar' : ''}`} 
                 style={{ 
                   position: isMobile ? "relative" : "sticky", 
                   top: isMobile ? "0" : "150px"
                 }}>
              <div className="sidebar_section">
                <h3 className="sidebar_title mb-4">{getTranslatedContent(course.courseField, locale)} {t("courses")}</h3>
                <div className={`category_courses_list ${isMobile ? 'mobile-courses-list' : ''}`}>
                  {categoryCourses.map(categoryCourse => (
                    <Link 
                      key={categoryCourse.id} 
                      href={`/courses/${categoryCourse.newLink}`}
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      <div className={`sidebar_course_item d-flex align-items-center mb-3 p-2 ${categoryCourse.isCurrentCourse ? 'active' : ''}`}>
                        <div className="sidebar_course_image me-3">
                          {categoryCourse.image ? (
                            <img
                              src={`https://api.lineduc.com/courseImages/${categoryCourse.image}`}
                              alt={categoryCourse.title}
                              style={{ 
                                width: "60px", 
                                height: "60px", 
                                objectFit: "cover", 
                                borderRadius: "8px",
                                border: categoryCourse.isCurrentCourse ? "2px solid #5965d4" : "none"
                              }}
                            />
                          ) : (
                            <div className="course_placeholder" style={{ 
                              width: "60px", 
                              height: "60px", 
                              borderRadius: "8px", 
                              background: categoryCourse.isCurrentCourse ? "#e8ecf6" : "#f1f1f2", 
                              display: "flex", 
                              alignItems: "center", 
                              justifyContent: "center",
                              border: categoryCourse.isCurrentCourse ? "2px solid #5965d4" : "none"
                            }}>
                              <span style={{ fontSize: "10px", textAlign: "center", padding: "5px" }}>{categoryCourse.title}</span>
                            </div>
                          )}
                        </div>
                        <div className="sidebar_course_info">
                          <h5 className="sidebar_course_title mb-1" style={{ 
                            fontSize: "14px", 
                            fontWeight: categoryCourse.isCurrentCourse ? "700" : "500",
                            color: categoryCourse.isCurrentCourse ? "#5965d4" : "inherit"
                          }}>
                            {categoryCourse.title}
                          </h5>
                          <div className="sidebar_course_meta d-flex" style={{ fontSize: "12px", color: "#757575" }}>
                            <span className="me-2">{categoryCourse.videosCount} {t("videos")}</span>
                            {categoryCourse.gamesCount > 0 && (
                              <span>{categoryCourse.gamesCount} {t("games")}</span>
                            )}
                          </div>
                        </div>
                        {categoryCourse.isCurrentCourse && (
                          <div className="current_indicator" style={{
                            position: "absolute",
                            right: "10px",
                            width: "8px",
                            height: "8px",
                            borderRadius: "50%",
                            background: "#5965d4"
                          }}></div>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content - Now takes more space */}
          <div className="col-lg-9">
            <div className="course_main_content">
              {/* Course Title and Description */}
              <div className="course_header mb-4">
                <div className="course_category mb-2">
                  <span style={{ 
                    background: "#f1f1f2", 
                    padding: "5px 12px", 
                    borderRadius: "20px", 
                    fontSize: "14px",
                    color: "#5965d4"
                  }}>
                    {getTranslatedContent(course.courseField, locale)}
                  </span>
                </div>
                <h1 className="course_title mb-3">{getTranslatedContent(course.mainTitle, locale)}</h1>
                <p className="course_description">{getTranslatedContent(course.description, locale)}</p>
              </div>
              
              {/* Video Player */}
              <div className="course_video mb-4">
                {/* {course.videos && course.videos[0] && (
                  <div className="video-wrapper" style={{ borderRadius: "12px", overflow: "hidden" }}>
                    <iframe
                      src={getYouTubeEmbedUrl(course.videos[0].url)}
                      title={getTranslatedContent(course.videos[0].title, locale)}
                      allowFullScreen
                      className="main_video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      style={{ border: "none" }}
                    />
                  </div>
                )} */}
              </div>

              {/* Course Navigation */}
              <div className="course_nav">
                <div className="nav_tabs d-flex gap-3 mb-4">
                  <button 
                    className={`tab_btn ${activeSection === 'videos' ? 'active' : ''}`}
                    onClick={() => setActiveSection('videos')}
                    style={{ 
                      padding: "10px 20px", 
                      borderRadius: "8px", 
                      border: "none", 
                      background: activeSection === 'videos' ? "#5965d4" : "#f1f1f2",
                      color: activeSection === 'videos' ? "white" : "#242730",
                      fontWeight: "500",
                      transition: "all 0.3s ease"
                    }}
                  >
                    {t("tabs.videos")}
                  </button>
                  <button 
                    className={`tab_btn ${activeSection === 'games' ? 'active' : ''}`}
                    onClick={() => setActiveSection('games')}
                    style={{ 
                      padding: "10px 20px", 
                      borderRadius: "8px", 
                      border: "none", 
                      background: activeSection === 'games' ? "#5965d4" : "#f1f1f2",
                      color: activeSection === 'games' ? "white" : "#242730",
                      fontWeight: "500",
                      transition: "all 0.3s ease"
                    }}
                  >
                    {t("tabs.games")}
                  </button>
                  <button 
                    className={`tab_btn ${activeSection === 'resources' ? 'active' : ''}`}
                    onClick={() => setActiveSection('resources')}
                    style={{ 
                      padding: "10px 20px", 
                      borderRadius: "8px", 
                      border: "none", 
                      background: activeSection === 'resources' ? "#5965d4" : "#f1f1f2",
                      color: activeSection === 'resources' ? "white" : "#242730",
                      fontWeight: "500",
                      transition: "all 0.3s ease"
                    }}
                  >
                    {t("tabs.resources")}
                  </button>
                </div>

                {/* Content Sections */}
                <div className="tab_content">
                  {/* Videos Section */}
                  {activeSection === 'videos' && (
                    <div className="videos_section">
                      {course.videos?.map((video, index) => (
                        <div key={index} className="video_item mb-4 p-3" style={{ background: "#f9f9f9", borderRadius: "12px" }}>
                          <div className="video-wrapper mb-3" style={{ borderRadius: "8px", overflow: "hidden" }}>
                            <iframe
                              src={getYouTubeEmbedUrl(video.url)}
                              title={getTranslatedContent(video.title, locale)}
                              allowFullScreen
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              style={{ border: "none" }}
                            />
                          </div>
                          <h3 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "8px" }}>{getTranslatedContent(video.title, locale)}</h3>
                          <p style={{ fontSize: "14px", color: "#757575" }}>{getTranslatedContent(video.description, locale)}</p>
                        </div>
                      ))}
                      {(!course.videos || course.videos.length === 0) && (
                        <div className="empty-state text-center p-5">
                          <p>No videos available for this course.</p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Games Section */}
                  {activeSection === 'games' && (
                    <div className="games_section">
                      {course.games?.map((game, index) => (
                        <div key={index} className="game_item mb-4 p-3" style={{ background: "#f9f9f9", borderRadius: "12px" }}>
                          <div className="game-wrapper mb-3" style={{ borderRadius: "8px", overflow: "hidden", height: "400px" }}>
                            <iframe
                              src={game.url}
                              title={getTranslatedContent(game.title, locale)}
                              allowFullScreen
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              style={{ border: "none", width: "100%", height: "100%" }}
                            />
                          </div>
                          <h3 style={{ fontSize: "18px", fontWeight: "600" }}>{getTranslatedContent(game.title, locale)}</h3>
                        </div>
                      ))}
                      {(!course.games || course.games.length === 0) && (
                        <div className="empty-state text-center p-5">
                          <p>No games available for this course.</p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Resources Section */}
                  {activeSection === 'resources' && (
                    <div className="resources_section">
                      {course.resources?.map((resource, index) => (
                        <div key={index} className="resource_item mb-4 p-3 d-flex" style={{ background: "#f9f9f9", borderRadius: "12px" }}>
                          <div className="resource_image me-3" style={{ width: "100px", minWidth: "100px" }}>
                            <img
                              src={`https://api.lineduc.com/resourceImages/${resource.image}`}
                              alt={getTranslatedContent(resource.title, locale)}
                              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                            />
                          </div>
                          <div className="resource_content">
                            <h3 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "8px" }}>{getTranslatedContent(resource.title, locale)}</h3>
                            <p style={{ fontSize: "14px", color: "#757575", marginBottom: "12px" }}>{getTranslatedContent(resource.description, locale)}</p>
                            <a 
                              href={resource.url} 
                              className="download_btn" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              style={{
                                display: "inline-block",
                                padding: "8px 16px",
                                background: "#5965d4",
                                color: "white",
                                borderRadius: "6px",
                                textDecoration: "none",
                                fontSize: "14px",
                                fontWeight: "500"
                              }}
                            >
                              {t("downloadResource")}
                            </a>
                          </div>
                        </div>
                      ))}
                      {(!course.resources || course.resources.length === 0) && (
                        <div className="empty-state text-center p-5">
                          <p>No resources available for this course.</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add CSS for mobile sidebar */}
      <style jsx>{`
        @media (max-width: 991px) {
          .mobile-sidebar {
            margin-bottom: 30px;
            background: #f8f9fa;
            padding: 20px;
            border-radius: 10px;
          }
          
          .mobile-courses-list {
            display: flex;
            overflow-x: auto;
            padding-bottom: 15px;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: thin;
          }
          
          .mobile-courses-list::-webkit-scrollbar {
            height: 6px;
          }
          
          .mobile-courses-list::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 10px;
          }
          
          .mobile-courses-list::-webkit-scrollbar-thumb {
            background: #c1c1c1;
            border-radius: 10px;
          }
          
          .mobile-courses-list::-webkit-scrollbar-thumb:hover {
            background: #a8a8a8;
          }
          
          .mobile-courses-list .sidebar_course_item {
            min-width: 200px;
            margin-right: 10px;
            flex-shrink: 0;
            background: white;
            border-radius: 8px;
          }
          
          .mobile-courses-list .sidebar_course_item.active {
            background: #e8ecf6;
          }
        }
        
        /* Fix for iframe responsiveness */
        .video-wrapper {
          position: relative;
          padding-bottom: 56.25%; /* 16:9 aspect ratio */
          height: 0;
          overflow: hidden;
        }
        
        .video-wrapper iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
}
