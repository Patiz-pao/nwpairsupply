import React from "react";
import { homepage, homesectiondescription } from "../../images";
import { Layout, AboutContent, ProductPage } from "@/components";

const Home = () => {
  return (
    <div>
      <img src={homepage.src} className="mb-0" alt="" />
      <Layout>
        <div
          style={{ backgroundColor: "rgba(250, 250, 250, 0.85)" }}
          className="rounded-lg shadow-lg"
        >
          <div className="p-10 flex flex-col lg:flex-row">
            <div className="flex flex-col">
              <h1 className="text-xl sm:text-3xl font-bold">
                ระบบล้างตู้แอร์รถยนต์ NWP
                เทคโนโลยีล้างแอร์รถยนต์แบบส่องกล้องที่ทันสมัยและปลอดภัยที่สุด
              </h1>
              <h1 className="text-[18px] sm:text-2xl mt-3">ทำไมต้องระบบล้างแอร์รถยนต์ NWP</h1>
              <div className="border-t border-black mt-3"></div>
              <div className="text-[16px] sm:text-lg mt-3 space-y-3">
                <p>✅ ไม่ต้องป้อนรหัส ไม่บังคับซื้อน้ำยา ไม่ผูกมัดกับบริษัท</p>
                <p>✅ ไม่ใช่เครื่องจีน ไม่ต้องกลัวปัญหาบริการหลังการขาย</p>
                <p>✅ รับประกันซ่อมฟรี ! บริการดี ไม่ทิ้งลูกค้า</p>
                <p>✅ มีเครื่องเก่า เอามาแลกซื้อเครื่องใหม่ได้</p>
                <p>✅ มีบัตรเครดิต/ไม่มีบัตรเครดิต ก็ผ่อนได้</p>
                <p>✅ บริการส่งฟรี ! ทั่วประเทศ พร้อมทีมฝึกอบรมการใช้งาน</p>
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
            <img
              src={homesectiondescription.src}
              alt="Air conditioning system"
              className="lg:ml-10 w-4/5 mx-auto lg:w-2/5 mt-5 lg:mt-0"
            />
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
          <div className="p-10">
            <h1 className="text-xl sm:text-3xl font-bold">เกี่ยวกับเรา</h1>
            <div className="border-t border-black mb-5 mt-3"></div>
            <AboutContent />
          </div>
          <div className="p-10 bg-slate-100 rounded-lg mx-5">
            <ProductPage></ProductPage>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
