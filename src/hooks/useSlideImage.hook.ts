import { useState, useEffect } from "react";

interface UseSlideImage {
  length: number;
  interval?: number;
}

export const useSlideImage = ({ length, interval = 1000 }: UseSlideImage) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [interval, length]);

  return { currentIndex };
};
