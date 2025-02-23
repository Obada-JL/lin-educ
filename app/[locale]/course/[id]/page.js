"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { notFound } from "next/navigation";

export default function CoursePage({ params }) {
  const t = useTranslations();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/getCourse/${params.id}`
        );
        if (!response.ok) {
          throw new Error("Course not found");
        }
        const data = await response.json();
        setCourse(data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching course:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [params.id]);

  if (loading) {
    return <div className="loading">{t("loading")}</div>;
  }

  if (error || !course) {
    return notFound();
  }

  return (
    <div className="container py-4">
      <h1>{course.mainTitle?.ar || course.mainTitle}</h1>
      {/* Rest of your course display code */}
    </div>
  );
}
//       