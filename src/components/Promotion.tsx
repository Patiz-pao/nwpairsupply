import React from "react";
import { promotion } from "../../public/images";

const Promotion = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <img
        src={promotion.src}
        alt="Promotion"
        className="w-4/5 mx-10 lg:w-2/5 mt-5 lg:mt-0"
      />
      <div className="flex flex-col">
        <h1 className="text-xl sm:text-3xl font-bold">
          เครื่องล้างตู้แอร์รถยนต์ NWP
        </h1>
        <div className="text-[16px] sm:text-lg mt-3 space-y-3">
          <p>✅ ระบบนิวเมติก ใช้งานได้ยาวนาน</p>
          <p>✅ 3 ขั้นตอน ภายใน 15 นาที</p>
          <p>✅ หัวฉีดแบบกระจายข้าง</p>
          <p>✅ กล้องไมโคร HD-6 LED</p>
          <p>✅ จอ HD-LCD 4.3 นิ้ว</p>
          <p>✅ ล้อ PU 4 ชุด พร้อมระบบล็อคล้อ</p>
        </div>
        <div className="text-[16px] sm:text-4xl mt-3 space-y-1">
          <h1 className="text-3xl sm:text-4xl text-black">
            ราคา <span className="text-3lx sm:text-5xl text-red-500 font-bold">29,000.-</span> บาท
          </h1>
          <p className="text-lg text-black">(จากปกติ 35,000.- บาท)</p>
        </div>

        <button
          type="button"
          onClick={() =>
            window.open(
              "https://www.facebook.com/profile.php?id=100092277436950",
              "_blank"
            )
          }
          className="hidden lg:block text-white text-xl bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mt-3 w-[150px]"
        >
          สั่งซื้อ Click!
        </button>
      </div>
      <button
        type="button"
        onClick={() =>
          window.open(
            "https://www.facebook.com/profile.php?id=100092277436950",
            "_blank"
          )
        }
        className="block lg:hidden justify-center items-center text-white text-xl bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mt-3"
      >
        สั่งซื้อ Click!
      </button>
    </div>
  );
};

export default Promotion;
