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
      className="flex flex-col items-center justify-center h-screen"
      id="hero"
    >
      <div className="flex flex-col space-y-7 items-center justify-center">
        <h1
          className="text-2xl md:text-4xl font-bold text-white text-center"
          ref={heroRef}
        >
          <RoughNotation type="box" show={show} animationDelay={300}>
            <span ref={typedRef} />
          </RoughNotation>
        </h1>
        <p className="text-white md:text-2xl text-center mt-5">
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
        </p>
        <div className="flex gap-7">
          <motion.a
            href="https://github.com/example"
            target="_blank"
            rel="noreferrer"
            className="text-white"
            initial={{ opacity: 0, x: -100 }}
            animate={
              isInViewport ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
            }
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <TbBrandGithubFilled className="text-3xl" />
          </motion.a>
          <motion.a
            href="mailto:example@example.com"
            target="_blank"
            rel="noreferrer"
            className="text-white"
            initial={{ opacity: 0, x: -100 }}
            animate={
              isInViewport ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
            }
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          >
            <BiLogoGmail className="text-3xl" />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-white"
            initial={{ opacity: 0, x: -100 }}
            animate={
              isInViewport ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
            }
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          >
            <FaLinkedinIn className="text-3xl" />
          </motion.a>
          <motion.a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="text-white"
            initial={{ opacity: 0, x: -100 }}
            animate={
              isInViewport ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
            }
            transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          >
            <IoLogoTwitter className="text-3xl" />
          </motion.a>
        </div>
        <motion.button
          className="flex flex-row custom-btn btn-9"
          initial={{ opacity: 0, y: 50 }}
          animate={isInViewport ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1 }}
        >
          <p>Let's Connect</p>
          <span>&rarr;</span>
        </motion.button>
      </div>
    </div>
  );
}
