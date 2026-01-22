import React from 'react';
import LazyImage from './LazyImage';

interface ProjectDetailsMobileProps {
  images: string[];
  projectTitle: string;
  imageKey: number;
  openLightbox: (index: number) => void;
  galleryRef: React.RefObject<HTMLDivElement>;
  imageRefs: React.MutableRefObject<(HTMLButtonElement | null)[]>;
}

export default function ProjectDetails_Mobile({
  images,
  projectTitle,
  imageKey,
  openLightbox,
  galleryRef,
  imageRefs,
}: ProjectDetailsMobileProps) {
  return (
    <div
      ref={galleryRef}
      className="md:hidden flex gap-4 h-full py-6 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-hide"
    >
      {images.map((image, index) => (
        <button
          key={`mobile-${index}-${imageKey}`}
          ref={(el) => (imageRefs.current[index] = el)}
          onClick={() => openLightbox(index)}
          className="relative flex-shrink-0 w-[80vw] bg-neutral-100 overflow-hidden cursor-pointer group snap-center"
          style={{ height: 'calc(50vh - 3rem)' }}
          aria-label={`View image ${index + 1} in lightbox`}
        >
          <LazyImage
            src={image}
            alt={`${projectTitle} ${index + 1}`}
            className="w-full h-full object-contain transition-opacity group-hover:opacity-90"
            priority={index < 3}
            loading={index < 3 ? 'eager' : 'lazy'}
          />
        </button>
      ))}
    </div>
  );
}