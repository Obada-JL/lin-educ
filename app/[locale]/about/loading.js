"use client";
import React from 'react';
import Loader from '../components/Loader';

export default function AboutLoading() {
  return (
    <div className="about_container mt-5">
      <div className="container">
        <div className="row mb-4">
          <div className="col">
            <div className="skeleton-header">
              <div className="skeleton-title"></div>
              <div className="skeleton-subtitle"></div>
              <style jsx>{`
                .skeleton-header {
                  margin-bottom: 40px;
                }
                .skeleton-title {
                  height: 40px;
                  width: 60%;
                  margin-bottom: 15px;
                  background: #e0e0e0;
                  border-radius: 4px;
                  animation: shimmer 1.5s infinite linear;
                  background-image: linear-gradient(90deg, #e0e0e0 0%, #f0f0f0 50%, #e0e0e0 100%);
                  background-size: 200% 100%;
                }
                .skeleton-subtitle {
                  height: 20px;
                  width: 40%;
                  background: #e0e0e0;
                  border-radius: 4px;
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
            <Loader 
              type="pulse" 
              size="lg" 
              color="primary" 
              text="Loading about page..." 
            />
          </div>
        </div>
      </div>
    </div>
  );
} 