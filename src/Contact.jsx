/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import { BiMessageSquareCheck } from "react-icons/bi";
import { RoughNotation } from "react-rough-notation";
import useIsInViewport from "./useIsInViewport";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const EMAILJSINFO = {
  serviceId: "service_f7kbvja",
  templateId: "template_8kqob1o",
  publicKey: "_2Iq3q5LFxKPTvL89",
};

export default function Contact() {
  const contactRef = useRef();

  const isInViewport = useIsInViewport(contactRef);
  const [details, setDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  const checkValidData = function () {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(details.email)) {
      return {
        status: false,
        errorMsg: "Enter a valid email address",
      };
    }

    const trimmedName = details.name.trim();
    if (trimmedName.length < 1) {
      return {
        status: false,
        errorMsg: "Name should not be empty",
      };
    }
    if (trimmedName.length > 30) {
      return {
        status: false,
        errorMsg: "Name should be less than 30 characters",
      };
    }

    const trimmedMsg = details.message.trim();
    if (trimmedMsg.length < 1) {
      return {
        status: false,
        errorMsg: "Message should not be empty",
      };
    }
    if (trimmedMsg.length > 750) {
      return {
        status: false,
        errorMsg: "Message should be less than 750 characters",
      };
    }

    return { status: true };
  };

  const handleFormChange = function (e) {
    setDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = function (e) {
    e.preventDefault();

    const isValidData = checkValidData();
    if (!isValidData.status) {
      toast.error(isValidData.errorMsg);
      return;
    }

    toast.promise(
      emailjs.send(
        EMAILJSINFO.serviceId,
        EMAILJSINFO.templateId,
        details,
        EMAILJSINFO.publicKey
      ),
      {
        loading: "Sending Mail....",
        success: "Mail Sent Successfully",
        error: "Something Went Wrong",
      }
    );
  };

  return (
    <div className="mt-16 pb-14 px-4 md:px-0" id="contact">
      <div className="flex flex-col gap-5">
        <p className="mt-10 font-medium text-sm text-center text-gray-500">
          GET IN TOUCH
        </p>
        <h1
          className="font-semibold text-3xl text-center text-white justify-center gap-2"
          ref={contactRef}
        >
          <RoughNotation type="box" show={isInViewport} animationDelay={500}>
            Contact<span className="gradient-text"> Me</span>
          </RoughNotation>
        </h1>
        <p className="text-white text-center md:text-left">
          I am currently open to full-time opportunities in front-end
          development
        </p>
        <motion.div
          className="mt-5 z-10"
          initial={{ opacity: 0, y: 100 }}
          animate={isInViewport ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <div className="service-primary flex flex-col md:flex-row justify-evenly md:mx-24 p-5 rounded-lg">
            <div className="flex flex-col text-white max-w-3xl md:mr-5">
              <h1 className="text-2xl font-bold mb-4">Let's Work Together</h1>
              <p className="text-base">
                Feel free to reach out if you are looking for a developer, have
                a question, or are interested in building some cool stuff
                together.
              </p>
            </div>
            <form
              className="flex flex-col text-white w-full md:w-96 mt-5 md:mt-0"
              onSubmit={handleFormSubmit}
            >
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleFormChange}
                  value={details.email}
                  className="placeholder-gradient mt-2 bg-transparent border border-[#ffffff] p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col mt-4">
                <label htmlFor="name" className="text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  name="name"
                  onChange={handleFormChange}
                  value={details.name}
                  className="placeholder-gradient bg-transparent border mt-2 border-[#ffffff] p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col mt-4">
                <label htmlFor="message" className="text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  className="placeholder-gradient bg-transparent border mt-2 border-[#ffffff] p-2 rounded-md"
                  placeholder="Type your message here."
                  id="message"
                  name="message"
                  onChange={handleFormChange}
                  value={details.message}
                />
              </div>
              <button className="hover:scale-105 mt-5 max-w-full transition duration-300 bg-[#02DAC5] text-black flex items-center justify-center gap-2 p-2 rounded-md">
                Send Message
                <BiMessageSquareCheck />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
