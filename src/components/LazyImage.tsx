import { useState, useRef, useEffect } from 'react';
import React from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  placeholder?: string;
  blurDataURL?: string;
  priority?: boolean;
  batchLoad?: boolean;
  batchIndex?: number;
  sizes?: string;
  loading?: 'lazy' | 'eager';
}

export default function LazyImage({ 
  src, 
  alt, 
  className = '', 
  style,
  onClick,
  blurDataURL,
  priority = false,
  batchLoad = false,
  batchIndex = 0,
  sizes = '100vw',
  loading
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [shouldLoad, setShouldLoad] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const [showBlur, setShowBlur] = useState(!!blurDataURL);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Generate a simple blur placeholder if none provided
  const defaultBlurDataURL = `data:image/svg+xml;base64,${btoa('<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#f0f0f0"/></svg>')}`;

  // Batch loading logic: Load in groups of 6
  useEffect(() => {
    if (!batchLoad || priority) return;

    // Determine which batch this image belongs to
    const batchNumber = Math.floor(batchIndex / 6);
    
    // Create a global batch tracker if it doesn't exist
    if (typeof window !== 'undefined') {
      if (!window.__imageBatchTracker) {
        window.__imageBatchTracker = {
          currentBatch: 0,
          batchLoadedCount: {},
          totalInBatch: {}
        };
      }

      const tracker = window.__imageBatchTracker;

      // Initialize batch counters
      if (!tracker.totalInBatch[batchNumber]) {
        tracker.totalInBatch[batchNumber] = 0;
        tracker.batchLoadedCount[batchNumber] = 0;
      }
      tracker.totalInBatch[batchNumber]++;

      // If this image is in the current batch or earlier, load it
      if (batchNumber <= tracker.currentBatch) {
        setShouldLoad(true);
      }

      // Listen for batch completion events
      const handleBatchComplete = (e: CustomEvent) => {
        if (e.detail.batch === batchNumber - 1) {
          // Previous batch completed, load this batch
          setShouldLoad(true);
        }
      };

      window.addEventListener('batchComplete', handleBatchComplete as EventListener);

      return () => {
        window.removeEventListener('batchComplete', handleBatchComplete as EventListener);
      };
    }
  }, [batchLoad, batchIndex, priority]);

  // Intersection Observer (fallback for non-batch images)
  useEffect(() => {
    if (priority || batchLoad) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '100px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority, batchLoad]);

  const handleLoad = () => {
    setIsLoaded(true);
    // Delay blur removal for smooth transition
    setTimeout(() => setShowBlur(false), 100);

    // Batch loading: notify when image loads
    if (batchLoad && typeof window !== 'undefined' && window.__imageBatchTracker) {
      const tracker = window.__imageBatchTracker;
      const batchNumber = Math.floor(batchIndex / 6);
      
      tracker.batchLoadedCount[batchNumber]++;

      // If all images in this batch are loaded, trigger next batch
      if (tracker.batchLoadedCount[batchNumber] >= tracker.totalInBatch[batchNumber]) {
        tracker.currentBatch = batchNumber + 1;
        
        // Dispatch event to trigger next batch
        const event = new CustomEvent('batchComplete', { 
          detail: { batch: batchNumber } 
        });
        window.dispatchEvent(event);
      }
    }
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
    setShowBlur(false);
  };

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden ${className}`} 
      style={style} 
      onClick={onClick}
    >
      {/* Skeleton loading state */}
      {!shouldLoad && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
        </div>
      )}

      {/* Blur placeholder */}
      {shouldLoad && showBlur && !hasError && (
        <img
          src={blurDataURL || defaultBlurDataURL}
          alt=""
          className="absolute inset-0 w-full h-full object-cover filter blur-sm scale-110 transition-opacity duration-300"
          style={{ opacity: isLoaded ? 0 : 1 }}
          aria-hidden="true"
        />
      )}

      {/* Main image */}
      {shouldLoad && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          sizes={sizes}
          className={`w-full h-full object-cover transition-all duration-500 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
          onLoad={handleLoad}
          onError={handleError}
          loading="eager"
        />
      )}
      
      {/* Green pulsing circle for in-view images */}
      {shouldLoad && !isLoaded && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm">
          <div className="relative flex items-center justify-center w-16 h-16">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-lime-400/20 animate-ping" />
            </div>
            <span className="relative z-10 text-xs font-medium text-neutral-600">Loading...</span>
          </div>
        </div>
      )}
      
      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="text-center text-gray-400">
            <div className="text-2xl mb-2">📷</div>
            <div className="text-sm">Image unavailable</div>
          </div>
        </div>
      )}
    </div>
  );
}

// TypeScript declaration for global batch tracker
declare global {
  interface Window {
    __imageBatchTracker?: {
      currentBatch: number;
      batchLoadedCount: { [key: number]: number };
      totalInBatch: { [key: number]: number };
    };
  }
}