import Link from "next/link";
import React from "react";
import { icon } from "../pages/images";

const Footer = () => {
  return (
    <footer className="bg-white shadow dark:bg-white min-h-[50px] flex items-center justify-center">
      <div className="w-full mx-auto max-w-screen-xl flex items-center justify-between px-10">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-600">
          © 2023 www.nwpairsupply.com. All rights reserved.
        </span>
        <Link href="/" className="hidden lg:flex items-center">
          <img src={icon.src} alt="Logo" className="h-[70px] w-auto p-2" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
