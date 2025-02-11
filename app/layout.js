// "use client";

// import { useEffect, useState } from "react";
import { Inter } from "next/font/google";

import "./globals.css";
import { FaArrowUp, FaWhatsapp } from "react-icons/fa";
import Loading from "./loading";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";
import Script from "next/script";
import Head from "next/head";
import CustomHead from "./Components/customHead";

const inter = Inter({ subsets: ["latin"] });



export const metadata = {
  title: "Shop Circle",
  description:
    "",
  keywords: "",
  verification: {
    google: "nJT7rzCm5FSnpLJtTdewiJcRrLEcPkrr73K1ZF5VHxo",
  },
};




export default function RootLayout({ children }) {
  


  const whatsappNumber = "+971589552731";
  const message = "Hello! I need assistance.";

  return (
    <html lang="en" title={metadata.title} description={metadata.description}>
      <CustomHead/>
      <Head>
        <link rel="icon" href="/Assets/shopcircle.png" />
     
     
      </Head>

    

      <body className={`relative ${inter.className} `}>
       
          <section className="overflow-hidden" >
            <Navbar />
            {children}
            <Footer />
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
              className="fixed z-50 top-[70%] right-4 bg-green-500 p-2 rounded-full cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-[2rem] text-white" />
            </a>
            {/* {showScrollToTop && ( */}
             
            
          </section>
        
      </body>
    </html>
  );
}
