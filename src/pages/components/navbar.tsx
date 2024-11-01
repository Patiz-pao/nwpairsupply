import Link from "next/link";
import { icon } from "../images";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[rgb(16,116,201)] p-3">
      <div className="mx-auto max-w-[1140px] flex items-center justify-between">
        <img src={icon.src} alt="Logo" className="h-20" />
        <ul className="flex space-x-4 text-white">
          <li>
            <Link href="/">หน้าแรก</Link>
          </li>
          <li>
            <Link href="/about">เกี่ยวกับเรา</Link>
          </li>
          <li>
            <Link href="/">สินค้า</Link>
          </li>
          <li>
            <Link href="/">ผลงาน</Link>
          </li>
          <li>
            <Link href="/">โปรโมชั่น</Link>
          </li>
          <li>
            <Link href="/contact">ติดต่อเรา</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
