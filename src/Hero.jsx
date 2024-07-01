/* eslint-disable react/prop-types */
import { TbBrandGithubFilled } from "react-icons/tb";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { RoughNotation } from "react-rough-notation";
import { motion } from "framer-motion";
import useIsInViewport from "./useIsInViewport";

export default function Hero() {
  const typedRef = useRef(null);
  const [show, setShow] = useState(false);
  const heroRef = useRef(null);
  const isInViewport = useIsInViewport(heroRef);

  useEffect(() => {
    if (isInViewport) {
      const options = {
        strings: ['Hi, I am <span class="gradient-text">Madhan Kumar</span>'],
        typeSpeed: 40,
        showCursor: false,
        onComplete: () => {
          setShow(true);
        },
      };

      const typed = new Typed(typedRef.current, options);

      return () => {
        typed.destroy();
      };
    } else {
      setShow(false);
    }
  }, [isInViewport]);

  return (
    <div
      ref={heroRef}
      className="h-screen flex flex-col justify-center items-center pt-20"
      id="home"
    >
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={isInViewport ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <h1 className="text-white text-4xl font-semibold">
            <span ref={typedRef} />
          </h1>
        </motion.div>
        <motion.p
          className="text-white mt-5 text-2xl max-w-full text-center"
          initial={{ opacity: 0, x: -100 }}
          animate={
            isInViewport ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
          }
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          A seasoned
          <span className="gradient-text relative mx-2">
            <RoughNotation type="underline" color="#fff" show={show}>
              Frontend Developer
            </RoughNotation>
          </span>
          transforming ideas into stunning
          <span className="block mt-1">
            digital experiences. Let’s create something amazing!
          </span>
        </motion.p>
      </div>
      <div className="flex justify-center mt-10 gap-5">
        <div className="bg-white p-4 rounded-full transform transition duration-300 hover:scale-110 hover:-translate-y-1">
          <a
            href="https://github.com/your-github-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TbBrandGithubFilled />
          </a>
        </div>
        <div className="bg-white p-4 rounded-full transform transition duration-300 hover:scale-110 hover:-translate-y-1">
          <a
            href="mailto:your-email@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoGmail />
          </a>
        </div>
        <div className="bg-white p-4 rounded-full transform transition duration-300 hover:scale-110 hover:-translate-y-1">
          <a
            href="https://www.linkedin.com/in/your-linkedin-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </div>
        <div className="bg-white p-4 rounded-full transform transition duration-300 hover:scale-110 hover:-translate-y-1">
          <a
            href="https://twitter.com/your-twitter-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoTwitter />
          </a>
        </div>
      </div>
      <div className="my-16 animate-bounce">
        <button className="text-[#000000] px-7 py-4 text-4xl font-extrabold bg-white rounded-full">
          &darr;
        </button>
      </div>
    </div>
  );
}
