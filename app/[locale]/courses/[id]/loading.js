"use client";
import React from 'react';
import Loader from '../../components/Loader';

export default function CourseDetailLoading() {
  return (
    <div className="course_page" style={{ marginTop: "130px" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            {/* Sidebar skeleton */}
            <div className="course_sidebar" style={{ position: "sticky", top: "150px" }}>
              <div className="skeleton-sidebar">
                <div className="skeleton-title"></div>
                <div className="skeleton-item"></div>
                <div className="skeleton-item"></div>
                <div className="skeleton-item"></div>
                <style jsx>{`
                  .skeleton-sidebar {
                    padding: 20px;
                    background: #f8f9fa;
                    border-radius: 8px;
                  }
                  .skeleton-title {
                    height: 24px;
                    margin-bottom: 20px;
                    background: #e0e0e0;
                    border-radius: 4px;
                    animation: shimmer 1.5s infinite linear;
                    background-image: linear-gradient(90deg, #e0e0e0 0%, #f0f0f0 50%, #e0e0e0 100%);
                    background-size: 200% 100%;
                  }
                  .skeleton-item {
                    height: 80px;
                    margin-bottom: 15px;
                    background: #e0e0e0;
                    border-radius: 8px;
                    animation: shimmer 1.5s infinite linear;
                    background-image: linear-gradient(90deg, #e0e0e0 0%, #f0f0f0 50%, #e0e0e0 100%);
                    background-size: 200% 100%;
                  }
                  @keyframes shimmer {
                    0% { background-position: -200% 0; }
                    100% { background-position: 200% 0; }
                  }
                `}</style>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <Loader 
              type="dots" 
              size="lg" 
              color="primary" 
              text="Loading course content..." 
            />
          </div>
        </div>
      </div>
    </div>
  );
} 