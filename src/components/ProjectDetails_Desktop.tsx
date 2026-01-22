import React from 'react';
import LazyImage from './LazyImage';

interface ProjectDetailsDesktopProps {
  images: string[];
  projectTitle: string;
  imageKey: number;
  openLightbox: (index: number) => void;
  galleryRef: React.RefObject<HTMLDivElement>;
  imageRefs: React.MutableRefObject<(HTMLButtonElement | null)[]>;
}

export default function ProjectDetails_Desktop({
  images,
  projectTitle,
  imageKey,
  openLightbox,
  galleryRef,
  imageRefs,
}: ProjectDetailsDesktopProps) {
  return (
    <div
      ref={galleryRef}
      className="hidden md:block space-y-6 pb-6 overflow-y-auto overflow-x-hidden scrollbar-hide"
      style={{ height: 'calc(100vh - 4rem)' }}
    >
      {images.map((image, index) => (
        <button
          key={`desktop-${index}-${imageKey}`}
          ref={(el) => (imageRefs.current[index] = el)}
          onClick={() => openLightbox(index)}
          className="relative w-full bg-neutral-100 overflow-hidden cursor-pointer group block"
          aria-label={`View image ${index + 1} in lightbox`}
        >
          <LazyImage
            src={image}
            alt={`${projectTitle} ${index + 1}`}
            className="w-full h-auto object-cover transition-opacity group-hover:opacity-90"
            priority={index < 3}
            loading={index < 3 ? 'eager' : 'lazy'}
          />
        </button>
      ))}
    </div>
  );
}