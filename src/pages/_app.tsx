import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { Navbar, Footer } from "@/components";

export default function App({ Component, pageProps }: AppProps) {
  return (
<div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Component {...pageProps} />
      </main>
      <div className="h-[10px]"></div>
      <Footer />
    </div>
  );
}
