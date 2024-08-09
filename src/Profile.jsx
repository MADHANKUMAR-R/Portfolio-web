/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { LuWalletCards } from "react-icons/lu";
import img1 from "./assets/profileimg.jpg";
import useIsInViewport from "./useIsInViewport";
import { useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import PrimaryButton from "./PrimaryButton";
import { motion } from "framer-motion";
export default function Profile() {
  const profileRef = useRef(null);

  const isInViewport = useIsInViewport(profileRef);
  const handleBtnClick = function () {
    toast.error("Feature yet to be complete");
  };
  return (
    <div className="mt-16" id="about">
      <div className="flex flex-col gap-5">
        <p className=" mt-10 font-medium text-sm text-center  text-gray-500">
          MY BIO
        </p>
        <h1
          className="font-semibold text-3xl text-center  text-white"
          ref={profileRef}
        >
          <RoughNotation type="box" show={isInViewport} animationDelay={500}>
            About<span className="gradient-text"> Me</span>
          </RoughNotation>
        </h1>
        <div className="flex  flex-col gap-2 sm:flex-row sm:gap-4 sm:p-5 p-4 sm:p-0  justify-around items-center    mt-12">
          <motion.img
            src={img1}
            alt=""
            className="h-96 lg:h-80 md:h-92 w-80 py-2  rounded-lg shadow-lg object-cover rounded"
            ref={profileRef}
            initial={{ opacity: 0, y: 100 }}
            animate={
              isInViewport ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
            }
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          />

          <motion.div
            className="flex flex-col max-w-3xl text-center md:text-left"
            ref={profileRef}
            initial={{ opacity: 0, y: -100 }}
            animate={
              isInViewport ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }
            }
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          >
            <p className="text-white mb-4 ">
              <span className="block gradient-text  lg:text-xl font-bold mb-2">
                {" "}
                Hello! I'm Madhan, a passionate software developer from India.
              </span>
              <span className="text-sm md:text-sm lg:text-lg font-semibold">
                Currently, I am pursuing a degree in Computer Science
                Engineering. My primary focus is on front-end development, where
                I strive to create visually appealing and highly functional user
                interfaces. I am currently deepening my knowledge and skills in
                JavaScript and React, and I enjoy diving into new technologies
                and learning as much as I can. My enthusiasm for continuous
                learning and growth drives me to seek out new challenges and
                opportunities to expand my expertise. In any situation, I am
                always eager to learn something new and apply my knowledge to
                solve real-world problems. I am excited about the endless
                possibilities that technology offers and am committed to making
                a positive impact through my work.
              </span>
            </p>
            <PrimaryButton onClick={handleBtnClick} classname="text-center">
              View Resume
            </PrimaryButton>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
