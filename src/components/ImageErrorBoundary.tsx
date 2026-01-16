import React, { useState } from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  loading?: 'eager' | 'lazy';
  fallbackSrc?: string;
}

export function ImageWithFallback({
  src,
  alt,
  className = '',
  style,
  onClick,
  loading = 'lazy',
  fallbackSrc,
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  const handleError = () => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    } else {
      setError(true);
    }
  };

  if (error) {
    return (
      <div 
        className={`${className} bg-neutral-100 flex items-center justify-center`}
        style={style}
      >
        <div className="text-center text-neutral-400 p-8">
          <svg 
            className="w-16 h-16 mx-auto mb-3" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
            />
          </svg>
          <p className="text-sm">Image unavailable</p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      style={style}
      onClick={onClick}
      loading={loading}
      onError={handleError}
    />
  );
}

// Empty state component for no images
export function NoImagesPlaceholder({ projectTitle }: { projectTitle: string }) {
  return (
    <div className="w-full h-[50vh] md:h-full bg-neutral-50 flex items-center justify-center">
      <div className="text-center text-neutral-400 p-8">
        <svg 
          className="w-24 h-24 mx-auto mb-4" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={1} 
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
          />
        </svg>
        <h3 className="text-lg font-light mb-2">No Images Available</h3>
        <p className="text-sm">Images for {projectTitle} are currently unavailable</p>
      </div>
    </div>
  );
}

// Loading skeleton component
export function ImageLoadingSkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`${className} bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-100 animate-pulse`}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
    </div>
  );
}