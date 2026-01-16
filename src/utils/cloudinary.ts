// src/utils/cloudinary.ts

/**
 * Cloudinary Configuration for O2DA+CPLA Project
 * Cloud Name: dx357gxsq
 */

const CLOUDINARY_CLOUD_NAME = 'dx357gxsq';
const CLOUDINARY_BASE_URL = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}`;

/**
 * Get Cloudinary URL for images
 * @param publicId - The public ID from Cloudinary (e.g., 'IntrovertedHouseCover_tcy2qb')
 * @param transformations - Optional transformation string (e.g., 'w_1200,h_800,c_fill')
 * @returns Full Cloudinary URL
 */
export const getCloudinaryImageUrl = (
  publicId: string,
  transformations?: string
): string => {
  const baseUrl = `${CLOUDINARY_BASE_URL}/image/upload`;
  
  if (transformations) {
    return `${baseUrl}/${transformations}/${publicId}`;
  }
  return `${baseUrl}/${publicId}`;
};

/**
 * Get Cloudinary URL for videos
 * @param publicId - The public ID from Cloudinary (e.g., 'IntrovertedHouseCover_tcy2qb')
 * @param transformations - Optional transformation string
 * @returns Full Cloudinary video URL
 */
export const getCloudinaryVideoUrl = (
  publicId: string,
  transformations?: string
): string => {
  const baseUrl = `${CLOUDINARY_BASE_URL}/video/upload`;
  
  if (transformations) {
    return `${baseUrl}/${transformations}/${publicId}.mp4`;
  }
  return `${baseUrl}/${publicId}.mp4`;
};

/**
 * Predefined image transformations for common use cases
 * Note: f_auto enables automatic format selection (AVIF, WebP, etc.) based on browser support
 * AVIF images will be served as-is or converted to optimal format automatically
 */
export const imageTransforms = {
  // Thumbnails - small preview images
  thumbnail: 'w_200,h_200,c_fill,q_auto,f_auto', // Keep fill for thumbnails only
  
  // Low quality placeholder for progressive loading
  lowQuality: 'w_50,h_50,c_fill,q_10,e_blur:300,f_auto',
  
  // Hero images - CHANGED to c_limit
  hero: 'w_1920,c_limit,q_auto:good,f_auto',
  
  // Gallery images - CHANGED to c_limit, removed h_800
  gallery: 'w_1200,c_limit,q_auto,f_auto',
  
  // Portfolio preview images - CHANGED to c_limit
  portfolioPreview: 'w_800,c_limit,q_auto,f_auto',
  
  // Full screen lightbox images - CHANGED to higher resolution
  lightbox: 'w_2400,c_limit,q_auto:good,f_auto',
  
  // Mobile optimized
  mobile: 'w_800,c_limit,q_auto,f_auto',
  
  // Tablet optimized  
  tablet: 'w_1200,c_limit,q_auto,f_auto',
  
  // Desktop optimized
  desktop: 'w_1920,c_limit,q_auto,f_auto',
  
  // Original AVIF - no format conversion, only resize
  avifOriginal: 'c_limit,q_auto:good,f_avif',
  
  // Force AVIF format with quality optimization
  avifOptimized: 'c_limit,q_auto,f_avif', // CHANGED from c_fill
};

/**
 * Predefined video transformations
 */
export const videoTransforms = {
  // Hero video - optimized quality
  hero: 'w_1920,h_1080,c_fill,q_auto:good',
  
  // Background video - compressed
  background: 'w_1280,h_720,c_fill,q_auto:low',
  
  // Mobile video - highly compressed
  mobile: 'w_800,c_limit,q_auto:low',
};

/**
 * Get optimized image URL with predefined transformation
 * @param publicId - The public ID (e.g., 'projects/villa-1')
 * @param quality - Predefined quality preset
 * @returns Optimized Cloudinary URL
 */
export const getOptimizedImage = (
  publicId: string,
  quality: keyof typeof imageTransforms = 'gallery'
): string => {
  return getCloudinaryImageUrl(publicId, imageTransforms[quality]);
};

/**
 * Get optimized video URL with predefined transformation
 * @param publicId - The public ID (e.g., 'IntrovertedHouseCover_tcy2qb')
 * @param quality - Predefined quality preset
 * @returns Optimized Cloudinary video URL
 */
export const getOptimizedVideo = (
  publicId: string,
  quality: keyof typeof videoTransforms = 'hero'
): string => {
  return getCloudinaryVideoUrl(publicId, videoTransforms[quality]);
};

/**
 * Get responsive image URLs for different screen sizes
 * @param publicId - The public ID
 * @returns Object with mobile, tablet, and desktop URLs
 */
export const getResponsiveImages = (publicId: string) => ({
  mobile: getCloudinaryImageUrl(publicId, imageTransforms.mobile),
  tablet: getCloudinaryImageUrl(publicId, imageTransforms.tablet),
  desktop: getCloudinaryImageUrl(publicId, imageTransforms.desktop),
});

/**
 * Get image with custom dimensions
 * @param publicId - The public ID
 * @param width - Target width
 * @param height - Target height (optional)
 * @param options - Additional options
 * @returns Cloudinary URL with custom dimensions
 */
export const getCustomImage = (
  publicId: string,
  width: number,
  height?: number,
  options: {
    crop?: 'fill' | 'fit' | 'limit' | 'scale' | 'crop';
    quality?: 'auto' | 'auto:low' | 'auto:good' | 'auto:best';
    format?: 'auto' | 'avif' | 'webp' | 'jpg' | 'png';
  } = {}
): string => {
  const {
    crop = 'fill',
    quality = 'auto',
    format = 'auto', // 'auto' lets Cloudinary choose best format, including AVIF
  } = options;

  let transform = `w_${width}`;
  if (height) {
    transform += `,h_${height}`;
  }
  transform += `,c_${crop},q_${quality},f_${format}`;

  return getCloudinaryImageUrl(publicId, transform);
};

/**
 * Extract public ID from full Cloudinary URL
 * @param url - Full Cloudinary URL
 * @returns Public ID only
 */
export const extractPublicId = (url: string): string => {
  // Extract public ID from URL like:
  // https://res.cloudinary.com/dx357gxsq/video/upload/v1763105892/IntrovertedHouseCover_tcy2qb.mp4
  const match = url.match(/\/upload\/(?:v\d+\/)?(.+?)(?:\.\w+)?$/);
  return match ? match[1] : url;
};

/**
 * Check if URL is a video
 * @param url - URL or public ID to check
 * @returns Boolean indicating if it's a video
 */
export const isVideo = (url: string): boolean => {
  return url.includes('/video/upload') || 
         url.endsWith('.mp4') || 
         url.endsWith('.mov') || 
         url.endsWith('.webm');
};

/**
 * Check if URL is an AVIF image
 * @param url - URL or public ID to check
 * @returns Boolean indicating if it's AVIF
 */
export const isAvif = (url: string): boolean => {
  return url.endsWith('.avif') || url.includes('.avif');
};

/**
 * Get AVIF-specific optimized URL
 * Use this when you want to ensure AVIF format is preserved
 * @param publicId - The public ID (without .avif extension)
 * @param width - Target width
 * @param quality - Quality level
 * @returns Cloudinary URL optimized for AVIF
 */
export const getAvifImage = (
  publicId: string,
  width: number = 1200,
  quality: 'auto' | 'auto:low' | 'auto:good' | 'auto:best' = 'auto:good'
): string => {
  // Strip .avif extension if present
  const cleanId = publicId.replace(/\.avif$/, '');
  const transform = `w_${width},c_limit,q_${quality},f_avif`;
  return getCloudinaryImageUrl(cleanId, transform);
};

/**
 * Get media URL (auto-detects image or video)
 * @param publicId - The public ID
 * @param quality - Quality preset
 * @returns Appropriate Cloudinary URL
 */
export const getMediaUrl = (
  publicId: string,
  quality: 'hero' | 'gallery' | 'thumbnail' = 'gallery'
): string => {
  if (isVideo(publicId)) {
    const videoQuality = quality === 'thumbnail' ? 'mobile' : quality;
    return getOptimizedVideo(publicId, videoQuality as keyof typeof videoTransforms);
  }
  return getOptimizedImage(publicId, quality);
};

/**
 * Generate multiple image URLs from a folder path
 * Useful when you have images numbered or named consistently
 * @param folderPath - Folder path in Cloudinary (e.g., 'projects/introverted-house')
 * @param imageNames - Array of image filenames (without extension)
 * @param quality - Quality preset
 * @returns Array of optimized image URLs
 */
export const getImagesFromFolder = (
  folderPath: string,
  imageNames: string[],
  quality: keyof typeof imageTransforms = 'gallery'
): string[] => {
  return imageNames.map(name => {
    const publicId = `${folderPath}/${name}`;
    return getOptimizedImage(publicId, quality);
  });
};

/**
 * Generate sequential image URLs (e.g., image-1, image-2, image-3)
 * Perfect for numbered images in a folder
 * @param folderPath - Folder path in Cloudinary
 * @param count - Number of images
 * @param prefix - Prefix for image names (default: 'image')
 * @param startIndex - Starting index (default: 1)
 * @param quality - Quality preset
 * @returns Array of optimized image URLs
 */
export const getSequentialImages = (
  folderPath: string,
  count: number,
  prefix: string = 'image',
  startIndex: number = 1,
  quality: keyof typeof imageTransforms = 'gallery'
): string[] => {
  return Array.from({ length: count }, (_, i) => {
    const index = startIndex + i;
    const publicId = `${folderPath}/${prefix}-${index}`;
    return getOptimizedImage(publicId, quality);
  });
};

/**
 * Generate image URLs from array of numbers
 * Useful when images are named like: 1.avif, 2.avif, 3.avif
 * @param folderPath - Folder path in Cloudinary
 * @param numbers - Array of image numbers
 * @param quality - Quality preset
 * @returns Array of optimized image URLs
 */
export const getNumberedImages = (
  folderPath: string,
  numbers: number[],
  quality: keyof typeof imageTransforms = 'gallery'
): string[] => {
  return numbers.map(num => {
    const publicId = `${folderPath}/${num}`;
    return getOptimizedImage(publicId, quality);
  });
};

/**
 * O2DA+CPLA Project Structure Helper
 * 
 * Expected folder structure in Cloudinary:
 * [Category]/
 *   └── [ProjectName]/
 *       ├── ProjectNameCoverPhoto.avif (thumbnail)
 *       ├── 1.avif
 *       ├── 2.avif
 *       ├── 3.avif
 *       └── ...
 * 
 * Categories: Commercial, Competition, Housing, Residential, Interior
 */

export type ProjectCategory = 'Commercial' | 'Competition' | 'Housing' | 'Residential' | 'Interiors';

/**
 * Get project cover photo URL
 * @param category - Project category folder
 * @param projectName - Project folder name (e.g., 'IntrovertedHouse')
 * @param quality - Quality preset
 * @returns Optimized cover photo URL
 */
export const getProjectCover = (
  category: ProjectCategory,
  projectName: string,
  quality: keyof typeof imageTransforms = 'portfolioPreview'
): string => {
  const publicId = `${category}/${projectName}/${projectName}CoverPhoto`;
  return getOptimizedImage(publicId, quality);
};

/**
 * Get all project images (numbered 1, 2, 3...)
 * Does NOT include the cover photo
 * @param category - Project category folder
 * @param projectName - Project folder name
 * @param imageCount - Total number of images (excluding cover)
 * @param quality - Quality preset
 * @returns Array of optimized image URLs
 */
export const getProjectGallery = (
  category: ProjectCategory,
  projectName: string,
  imageCount: number,
  quality: keyof typeof imageTransforms = 'gallery'
): string[] => {
  return Array.from({ length: imageCount }, (_, i) => {
    const imageNumber = i + 1;
    const publicId = `${category}/${projectName}/${imageNumber}`;
    return getOptimizedImage(publicId, quality);
  });
};

/**
 * Get complete project images (cover + all gallery images)
 * Cover photo will be first in the array
 * @param category - Project category folder
 * @param projectName - Project folder name
 * @param imageCount - Total number of gallery images (excluding cover)
 * @param quality - Quality preset
 * @returns Array with cover photo first, then gallery images
 */
export const getCompleteProjectImages = (
  category: ProjectCategory,
  projectName: string,
  imageCount: number,
  quality: keyof typeof imageTransforms = 'gallery'
): string[] => {
  const cover = getProjectCover(category, projectName, quality);
  const gallery = getProjectGallery(category, projectName, imageCount, quality);
  return [cover, ...gallery];
};

/**
 * Get project data with all images
 * One-liner to get everything you need
 * @param category - Project category folder
 * @param projectName - Project folder name
 * @param imageCount - Total number of gallery images (excluding cover)
 * @returns Object with cover and images array
 */
export const getProjectImageData = (
  category: ProjectCategory,
  projectName: string,
  imageCount: number
): {
  cover: string;
  thumbnail: string;
  images: string[];
  allImages: string[]; // cover + images
} => {
  const cover = getProjectCover(category, projectName, 'portfolioPreview');
  const thumbnail = getProjectCover(category, projectName, 'thumbnail');
  const images = getProjectGallery(category, projectName, imageCount, 'gallery');
  
  return {
    cover,
    thumbnail,
    images,
    allImages: [cover, ...images],
  };
};

// Export cloud name for direct use if needed
export const CLOUD_NAME = CLOUDINARY_CLOUD_NAME;
export const BASE_URL = CLOUDINARY_BASE_URL;