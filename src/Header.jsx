import { LuWalletCards } from "react-icons/lu";
export default function Header() {
  return (
    <div>
      <nav className="nav-bar">
        <div className="flex justify-evenly text-white p-4 pt-5">
          <h1 className=" mr-3 font-bubble ">
            Madhan<span className="text-[#7fd0e8] text-3xl ">.</span>
          </h1>
          <ul className="flex ml-24 gap-16 mr-4 mt-2 ">
            <li className="font-medium z-10 hover:text-[#02DAC5] hover:scale-90 transition duration-300">
              <a href="#">Home</a>
            </li>
            <li className="font-medium z-10 hover:text-[#02DAC5] hover:scale-90 transition duration-300">
              <a href="#">Featured Projects</a>
            </li>
            <li className="font-medium z-10 hover:text-[#02DAC5] hover:scale-90 transition duration-300">
              <a href="#">About Me</a>
            </li>
            <li className="font-medium z-10 hover:text-[#02DAC5] hover:scale-90 transition duration-300">
              <a href="#">Contact Me</a>
            </li>
          </ul>
          <button className="hover:scale-105 z-10 transition duration-300 bg-[#02DAC5] text-black flex items-center justify-center gap-2 p-2 rounded-md">
            View Resume
            <LuWalletCards />
          </button>
        </div>
      </nav>
    </div>
  );
}
