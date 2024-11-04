import React from "react";
import { products } from "../../public/images";
import { useSlideProduct } from "../hooks/useSlideProduct.hook";

const SlideProduct = () => {
  const productImages = [
    products.Image6,
    products.Image7,
    products.Image8,
    products.Image9,
    products.Image10,
    products.Image11,
    products.Image12,
    products.Image13,
  ];

  const productDescriptions = [
    "กล้องหัวฉีด",
    "สายหัวฉีด",
    "สายก๊าซโอโซน",
    "ถาดรองในรถ",
    "ถาดรองใต้รถ",
    "สายไฟเครื่อง",
    "ป้ายไวนิล ขนาด 1 x 3 เมตร",
    "โบรชัวร์ ขนาด A5",
  ];

  const { currentIndex, nextSlide, prevSlide } = useSlideProduct({
    images: productImages,
    interval: 3000,
  });

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {productImages.map((product, index) => (
          <div key={index} className="relative flex-shrink-0 w-full">
            <img
              src={product.src}
              alt={`Slide ${index + 1}`}
              className="block w-full"
            />
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center text-black bg-black bg-opacity-10 rounded-lg ">
              <p className="text-lg">{productDescriptions[index]}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        onClick={prevSlide}
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Previous
        </span>
      </button>

      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        onClick={nextSlide}
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Next
        </span>
      </button>
    </div>
  );
};

export default SlideProduct;
