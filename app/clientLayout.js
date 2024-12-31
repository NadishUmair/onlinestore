// ClientLayout.js

"use client"; // This line indicates that this file will be rendered on the client side

import Footer from "./Components/footer";
import Navbar from "./Components/navbar";
import { useEffect, useState } from "react";
import { FaArrowUp, FaWhatsapp } from "react-icons/fa";

// import Loading from "./loading";



const ClientLayout = ({ children }) => {
 




  const whatsappNumber = "+1234567890";
  const message = "Hello! I need assistance.";



  return (
    <>
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
      {showScrollToTop && (
        <div
          className="fixed z-50 top-[90%] right-4 bg-[#ff0000] hover:bg-red-500 transition-all ease-in-out p-2 rounded-md cursor-pointer"
          onClick={scrollToTop}
        >
          <FaArrowUp className="text-[1.5rem] text-white" />
        </div>
      )}
    </>
  );
};

export default ClientLayout;
