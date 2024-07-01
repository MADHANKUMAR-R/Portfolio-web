/* eslint-disable react/prop-types */
export default function Logo({ children }) {
  return (
    <a
      href="#home"
      className="font-bubble text-lg  text-white sm:text-2xl lg:text-2xl"
    >
      {children}
    </a>
  );
}
