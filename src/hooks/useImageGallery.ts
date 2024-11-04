import { useState } from "react";

export const useImageGallery = (
  images: { src: string }[],
  showAll: boolean,
  onToggle: (value: boolean) => void
) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const initialImages = images.slice(0, 4);
  const remainingImages = images.slice(4);

  const handleToggleView = () => {
    setIsAnimating(true);
    onToggle(!showAll);
  };

  return {
    selectedImage,
    isAnimating,
    initialImages,
    remainingImages,
    handleToggleView,
    setSelectedImage,
    setIsAnimating,
  };
};
