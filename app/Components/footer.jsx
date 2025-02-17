"use client"
import Link from "next/link";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#264846] text-white py-16">
      <div className="container mx-auto px-6 ">
        {/* Main Footer Content */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-16">
          {/* Quick Links Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-300 mb-6">Quick Links</h2>
            <ul className="space-y-6">
              <li>
                <Link href="/#home" className="flex items-center text-lg text-gray-200 hover:text-gray-400 transition duration-300">
                  <BsArrowRightShort className="text-xl mr-3" /> Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="flex items-center text-lg text-gray-200 hover:text-gray-400 transition duration-300">
                  <BsArrowRightShort className="text-xl mr-3" /> About Us
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="flex items-center text-lg text-gray-200 hover:text-gray-400 transition duration-300">
                  <BsArrowRightShort className="text-xl mr-3" /> Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="flex items-center text-lg text-gray-200 hover:text-gray-400 transition duration-300">
                  <BsArrowRightShort className="text-xl mr-3" /> Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="flex items-center text-lg text-gray-200 hover:text-gray-400 transition duration-300">
                  <BsArrowRightShort className="text-xl mr-3" /> Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service Section */}
          <div>
            <h2 className="text-xl font-semibold text-gray-300 mb-6">Customer Service</h2>
            <ul className="space-y-6">
              <li>
                <Link href="/faq" className="flex items-center text-lg text-gray-200 hover:text-gray-400 transition duration-300">
                  <BsArrowRightShort className="text-xl mr-3" /> FAQ
                </Link>
              </li>
              <li>
                <Link href="/returns" className="flex items-center text-lg text-gray-200 hover:text-gray-400 transition duration-300">
                  <BsArrowRightShort className="text-xl mr-3" /> Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="flex items-center text-lg text-gray-200 hover:text-gray-400 transition duration-300">
                  <BsArrowRightShort className="text-xl mr-3" /> Shipping Info
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div>
            <h2 className="text-xl font-semibold text-gray-300 mb-6">Follow Us</h2>
            <div className="flex gap-6">
              <a href="https://www.facebook.com/shopcirclestore" className="text-3xl text-gray-200 hover:text-blue-500 transition duration-300" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/shopcirclestore/" className="text-3xl text-gray-200 hover:text-pink-500 transition duration-300" aria-label="Instagram">
                <FaInstagram />
              </a>
              {/* <a href="https://www.linkedin.com/company/smartchoiceyachts" className="text-3xl text-gray-200 hover:text-blue-600 transition duration-300" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="https://www.tiktok.com/@smartchoiceyachts" className="text-3xl text-gray-200 hover:text-black transition duration-300" aria-label="TikTok">
                <FaTiktok />
              </a> */}
            </div>
          </div>

          {/* Contact Information Section */}
          <div>
            <h2 className="text-xl font-semibold text-gray-300 mb-6">Contact Information</h2>
            <p className="mb-6 text-sm text-gray-200">
              {/* <strong className="text-lg">Email:</strong> */}
              {/* <a href="mailto:Info@smartchoiceyachts.com" className="text-gray-400 hover:text-gray-500 transition duration-300 ml-2">
                Info@smartchoiceyachts.com
              </a> */}
            </p>
            <p className="mb-6 text-sm text-gray-200 flex flex-wrap">
              <strong className="text-lg">Phone:</strong>
              <a href="tel:+923214644406" className="text-gray-200 hover:text-gray-400 transition duration-300">+923214644406</a>
            </p>
          </div>
        </div>

        {/* Store Promotions / CTA Section */}
        <div className="text-center py-12 bg-[#203f45] rounded-lg mb-12">
          <h2 className="text-sm font-semibold mb-4 text-white">Limited Time Offer!</h2>
          <p className="mb-6 text-lg text-white">Get 20% off your first purchase with code: <strong className="text-gray-300">SMART20</strong></p>
          <Link href="/shop" className="bg-gray-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-600 transition duration-300">
            Shop Now
          </Link>
        </div>

        {/* Back to Top Button (floating) */}
        <div className="fixed bottom-12 right-6 z-10  h-[3rem] w-[3rem] flex flex-col justify-center items-center">
          <a href="#top" className="bg-[#264846] text-white  text-[1.3rem] flex flex-col justify-center items-center rounded-full shadow-lg  transition w-full h-full">
            ↑
          </a>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center text-sm mt-16 pt-6 border-t border-gray-600 text-gray-200">
          <p>
            &copy; {new Date().getFullYear()} Shop Circle. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
