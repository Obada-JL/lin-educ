"use client";
import React, { useEffect, useState } from 'react';
import { useTranslations, useLocale } from "next-intl";
import Image from 'next/image';

// CountUp animation component
const CountUp = ({ end, duration = 2000, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime;
    let animationFrame;
    
    // Parse the end value to handle numbers with + or % signs
    const endValue = parseInt(end.replace(/[^0-9]/g, ''));
    
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * endValue));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };
    
    animationFrame = requestAnimationFrame(step);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);
  
  // Extract the suffix (+ or %) from the end value
  const extractedSuffix = end.match(/[+%]/g)?.[0] || '';
  
  return (
    <span>{prefix}{count}{extractedSuffix}{suffix}</span>
  );
};

export default function Achievements() {
  const t = useTranslations('achievements');
  const locale = useLocale();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';
  
  // Check if elements are in viewport to trigger animation
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('achievements-section');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);
  
  return (
    <div id="achievements-section" className="achievements-section py-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <div className="section_subtitle">
              <div className="d-flex flex-row align-items-center justify-content-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24" height="24" fill="#5965d4">
                  <path d="M480-120q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-480q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-120Zm0-82q116 0 197-81t81-197q0-116-81-197t-197-81q-116 0-197 81t-81 197q0 116 81 197t197 81Zm0-278Zm-36 115 195-195-56-56-139 139-64-64-56 56 120 120Z" />
                </svg>
                <span className="ms-2">{t('title')}</span>
              </div>
            </div>
            <h2 className="section_title mt-2">{t('subtitle')}</h2>
          </div>
        </div>
        
        <div className="row">
          {/* Teaching Counter */}
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="counter-card p-4 text-center h-100">
              <div className="counter-icon mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24" height="24" fill="#5965d4">
                  <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 420Z" />
                </svg>
              </div>
              <h4 className="counter-title mb-2">{t('counters.teaching.title')}</h4>
              <h3 className="counter-value display-4 fw-bold text-primary">
                {isVisible && <CountUp end={t('counters.teaching.value')} />}
              </h3>
              <p className="counter-description">{t('counters.teaching.description')}</p>
            </div>
          </div>
          
          {/* Videos Counter */}
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="counter-card p-4 text-center h-100">
              <div className="counter-icon mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24" height="24" fill="#5965d4">
                  <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h480q33 0 56.5 23.5T720-720v180l160-160v440L720-420v180q0 33-23.5 56.5T640-160H160Zm0-80h480v-480H160v480Zm0 0v-480 480Z" />
                </svg>
              </div>
              <h4 className="counter-title mb-2">{t('counters.videos.title')}</h4>
              <h3 className="counter-value display-4 fw-bold text-primary">
                {isVisible && <CountUp end={t('counters.videos.value')} />}
              </h3>
              <p className="counter-description">{t('counters.videos.description')}</p>
            </div>
          </div>
          
          {/* Educational Boards Counter */}
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="counter-card p-4 text-center h-100">
              <div className="counter-icon mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24" height="24" fill="#5965d4">
                  <path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80Zm-80 320q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-560v-160H240v640h480v-480H520Zm-280-160v160-160 640-640Z" />
                </svg>
              </div>
              <h4 className="counter-title mb-2">{t('counters.educationalBoards.title')}</h4>
              <h3 className="counter-value display-4 fw-bold text-primary">
                {isVisible && <CountUp end={t('counters.educationalBoards.value')} />}
              </h3>
              <p className="counter-description">{t('counters.educationalBoards.description')}</p>
            </div>
          </div>
          
          {/* Educational Books Counter */}
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="counter-card p-4 text-center h-100">
              <div className="counter-icon mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24" height="24" fill="#5965d4">
                  <path d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80H240Zm0-80h480v-640h-80v280l-100-60-100 60v-280H240v640Zm0 0v-640 640Zm200-360 100-60 100 60-100-60-100 60Z" />
                </svg>
              </div>
              <h4 className="counter-title mb-2">{t('counters.educationalBooks.title')}</h4>
              <h3 className="counter-value display-4 fw-bold text-primary">
                {isVisible && <CountUp end={t('counters.educationalBooks.value')} />}
              </h3>
              <p className="counter-description">{t('counters.educationalBooks.description')}</p>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .achievements-section {
          background-color: #f0f4ff;
          padding: 80px 0;
        }
        
        .counter-card {
          background-color: white;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          height: 100%;
        }
        
        .counter-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        
        .counter-icon {
          display: inline-block;
          background-color: #e8ecf6;
          padding: 15px;
          border-radius: 50%;
          margin-bottom: 15px;
        }
        
        .counter-value {
          color: #5965d4;
          font-size: 3rem;
          font-weight: 700;
          margin: 15px 0;
        }
        
        .counter-title {
          font-weight: 600;
          color: #333;
          font-size: 1.2rem;
        }
        
        .counter-description {
          color: #666;
          font-size: 0.9rem;
          line-height: 1.6;
          margin-top: 15px;
        }
        
        /* RTL support */
        [dir="rtl"] .counter-description {
          text-align: right;
        }
        
        @media (max-width: 768px) {
          .counter-value {
            font-size: 2.5rem;
          }
          
          .counter-title {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
} 