import Link from "next/link";
import { icon } from "../pages/images";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>("");

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  const navLinks = [
    { name: "หน้าแรก", path: "/" },
    { name: "เกี่ยวกับเรา", path: "/about" },
    { name: "สินค้า", path: "/product" },
    { name: "ผลงาน", path: "/gallery" },
    { name: "โปรโมชั่น", path: "/promotion" },
    { name: "ติดต่อเรา", path: "/contact" },
  ];

  return (
    <nav className="bg-[rgb(16,116,201)] p-3">
      <div className="mx-auto max-w-[1140px] flex items-center justify-between">
        <img src={icon.src} alt="Logo" className="h-20" />
        <ul className="flex space-x-4 text-white">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                style={{
                  color: activeLink === link.path ? "rgb(9, 65, 112)" : "white",
                }}
                className={`link-hover ${activeLink === link.path ? "active" : ""}`}
                onClick={() => handleLinkClick(link.path)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
