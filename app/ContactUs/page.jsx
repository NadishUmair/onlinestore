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
 

 
  <div className="absolute inset-0 bg-gradient-to-t from-[#00a1b3] via-transparent to-transparent"></div>

  <div className="inset-0 absolute flex flex-col justify-center items-center">
  <h1 className="text-4xl font-bold  tracking-wider mb-12">
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
       
      </div>
      <div className="mt-10 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00a1b3] to-transparent bottom-0 left-0"></div>
    </div>
    </section>
  );
};

export default Contactus;
