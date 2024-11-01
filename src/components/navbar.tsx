import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { icon } from "../pages/images";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const navLinks = [
    { name: "หน้าแรก", path: "/" },
    { name: "เกี่ยวกับเรา", path: "/about" },
    { name: "สินค้า", path: "/product" },
    { name: "ผลงาน", path: "/gallery" },
    { name: "โปรโมชั่น", path: "/promotion" },
    { name: "ติดต่อเรา", path: "/contact" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.getElementById("main-nav");
      if (nav && !nav.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [router.pathname]);

  return (
    <nav id="main-nav" className="bg-[rgb(16,116,201)] px-10">
      <div className="mx-auto max-w-[1140px]">
        <div className="flex justify-between items-center h-20 ">
            <Link href="/" className="flex items-center">
              <img
                src={icon.src}
                alt="Logo"
                className="h-20 w-auto p-1"
              />
            </Link>

          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-200"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>

          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`px-3 py-2 text-lg font-medium text-white relative group ${
                  router.pathname === link.path ? "after:w-full" : "after:w-0"
                }`}
              >
                {link.name}
                <span
                  className="absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-300 ease-out 
                  group-hover:w-full after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-white 
                  after:transition-all after:duration-300 after:ease-out w-0"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out text-center ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-[rgb(16,116,201)]">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`block px-3 py-2 text-base font-medium text-white relative group ${
                router.pathname === link.path ? "after:w-full" : "after:w-0"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
