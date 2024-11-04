import React from "react";
import { Layout, ContactPage } from "@/components";
import Link from "next/link";

const Contact = () => {
  return (
<div>
      <Layout>
        <div
          style={{ backgroundColor: "rgba(250, 250, 250, 0.85)" }}
          className="mt-5 mb-5 rounded-lg shadow-lg"
        >
          <div className="p-5 flex">
            <Link href="/" className="text-2xl font-bold hover:underline">
              Home
            </Link>
            <span className="mx-2 text-2xl font-bold">-</span>
            <h1 className="text-2xl font-bold">ติดต่อเรา</h1>
          </div>
          <div className="border-t border-black mb-3 mx-5"></div>
          <div className="mx-5 bg-white p-10 rounded-lg shadow-lg mt-5">
            <ContactPage />
          </div>
          <div className="h-[16px]"></div>
        </div>
      </Layout>
    </div>
  );
};

export default Contact;
