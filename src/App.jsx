/* eslint-disable no-unused-vars */
import Header from "./Header";
import Hero from "./Hero";
import Service from "./Service";
import Profile from "./Profile";
import Skills from "./Skills";
import Contact from "./Contact";
import Scroll from "./Scroll";
import Projects from "./Projects";
import { Toaster } from "react-hot-toast";
import StarsCanvas from "./Starbg";
import { useRef } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

export default function App() {
  return (
    <Scroll>
      <StarsCanvas />
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            background:
              "linear-gradient(180deg, rgba(2, 218, 197, 0) 0%, rgba(2, 218, 197, 0.82) 100%), rgba(2, 218, 197, 0.94)",
            color: "#fff",
            boxShadow: "inset 0 0 3px #bf97ff70",
          },
        }}
      />

      <Hero />
      <Service id="services" />
      <Projects id="projects" />
      <Profile id="profile" />
      <Skills id="skills" />
      <Contact id="contact" />
    </Scroll>
  );
}
