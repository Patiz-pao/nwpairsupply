import { useState, useEffect } from "react";

interface UseSlideProductProps {
  images: string[];
  interval?: number;
}

export const useSlideProduct = ({ images, interval = 3000 }: UseSlideProductProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [images.length, interval]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return {
    currentIndex,
    nextSlide,
    prevSlide,
  };
};
