"use client";

import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-scroll";
import Image from "next/image";
// Google Maps API URL (make sure to replace 'YOUR_API_KEY' with your actual API key)
const GOOGLE_MAPS_URL =
  "https://www.google.com/search?q=protek+fire+%26+mechanical&oq=&gs_lcrp=EgZjaHJvbWUqBggBEEUYOzIGCAAQRRg5MgYIARBFGDsyBggCECMYJzINCAMQABiRAhiABBiKBTIMCAQQABgUGIcCGIAEMg0IBRAAGJECGIAEGIoFMgYIBhBFGDwyBggHEEUYPDIMCAgQABgUGIcCGIAEMgcICRAAGIAEMggIChAAGBYYHjIICAsQABgWGB4yCAgMEAAYFhgeMggIDRAAGBYYHjIKCA4QABgKGBYYHtIBCDMwNjFqMGo5qAIOsAIB&client=ms-android-bell-ca-rvc3&sourceid=chrome-mobile&ie=UTF-8";

const Contactus = () => {
  // State for form fields and errors
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNo: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phoneNo: "",
    message: "",
    terms: "", // Add an error for terms
  });

  const [isTermsAccepted, setIsTermsAccepted] = useState(false); // State for terms checkbox

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle checkbox change
  const handleTermsChange = (e) => {
    setIsTermsAccepted(e.target.checked);
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phoneNo) newErrors.phoneNo = "Phone No is required"; // Corrected key
    if (!formData.message) newErrors.message = "Message is required";
    if (!isTermsAccepted) newErrors.terms = "You must accept the terms & conditions"; // Check terms acceptance
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit form data
      console.log("Form submitted:", formData);
      try {
        const response = await axios.post("/api/email", formData);
        const sheet = await axios.post("https://sheetdb.io/api/v1/ax5r61161u7yj",formData);
        console.log(response); // Fixed console.log typo
      } catch (error) {
        console.log(error);
      }

      // Reset form and errors
      setFormData({
        name: "",
        email: "",
        phoneNo: "",
        message: "",
      });
      setIsTermsAccepted(false); // Reset checkbox
      setErrors({});
    }
  };

  return (
    <section className="">
     <div className="relative w-full h-[90vh]">
 
  <img src="/Assets/overall-hero.jpg" className="h-full w-full object-cover" alt="" />
 
  <div className="absolute inset-0 bg-gradient-to-t from-[#00a1b3] via-transparent to-transparent"></div>

  <div className="inset-0 absolute flex flex-col justify-center items-center">
  <h1 className="text-4xl font-bold text-white tracking-wider mb-12">
        <span className="">Contact</span> Us
      </h1>
  </div>
</div>


    <div
      data-aos="fade-up"
      className="flex flex-col justify-center items-center"
      id="contact"
    >
     
      
      <div className="md:flex w-[90%]">
        <div className="w-full md:w-1/2 p-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="border border-gray-500 p-2 w-full outline-none "
              />
              {errors.name && (
                <p className=" text-sm">{errors.name}</p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="block">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-500 p-2 w-full outline-none "
              />
              {errors.email && (
                <p className="text-sm">{errors.email}</p>
              )}
            </div>
            <div>
              <label htmlFor="phoneNo" className="block">Phone No</label>
              <input
                type="number"
                id="phoneNo"
                name="phoneNo"
                placeholder="Phone No"
                value={formData.phoneNo}
                onChange={handleChange}
                className="border border-gray-500 p-2 w-full outline-none "
              />
              {errors.phoneNo && (
                <p className=" text-sm">{errors.phoneNo}</p>
              )}
            </div>
            <div>
              <label htmlFor="message" className="block">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                className="border border-gray-500 p-2 w-full outline-none "
              />
              {errors.message && (
                <p className=" text-sm">{errors.message}</p>
              )}
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                className=" h-[20px] w-[20px] mr-2"
                id="terms"
                checked={isTermsAccepted}
                onChange={handleTermsChange}
              />
              <a href="/privacy" className=" hover:underline">Privacy Policy</a>
            </div>
            {errors.terms && (
              <p className=" text-sm">{errors.terms}</p>
            )}

            <button
              type="submit"
              className=" w-[10rem] text-white px-4 py-2 rounded"
            >
              Send
            </button>
          </form>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.7928378322686!2d55.18115717376378!3d25.10887303527555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b9fa59d228f%3A0x74e19804f606bf8!2sAB%20Center%20Barsha!5e0!3m2!1sen!2s!4v1731065380839!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
       
        </div>
      </div>
      <div className="mt-10 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00a1b3] to-transparent bottom-0 left-0"></div>
    </div>
    </section>
  );
};

export default Contactus;
