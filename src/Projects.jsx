import Project1 from "./assets/image.png";
import "./index.css";
import { useRef } from "react";
import { motion } from "framer-motion";
import useIsInViewport from "./useIsInViewport";
import { RoughNotation } from "react-rough-notation";
export default function Projects() {
  const projectRef = useRef(null);
  const isInViewport = useIsInViewport(projectRef);

  return (
    <div ref={projectRef} className="mt-16 " id="projects">
      <div className="flex flex-col gap-5">
        <p className="mt-10 font-medium text-sm text-center text-gray-500">
          PORTFOLIO
        </p>
        <h1
          className="font-semibold text-3xl text-center  text-white"
          ref={projectRef}
        >
          <RoughNotation type="box" show={isInViewport} animationDelay={500}>
            Featured<span className="gradient-text"> Project</span>
          </RoughNotation>
        </h1>
      </div>

      <div className="flex flex-wrap p-4 sm:p-0 mb-4 justify-evenly items-center gap-12 mt-12">
        <motion.div
          className="flex flex-col gap-5 w-80"
          initial={{ scale: 0 }}
          animate={isInViewport ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <div className=" rounded-md service-primary h-56 flex  justify-center items-center overflow-hidden relative group p-4">
            <div className="relative h-full w-full overflow-hidden">
              <img
                src={Project1}
                alt="Project"
                className="absolute top-0 left-0 w-full h-auto transform translate-y-0 group-hover:translate-y-[-67%] transition-transform duration-500 ease-in-out"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <h1 className="text-white font-bold">Project Name</h1>
            <p className="text-gray-500 font-semibold">
              Our site, built with Bootstrap, offers a responsive and
              user-friendly shopping experience, making it easy for you to find
              the perfect instrument.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col gap-5 w-80"
          initial={{ scale: 0 }}
          animate={isInViewport ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <div className=" rounded-md service-primary h-56 flex justify-center items-center overflow-hidden relative group p-4">
            <div className="relative h-full w-full overflow-hidden">
              <img
                src={Project1}
                alt="Project"
                className="absolute top-0 left-0 w-full h-auto transform translate-y-0 group-hover:translate-y-[-67%] transition-transform duration-500 ease-in-out"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <h1 className="text-white font-bold">Project Name</h1>
            <p className="text-gray-500 font-semibold">
              Our site, built with Bootstrap, offers a responsive and
              user-friendly shopping experience, making it easy for you to find
              the perfect instrument.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col gap-5 w-80"
          initial={{ scale: 0 }}
          animate={isInViewport ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <div className=" rounded-md service-primary  h-56 flex justify-center items-center overflow-hidden relative group p-4">
            <div className="relative h-full w-full overflow-hidden">
              <img
                src={Project1}
                alt="Project"
                className="absolute top-0 left-0 w-full h-auto transform translate-y-0 group-hover:translate-y-[-67%] transition-transform duration-500 ease-in-out"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <h1 className="text-white font-bold">Project Name</h1>
            <p className="text-gray-500 font-semibold">
              Our site, built with Bootstrap, offers a responsive and
              user-friendly shopping experience, making it easy for you to find
              the perfect instrument.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
