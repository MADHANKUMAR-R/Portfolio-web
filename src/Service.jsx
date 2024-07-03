/* eslint-disable react/display-name */
import { CgCodeSlash } from "react-icons/cg";
import { MdOutlineDesignServices } from "react-icons/md";
import { DiAppstore } from "react-icons/di";
import { useRef } from "react";
import useIsInViewport from "./useIsInViewport";
import { RoughNotation } from "react-rough-notation";

export default function Service() {
  const serviceRef = useRef(null);
  const isInViewport = useIsInViewport(serviceRef);

  return (
    <div className="px-5 py-2 " id="services" ref={serviceRef}>
      <div className="flex flex-col gap-5">
        <p className="font-medium text-sm text-center text-gray-500">
          SERVICES
        </p>
        <h1 className="font-semibold text-3xl text-center text-white">
          <RoughNotation type="box" show={isInViewport} animationDelay={500}>
            What <span className="gradient-text"> I do</span>
          </RoughNotation>
        </h1>
        <div className="flex flex-wrap md:flex-row gap-8 justify-around mt-8 items-center z-10">
          <div className="h-64 text-white w-80 p-5 rounded-md service-primary">
            <div className="rounded-full border border-white p-2 inline-block">
              <CgCodeSlash />
            </div>
            <h2 className="font-bold text-lg">Web Development</h2>
            <p>____________</p>
            <p className="mt-3 font-medium">
              I use my knowledge of various programming languages such as HTML5,
              CSS3, JavaScript, and Tailwind to build digital solutions for
              users.
            </p>
          </div>
          <div className="sm:h-64 h-72 text-white w-80 p-5 rounded-md service-primary">
            <div className="rounded-full border border-white p-2 inline-block">
              <MdOutlineDesignServices />
            </div>
            <h2 className="font-bold text-lg">UI Design</h2>
            <p>____________</p>
            <p className="mt-3 font-medium">
              Crafting user-centric digital experiences that seamlessly blend
              aesthetics and functionality. Expert in user-centered design and
              responsive interfaces.
            </p>
          </div>
          <div className="h-64 text-white w-80 p-5 rounded-md service-primary">
            <div className="rounded-full border border-white p-2 inline-block">
              <DiAppstore />
            </div>
            <h2 className="font-bold text-lg">App Development</h2>
            <p>____________</p>
            <p className="mt-3 font-medium">
              Crafting user-centric digital experiences for app development,
              specializing in user-centered design and responsive interfaces.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
