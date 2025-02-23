"use client";
import { useTranslations, useLocale } from "next-intl";
import { useState, useEffect } from "react";
import { Link } from "../../../../navigation";
import { getTranslatedContent } from "../../../../utils/translation";
import "../../../../styles/course.css"

export default function CoursePage({ params }) {
  const t = useTranslations("course");
  const locale = useLocale();
  const [activeSection, setActiveSection] = useState("videos");
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [relatedCourses, setRelatedCourses] = useState([]);

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        setLoading(true);
        const courseResponse = await fetch(`http://localhost:5000/api/getCourse/${params.id}`);
        if (!courseResponse.ok) throw new Error('Failed to fetch course');
        const courseData = await courseResponse.json();
        
        setCourse(courseData);

        // Fetch related courses with same category
        const relatedResponse = await fetch('http://localhost:5000/api/getCourses');
        if (!relatedResponse.ok) throw new Error('Failed to fetch related courses');
        const relatedData = await relatedResponse.json();
        
        const filteredRelated = relatedData
          .filter(c => c._id !== params.id && c.category === courseData.category)
          .slice(0, 3)
          .map(c => ({
            id: c._id,
            title: getTranslatedContent(c.mainTitle, locale),
            image: c.courseMainImage,
            lessons: c.videos?.length || 0
          }));
        
        setRelatedCourses(filteredRelated);
      } catch (error) {
        console.error('Error:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourseData();
  }, [params.id, locale]);

  // Add YouTube URL parser
  const getYouTubeEmbedUrl = (url) => {
    if (!url) return '';
    console.log(url)
    const videoId = url.split('v=')[1]?.split('&')[0];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
  };

  if (loading) return <div className="loading">{t("loading")}</div>;
  if (error) return <div className="error">{error}</div>;
  if (!course) return <div className="not-found">{t("notFound")}</div>;

  return (
    <div className="course_page" style={{ marginTop: "130px" }}>
      <div className="container">
        <div className="row">
          {/* Main Content */}
          <div className="col-lg-8">
            <div className="course_main_content">
              {/* Video Player */}
              {/* <div className="course_video">
                {course.videos && course.videos[0] && (
                  <div className="video-wrapper">
                    <iframe
                      src={getYouTubeEmbedUrl(course.videos[0].url)}
                      title={getTranslatedContent(course.videos[0].title, locale)}
                      allowFullScreen
                      className="main_video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                  </div>
                )}
              </div> */}

              {/* Course Navigation */}
              <div className="course_nav">
                <div className="nav_tabs d-flex gap-3">
                  <button 
                    className={`tab_btn ${activeSection === 'videos' ? 'active' : ''}`}
                    onClick={() => setActiveSection('videos')}
                  >
                    {t("tabs.videos")}
                  </button>
                  <button 
                    className={`tab_btn ${activeSection === 'games' ? 'active' : ''}`}
                    onClick={() => setActiveSection('games')}
                  >
                    {t("tabs.games")}
                  </button>
                  <button 
                    className={`tab_btn ${activeSection === 'resources' ? 'active' : ''}`}
                    onClick={() => setActiveSection('resources')}
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
                        <div key={index} className="video_item">
                          <div className="video-wrapper">
                            <iframe
                              src={getYouTubeEmbedUrl(video.url)}
                              title={getTranslatedContent(video.title, locale)}
                              allowFullScreen
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            />
                          </div>
                          <h3>{getTranslatedContent(video.title, locale)}</h3>
                          <p>{getTranslatedContent(video.description, locale)}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Games Section */}
                  {activeSection === 'games' && (
                    <div className="games_section">
                      {course.games?.map((game, index) => (
                        <div key={index} className="game_item">
                          <div className="game-wrapper">
                            <iframe
                              src={game.url}
                              title={getTranslatedContent(game.title, locale)}
                              allowFullScreen
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            />
                          </div>
                          <h3>{getTranslatedContent(game.title, locale)}</h3>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Resources Section */}
                  {activeSection === 'resources' && (
                    <div className="resources_section">
                      {course.resources?.map((resource, index) => (
                        <div key={index} className="resource_item">
                          <div className="resource_image">
                            <img
                              src={`http://localhost:5000/resourceImages/${resource.image}`}
                              alt={getTranslatedContent(resource.title, locale)}
                            />
                          </div>
                          <div className="resource_content">
                            <h3>{getTranslatedContent(resource.title, locale)}</h3>
                            <p>{getTranslatedContent(resource.description, locale)}</p>
                            <a href={resource.url} className="download_btn" target="_blank" rel="noopener noreferrer">
                              {t("downloadResource")}
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Improved Sidebar */}
          <div className="col-lg-4">
            <div className="course_sidebar">
              <div className="sidebar_section">
                <h3 className="sidebar_title">{t("otherCourses")}</h3>
                <div className="related_courses_list">
                  {relatedCourses.map(relatedCourse => (
                    <Link key={relatedCourse.id} href={`/courses/${relatedCourse.id}`}>
                      <div className="related_course_item">
                        <div className="related_course_image">
                          <img
                            src={`http://localhost:5000/courseImages/${relatedCourse.image}`}
                            alt={relatedCourse.title}
                          />
                        </div>
                        <div className="related_course_info">
                          <h4 className="related_course_title">{relatedCourse.title}</h4>
                          <div className="related_course_meta">
                            <span className="lessons_count">
                              {relatedCourse.lessons} {t("lessons")}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
