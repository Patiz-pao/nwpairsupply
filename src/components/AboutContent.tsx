import React from "react";
import { about as aboutImage } from "../pages/images";

const AboutContent = () => {
  return (
    <div className="text-lg sm:text-xl">
      <p>
        NWP AIR SUPPLY
        เราคือผู้เชี่ยวชาญด้านการผลิตระบบล้างแอร์รถยนต์แบบไม่ถอดตู้มากว่า 15 ปี
        ผลิตภัณฑ์ของเราได้รับการยอมรับจากลูกค้ามากมาย
        ทั้งในและนอกประเทศว่าเป็นผลิตภัณฑ์ที่มีคุณภาพสูง ทนทาน
        ใช้งานได้ยาวนานและมีราคาที่เหมาะสม เช่น เครื่องล้างตู้แอร์รถยนต์ NWP และ
        น้ำยาล้างตู้แอร์รถยนต์ NWP
        ซึ่งผลิตขึ้นภายใต้มาตรฐานที่ได้รับการยอมรับในระดับสากล เช่น NSF, GREEN
        SEAL, U.S.EPA, CSPA เพื่อให้ลูกค้าได้มั่นใจว่าผลิตภัณฑ์ของบริษัทฯ
        จะมีคุณภาพสูงและสามารถตอบสนองต่อความต้องการของลูกค้าได้อย่างดีที่สุด
      </p>
      <img src={aboutImage.src} alt="about" className="p-10 sm:p-5 w-100" />
    </div>
  );
};

export default AboutContent;
