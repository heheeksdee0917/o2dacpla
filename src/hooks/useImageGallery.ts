import { useState, useEffect, useRef, useCallback } from 'react';

interface UseImageGalleryOptions {
  imageCount: number;
  enabled?: boolean;
}

interface UseImageGalleryReturn {
  activeImageIndex: number;
  setActiveImageIndex: (index: number) => void;
  mobileGalleryRef: React.RefObject<HTMLDivElement>;
  desktopGalleryRef: React.RefObject<HTMLDivElement>;
  imageRefs: React.MutableRefObject<(HTMLButtonElement | null)[]>;
  resetGallery: () => void;
}

export function useImageGallery({
  imageCount,
  enabled = true,
}: UseImageGalleryOptions): UseImageGalleryReturn {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const mobileGalleryRef = useRef<HTMLDivElement>(null);
  const desktopGalleryRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Debounced scroll handler
  const handleScroll = useCallback(() => {
    if (!enabled) return;

    const mobileGallery = mobileGalleryRef.current;
    const desktopGallery = desktopGalleryRef.current;

    if (window.innerWidth < 768 && mobileGallery) {
      // Mobile: horizontal scroll
      const scrollLeft = mobileGallery.scrollLeft;
      const itemWidth = mobileGallery.scrollWidth / imageCount;
      const index = Math.round(scrollLeft / itemWidth);
      setActiveImageIndex(Math.min(index, imageCount - 1));
    } else if (desktopGallery) {
      // Desktop: vertical scroll - check which image is most visible
      imageRefs.current.forEach((imgRef, index) => {
        if (imgRef) {
          const rect = imgRef.getBoundingClientRect();
          const galleryRect = desktopGallery.getBoundingClientRect();
          const visibleHeight = Math.min(rect.bottom, galleryRect.bottom) - Math.max(rect.top, galleryRect.top);
          const imgHeight = rect.height;
          
          if (visibleHeight / imgHeight > 0.5) {
            setActiveImageIndex(index);
          }
        }
      });
    }
  }, [enabled, imageCount]);

  // Debounce scroll events
  useEffect(() => {
    if (!enabled) return;

    let timeoutId: NodeJS.Timeout;
    const debouncedScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 50); // 50ms debounce
    };

    const mobileGallery = mobileGalleryRef.current;
    const desktopGallery = desktopGalleryRef.current;

    if (mobileGallery) {
      mobileGallery.addEventListener('scroll', debouncedScroll, { passive: true });
    }
    if (desktopGallery) {
      desktopGallery.addEventListener('scroll', debouncedScroll, { passive: true });
    }

    return () => {
      clearTimeout(timeoutId);
      if (mobileGallery) {
        mobileGallery.removeEventListener('scroll', debouncedScroll);
      }
      if (desktopGallery) {
        desktopGallery.removeEventListener('scroll', debouncedScroll);
      }
    };
  }, [enabled, handleScroll]);

  // Reset gallery position
  const resetGallery = useCallback(() => {
    setActiveImageIndex(0);
    requestAnimationFrame(() => {
      if (mobileGalleryRef.current) {
        mobileGalleryRef.current.scrollLeft = 0;
      }
      if (desktopGalleryRef.current) {
        desktopGalleryRef.current.scrollTop = 0;
      }
    });
  }, []);

  // Cleanup refs on unmount
  useEffect(() => {
    return () => {
      imageRefs.current = [];
    };
  }, []);

  return {
    activeImageIndex,
    setActiveImageIndex,
    mobileGalleryRef,
    desktopGalleryRef,
    imageRefs,
    resetGallery,
  };
}