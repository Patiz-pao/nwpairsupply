import React from "react";
import { ImageKey, images} from "../../public/images";
import { useSlideImage } from "../hooks/useSlideImage.hook";

import Image from 'next/image';

const Slideshow = () => {
    const { currentIndex } = useSlideImage({ length: Object.keys(images).length, interval: 1000 });
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
