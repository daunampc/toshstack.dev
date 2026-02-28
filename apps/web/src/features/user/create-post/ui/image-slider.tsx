'use client';

import { useCallback, useEffect, useState } from 'react';
import NextImage from 'next/image';
import { MdClose, MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

interface ImageSliderProps {
  images: string[];
  onCurrentIndexChange?: (index: number) => void;
  onDelete?: (index: number) => void;
}

export function ImageSlider({ images, onCurrentIndexChange, onDelete }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Adjust currentIndex when images array changes
  useEffect(() => {
    if (images.length === 0) {
      setCurrentIndex(0);
      return;
    }

    // If current index is out of bounds, go to the last available image
    if (currentIndex >= images.length) {
      const newIndex = images.length - 1;
      setCurrentIndex(newIndex);
      onCurrentIndexChange?.(newIndex);
    }
  }, [images.length, currentIndex, onCurrentIndexChange]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => {
      const newIndex = prev === 0 ? images.length - 1 : prev - 1;
      onCurrentIndexChange?.(newIndex);
      return newIndex;
    });
  }, [images.length, onCurrentIndexChange]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => {
      const newIndex = prev === images.length - 1 ? 0 : prev + 1;
      onCurrentIndexChange?.(newIndex);
      return newIndex;
    });
  }, [images.length, onCurrentIndexChange]);

  const goToSlide = useCallback(
    (index: number) => {
      setCurrentIndex(index);
      onCurrentIndexChange?.(index);
    },
    [onCurrentIndexChange]
  );
  if (images.length === 0) return null;

  return (
    <div className="w-full relative">
      {/* Main image container */}
      <div className="relative w-full aspect-[16/9] overflow-hidden rounded-md bg-neutral-100">
        <NextImage
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={currentIndex === 0}
        />

        {/* Arrow buttons - only show when more than 1 image */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-black/70 text-white hover:bg-black/90 transition-colors"
              aria-label="Previous image"
            >
              <MdKeyboardArrowLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-black/70 text-white hover:bg-black/90 transition-colors"
              aria-label="Next image"
            >
              <MdKeyboardArrowRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Image counter */}
        {images.length > 1 && (
          <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-black/60 text-white text-xs">
            {currentIndex + 1} / {images.length}
          </div>
        )}

        {/* Delete button */}
        {onDelete && (
          <button
            type="button"
            onClick={() => onDelete(currentIndex)}
            className="absolute top-2 left-2 w-7 h-7 flex items-center justify-center rounded-full bg-black/70 text-white hover:bg-red-600 transition-colors"
            aria-label="Delete image"
          >
            <MdClose className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="flex items-center justify-center gap-1.5 mt-2">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-neutral-800' : 'bg-neutral-300 hover:bg-neutral-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
