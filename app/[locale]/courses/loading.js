"use client";
import React from 'react';
import Loader from '../components/Loader';

export default function CoursesLoading() {
  return (
    <div className="courses_container mt-5">
      <div className="container">
        <div className="row mb-4">
          <div className="col">
            <Loader 
              type="skeleton" 
              size="lg" 
              color="primary" 
              text="Loading courses..." 
            />
          </div>
        </div>
      </div>
    </div>
  );
} 