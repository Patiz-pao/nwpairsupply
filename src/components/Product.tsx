import React from "react";
import { Slideshow, SlideProduct } from "@/components";
import { imagesProductDetail_1, imagesProductDetail_2 } from "../pages/images";

const Product = () => {
  return (
    <div className="text-3xl font-bold text-center">
      <h1>เครื่องล้างตู้แอร์รถยนต์ NWP และกล้องหัวฉีดน้ำยา</h1>
      <div className="flex justify-center items-center">
        <Slideshow />
      </div>
      <div className="flex justify-center gap-5">
        <img
          src={imagesProductDetail_1.src}
          alt=""
          className="w-full max-w-[120px] sm:max-w-[300px] h-auto"
        />
        <img
          src={imagesProductDetail_2.src}
          alt=""
          className="w-full max-w-[120px] sm:max-w-[300px] h-auto"
        />
      </div>
      <h1
        className="text-[20px] sm:text-3xl font-bold text-red-500 mt-5"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
      >
        &lt;&lt; แถมฟรี!!! อุปกรณ์มาตรฐาน 8 รายการ &gt;&gt;
      </h1>
      <div className="border-t border-black mb-5 mt-3"></div>
      <div>
        <SlideProduct />
      </div>
    </div>
  );
};

export default Product;
