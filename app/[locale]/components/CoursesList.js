'use client';

import { useTranslations, useLocale } from 'next-intl';
import { getTranslatedContent } from '../../../utils/translation';

export default function CoursesList() {
  const t = useTranslations('courses');
  const locale = useLocale();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('/api/courses');
        const data = await response.json();
        
        // Transform the courses data to include translations
        const translatedCourses = data.map(course => ({
          ...course,
          title: getTranslatedContent(course.title, locale),
          description: getTranslatedContent(course.description, locale),
          // Add other translatable fields as needed
        }));

        setCourses(translatedCourses);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, [locale]);

  return (
    <div className="courses_list">
      <h2>{t('title')}</h2>
      {courses.map(course => (
        <div key={course.id} className="course_item">
          <h3>{course.title}</h3>
          <p>{course.description}</p>
          {/* Add other course details */}
        </div>
      ))}
    </div>
  );
} 