import React from "react";
import { Layout } from "@/components";
import { qrcode } from "../../public/images";

const Contact = () => {
  return (
    <div>
      <Layout>
        <div className="text-lg sm:text-xl text-center space-y-3">
          <h1 className="text-lg sm:text-3xl font-bold">NWP AIR SUPPLY</h1>
          <p className="text-lg sm:text-3xl">สำนักงานใหญ่ กรุงเทพมหานคร</p>
          <div className="text-sm sm:text-xl space-y-2">
            <p>สายด่วน: 08x-xxx-xxxx</p>
            <p>ไลน์ : https://lin.ee/xxxx</p>
          </div>
          <div className="flex justify-center gap-10">
            <div>
              <img src={qrcode.src} alt="qrcode" className="w-40" />
              <p className="text-[12px] sm:text-[16px]">QR Code ฝ่ายขาย</p>
            </div>
            <div>
              <img src={qrcode.src} alt="qrcode" className="w-40" />
              <p className="text-[12px] sm:text-[16px]">QR Code ฝ่ายบริการ</p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Contact;
