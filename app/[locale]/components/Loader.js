"use client";
import React from 'react';

/**
 * Reusable Loader component with different variants
 * @param {Object} props - Component props
 * @param {string} props.type - Loader type: 'spinner', 'dots', 'pulse', or 'skeleton'
 * @param {string} props.size - Size of the loader: 'sm', 'md', 'lg'
 * @param {string} props.color - Color of the loader
 * @param {string} props.text - Optional text to display with the loader
 * @param {boolean} props.fullPage - Whether the loader should take the full page
 */
const Loader = ({ 
  type = 'spinner', 
  size = 'md', 
  color = 'primary', 
  text, 
  fullPage = false 
}) => {
  // Size classes
  const sizeClasses = {
    sm: 'spinner-border-sm',
    md: '',
    lg: 'spinner-border-lg'
  };
  
  // Color classes
  const colorClass = `text-${color}`;
  
  // Container classes for full page loader
  const containerClasses = fullPage 
    ? 'position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-white bg-opacity-75 z-index-1050' 
    : 'd-flex align-items-center justify-content-center py-4';

  // Render different loader types
  const renderLoader = () => {
    switch (type) {
      case 'dots':
        return (
          <div className="loader-dots">
            <div className={`dot dot1 bg-${color}`}></div>
            <div className={`dot dot2 bg-${color}`}></div>
            <div className={`dot dot3 bg-${color}`}></div>
            <style jsx>{`
              .loader-dots {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
              }
              .dot {
                width: ${size === 'sm' ? '8px' : size === 'lg' ? '16px' : '12px'};
                height: ${size === 'sm' ? '8px' : size === 'lg' ? '16px' : '12px'};
                border-radius: 50%;
                animation: dotPulse 1.5s infinite ease-in-out;
              }
              .dot2 { animation-delay: 0.2s; }
              .dot3 { animation-delay: 0.4s; }
              @keyframes dotPulse {
                0%, 100% { transform: scale(0.8); opacity: 0.6; }
                50% { transform: scale(1.2); opacity: 1; }
              }
            `}</style>
          </div>
        );
        
      case 'pulse':
        return (
          <div className={`loader-pulse bg-${color}`}>
            <style jsx>{`
              .loader-pulse {
                width: ${size === 'sm' ? '30px' : size === 'lg' ? '70px' : '50px'};
                height: ${size === 'sm' ? '30px' : size === 'lg' ? '70px' : '50px'};
                border-radius: 50%;
                animation: pulse 1.5s infinite ease-in-out;
              }
              @keyframes pulse {
                0% { transform: scale(0.8); opacity: 0.8; }
                50% { transform: scale(1); opacity: 0.2; }
                100% { transform: scale(0.8); opacity: 0.8; }
              }
            `}</style>
          </div>
        );
        
      case 'skeleton':
        return (
          <div className="skeleton-loader">
            <div className="skeleton-line"></div>
            <div className="skeleton-line"></div>
            <div className="skeleton-line"></div>
            <style jsx>{`
              .skeleton-loader {
                width: 100%;
                max-width: ${size === 'sm' ? '150px' : size === 'lg' ? '300px' : '200px'};
              }
              .skeleton-line {
                height: ${size === 'sm' ? '10px' : size === 'lg' ? '20px' : '15px'};
                margin-bottom: 8px;
                background: #f0f0f0;
                border-radius: 4px;
                animation: shimmer 1.5s infinite linear;
                background-image: linear-gradient(90deg, #f0f0f0 0%, #e0e0e0 50%, #f0f0f0 100%);
                background-size: 200% 100%;
              }
              @keyframes shimmer {
                0% { background-position: -200% 0; }
                100% { background-position: 200% 0; }
              }
            `}</style>
          </div>
        );
        
      case 'spinner':
      default:
        return (
          <div className={`spinner-border ${sizeClasses[size]} ${colorClass}`} role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        );
    }
  };

  return (
    <div className={containerClasses}>
      <div className="text-center">
        {renderLoader()}
        {text && <p className="mt-2">{text}</p>}
      </div>
    </div>
  );
};

export default Loader; 