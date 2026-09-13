import { useState } from "react";
import logo from "../assets/logo-text.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="navbar sticky top-0 z-50  bg-base-100 shadow-sm px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-[auto_1fr_auto] lg:grid-cols-3 items-center">
          <div className="flex justify-start lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
              ☰
            </button>
          </div>

          <div className="flex justify-center lg:justify-start">
            <img src={logo} alt="Logo" className="object-contain" />
          </div>
          <ul className="hidden lg:flex justify-center items-center gap-6 font-medium">
            <li className="hover:text-primary transition text-pink-600">
              Home
            </li>

            <li className="hover:text-purple-600 transition">Technologies</li>

            <li className="hover:text-purple-600 transition">Projects</li>

            <li className="hover:text-purple-600 transition">About</li>

            <li className="hover:text-purple-600 transition">Contact</li>
          </ul>
          <div className="flex justify-end items-center gap-2 lg:gap-4">
            <button className="btn bg-purple-600 text-white rounded-full px-4 lg:px-6">
              Sign In
            </button>

            <button className="btn bg-pink-600 text-white rounded-full px-4 lg:px-6">
              Sign Up
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="lg:hidden border-t mt-3">
            <ul className="flex flex-col items-center gap-5 py-5 font-medium">
              <li className="text-pink-600">Home</li>

              <li className="hover:text-purple-600 transition">Technologies</li>

              <li className="hover:text-purple-600 transition">Projects</li>

              <li className="hover:text-purple-600 transition">About</li>

              <li className="hover:text-purple-600 transition">Contact</li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
