import React from "react";
import { X } from "lucide-react";
import { gallery } from "../../public/images";
import { useImageGallery } from "@/hooks/useImageGallery";

interface ImageGalleryProps {
  showAll: boolean;
  onToggle: (value: boolean) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ showAll, onToggle }) => {
  type ImportedImage = {
    src: string;
  };

  const images = Object.values(gallery).map(
    (img) => img as unknown as ImportedImage
  );

  const {
    selectedImage,
    isAnimating,
    initialImages,
    remainingImages,
    handleToggleView,
    setSelectedImage,
    setIsAnimating,
  } = useImageGallery(images, showAll, onToggle);

  return (
    <div className="container mx-auto overflow-hidden">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {initialImages.map((image, index) => (
          <div
            key={index}
            className="relative aspect-square cursor-pointer overflow-hidden rounded-lg"
            onClick={() => setSelectedImage(image.src)}
          >
            <img
              src={image.src}
              alt={`Gallery image ${index + 1}`}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>
      <div
        className={`grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-500 ease-in-out ${
          showAll
            ? "h-auto opacity-100 transform translate-y-0 mt-4"
            : "h-0 opacity-0 transform translate-y-20"
        }`}
        onTransitionEnd={() => setIsAnimating(false)}
      >
        {remainingImages.map((image, index) => (
          <div
            key={index + 4}
            className="relative aspect-square cursor-pointer overflow-hidden rounded-lg"
            onClick={() => setSelectedImage(image.src)}
          >
            <img
              src={image.src}
              alt={`Gallery image ${index + 5}`}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>

      <div className="mt-5 text-center">
        <button
          onClick={handleToggleView}
          disabled={isAnimating}
          className={`text-white text-[16px] font-medium rounded-full px-5 p-1 text-center me-2 mb-2 w-[100%] transition-all duration-300 ${
            showAll
              ? "bg-green-700 hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              : "bg-green-700 hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          } focus:outline-none focus:ring-4`}
        >
          {showAll ? "Close" : "View All"}
        </button>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
          <div className="relative max-h-[90vh] max-w-[90vw]">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -right-4 -top-4 rounded-full bg-white p-2 shadow-lg"
            >
              <X className="h-6 w-6" />
            </button>
            <img
              src={selectedImage}
              alt="Selected image"
              className="max-h-[85vh] w-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
