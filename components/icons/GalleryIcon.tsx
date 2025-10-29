import React from 'react';

export const GalleryIcon: React.FC = () => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect 
      x="3" 
      y="3" 
      width="18" 
      height="18" 
      rx="2" 
      stroke="currentColor" 
      strokeWidth="2" 
      fill="none"
    />
    <circle 
      cx="8.5" 
      cy="8.5" 
      r="1.5" 
      fill="currentColor"
    />
    <path 
      d="M21 15L16 10L5 21" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);