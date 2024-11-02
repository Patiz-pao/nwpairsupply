// Slideshow.tsx
import React, { useState, useEffect } from "react";
import images, { ImageKey } from "../pages/images";

import Image from 'next/image';

const Slideshow = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % Object.keys(images).length);
      }, 1000);
  
      return () => clearInterval(intervalId);
    }, []);
  
    const currentImageKey: ImageKey = `Image${currentIndex + 1}` as ImageKey;

    return (
        <div>
        <Image 
          src={images[currentImageKey]} 
          alt={`Slide ${currentIndex + 1}`} 
          width={300}
          height={450}
          style={{ objectFit: 'cover' }}
        />
      </div>
    );
  };
  
  export default Slideshow;
