"use client";
import React from 'react';
import Loader from './components/Loader';

export default function LocaleLoading() {
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center">
      <Loader 
        type="dots" 
        size="lg" 
        color="primary" 
        text="Loading content..." 
      />
    </div>
  );
} 