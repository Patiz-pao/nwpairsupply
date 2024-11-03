import React from "react";
import { Slideshow, SlideProduct } from "@/components";
import {
  imagesProductDetail_1,
  imagesProductDetail_2,
  imagesProduct_2,
} from "../../public/images";

const Product = () => {
  return (
    <div>
      <div className="p-5 sm:p-10 rounded-lg mx-5">
        <div className="text-[20px] sm:text-3xl font-bold text-center">
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
            className="text-[20px] sm:text-3xl font-bold text-red-500 mt-5 mb-5"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            &lt;&lt; แถมฟรี!!! อุปกรณ์มาตรฐาน 8 รายการ &gt;&gt;
          </h1>
          <SlideProduct />
        </div>
        <div className="mt-5 sm:mt-10">
          <h1 className="text-xl sm:text-2xl font-bold">
            เครื่องล้างตู้แอร์รถยนต์ NWP และกล้องหัวฉีดน้ำยา
          </h1>
          <div className="space-y-3 mt-3 text-[16px]">
            <p>✅ รูปทรงทันสมัย ขนาดกระทัดรัด แข็งแรง สวยงาม</p>
            <p>✅ ระบบนิวเมติก ปลอดภัยต่อการใช้งาน ทนทาน อายุการใช้งานยาวนาน</p>
            <p>
              ✅ 3 ขั้นตอนการล้าง ภายใน 15 นาที (ฉีดน้ำยา/ฉีดน้ำสะอาด/อบโอโซน)
            </p>
            <p>
              ✅ มีไฟ LED (แดง/น้ำเงิน/เขียว) แสดงสถานะการทำงาน ในแต่ละขั้นตอน
            </p>
            <p>
              ✅ มีระบบ ฆ่าเชื้อโรคและกำจัดกลิ่น ด้วยก๊าซโอโซน
              (ไม่ต้องเติมน้ำยาโอโซน)
            </p>
            <p>
              ✅ กล้องหัวฉีดน้ำยาแบบกระจาย มีให้ 2 หัวฉีด
              หัวฉีดกระจายตรงและหัวฉีดกระจายข้าง เลนส์กล้องไมโคร HD พร้อมไฟ LED
              6 ดวง และหน้าจอ LCD ขนาด 4.3 นิ้ว
            </p>
            <p>✅ ล้อ PU 4 ชุด แข็งแรง ทนทานต่อการสึกกร่อน พร้อมระบบล็อคล้อ</p>
            <p>
              ✅ ขนาดเครื่อง กว้าง 35 cm X ลึก 50 cm X สูง 76 cm น้ำหนัก 28 Kg.
            </p>
          </div>
          <button
            type="button"
            onClick={() =>
              window.open(
                "https://www.facebook.com/profile.php?id=100092277436950",
                "_blank"
              )
            }
            className="lg:block text-white text-xl bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mt-5 w-[150px]"
          >
            สั่งซื้อ Click!
          </button>
        </div>
      </div>
      <div className="border-t border-black mb-5 mt-3 w-[90%] mx-auto"></div>
      <div className="p-0 sm:p-10 rounded-lg mx-5">
        <div className="text-[20px] sm:text-3xl font-bold text-center">
          <h1>น้ำยาล้างตู้แอร์รถยนต์ NWP สูตรโฟมพรีเมียม</h1>
          <div className="flex justify-center items-center">
            <img
              src={imagesProduct_2.src}
              alt=""
              className="w-full max-w-[400px] sm:max-w-[1200px] h-auto mt-5 rounded-lg"
            />
          </div>
        </div>
        <div className="mt-5 sm:mt-10">
          <h1 className="text-[18px] sm:text-2xl font-bold">
            น้ำยาล้างตู้แอร์รถยนต์ NWP สูตรโฟมพรีเมียม
          </h1>
          <div className="space-y-3 mt-3 text-[16px]">
            <p>
              ✅ Coils Safety :
              ไม่มีส่วนผสมของโซดาไฟหรือสารเคมีที่เป็นอันตรายต่อคอยล์แอร์และตู้แอร์
              ไม่กัดกร่อนคอยล์แอร์หรือตู้แอร์แม้ตกค้างจากการล้างแอร์
            </p>
            <p>
              ✅ Highly Cleaning Efficient : มีคุณสมบัติในการย่อยสลาย
              คราบน้ำมันเหนียว ฝุ่นหนา เมือก ตะกอน ตะกรัน
              และคราบสกปรกที่จับฝังแน่นตามครีบคอยล์แอร์
            </p>
            <p>
              ✅ USA Certified : ได้รับการรับรองจากสถาบันสิ่งแวดล้อมต่างๆ
              ในประเทศสหรัฐอเมริกา เช่น NSF , GREEN SEAL , U.S.EPA , CSPA
              และอื่นๆ ว่าเป็นมิตรต่อสิ่งแวดล้อม
            </p>
            <p>✅ ขนาดขวด บรรจุ 250 ML</p>
            <p>✅ ขนาดลัง บรรจุ 1 x 24 ขวด</p>
          </div>
          <button
            type="button"
            onClick={() =>
              window.open(
                "https://www.facebook.com/profile.php?id=100092277436950",
                "_blank"
              )
            }
            className="lg:block text-white text-xl bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mt-5 w-[150px]"
          >
            สั่งซื้อ Click!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
