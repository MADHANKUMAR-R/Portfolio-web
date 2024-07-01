import { motion } from "framer-motion";
import useIsInViewport from "./useIsInViewport";
import { useRef } from "react";
import { RoughNotation } from "react-rough-notation";

export default function Skills() {
  const skillRef = useRef(null);
  const isInViewport = useIsInViewport(skillRef);

  return (
    <div className="mt-16" id="skills">
      <div className="flex flex-col gap-5">
        <p className=" mt-10 font-medium text-sm text-center  text-gray-500">
          SKILLS
        </p>
        <h1
          className="font-semibold text-3xl text-center  text-white"
          ref={skillRef}
        >
          <RoughNotation type="box" show={isInViewport} animationDelay={500}>
            Technical<span className="gradient-text">Skills</span>
          </RoughNotation>
        </h1>

        <div className="flex justify-around items-center place-content-center ">
          <motion.div
            className="flex flex-col max-w-3xl gap-2"
            ref={skillRef}
            initial={{ opacity: 0, x: 100 }}
            animate={
              isInViewport ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }
            }
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <p className="text-white text-md font-semibold">
              I have a strong foundation in front-end development with
              proficiency in HTML, CSS, and JavaScript. My skills in JavaScript
              are complemented by my experience with React, enabling me to
              create dynamic and interactive user interfaces. I am also adept at
              using Flutter for developing cross-platform mobile applications.
              My understanding of responsive design principles allows me to
              build visually appealing and user-friendly websites. Additionally,
              I am familiar with version control systems like Git and GitHub,
              which help me manage code efficiently and collaborate effectively
              on projects. Overall, I am passionate about leveraging these
              technologies to create innovative and impactful solutions.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col gap-5 items-center"
            initial={{ opacity: 0, x: -100 }}
            animate={
              isInViewport ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
            }
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          >
            <div className="flex gap-7">
              <p className="service-primary gradient-text1 p-5 items-center justify-center flex bg-[#7fd0e8] bg-opacity-5 rounded-full">
                HTML5
              </p>
              <p className="service-primary px-6 gradient-text1 items-center justify-center bg-[#7fd0e8] bg-opacity-5 flex rounded-md">
                Javascript
              </p>
              <p className="service-primary p-7 gradient-text1 items-center justify-center bg-[#7fd0e8] bg-opacity-5 flex rounded-full">
                CSS3
              </p>
            </div>
            <div className="flex gap-7">
              <p className="service-primary gradient-text1 px-9 py-4 bg-[#7fd0e8] bg-opacity-5 items-center justify-center flex rounded-full">
                React
              </p>
              <p className="service-primary px-9 gradient-text1 bg-[#7fd0e8] bg-opacity-5 items-center justify-center flex rounded-md">
                Tailwind
              </p>
            </div>
            <div className="flex gap-7">
              <p className="service-primary px-9 gradient-text1 bg-[#7fd0e8] bg-opacity-5 items-center justify-center flex rounded-md">
                UI Design
              </p>
              <p className="service-primary px-9 py-4 gradient-text1 bg-[#7fd0e8] bg-opacity-5 items-center justify-center flex rounded-full">
                Typescript
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
