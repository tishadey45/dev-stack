import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from "../assets/logo-footer.png";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
      <aside>
        <img src={logo} alt="Company Logo" className="" />
        <p className="text-gray-700 text-2lg">
          Curated tools, technologies, and resources for developers building{" "}
          <br />
          modern software.
        </p>

        <div className="flex gap-5 mt-5">
          <a
            href="#"
            className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition"
          >
            <FaGithub className="text-xl" />
            <span>GitHub</span>
          </a>

          <a
            href="#"
            className="flex items-center gap-2 text-gray-600 hover:text-pink-500 transition"
          >
            <FaTwitter className="text-xl" />
            <span>Twitter</span>
          </a>

          <a
            href="#"
            className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition"
          >
            <FaLinkedin className="text-xl" />
            <span>LinkedIn</span>
          </a>
        </div>

        <p className="text-gray-500 text-sm mt-4">
          &copy; {new Date().getFullYear()} DevStack. All rights reserved.
        </p>
      </aside>
      <nav>
        <h6 className="footer-title font-bold text-black">PRODUCT</h6>
        <a className="link link-hover text-gray-700">Home</a>
        <a className="link link-hover text-gray-700">Technologies</a>
        <a className="link link-hover text-gray-700">Projects</a>
      </nav>
      <nav>
        <h6 className="footer-title font-bold text-black">COMPANY</h6>
        <a className="link link-hover text-gray-700">About</a>
        <a className="link link-hover text-gray-700">Contact</a>
        <a className="link link-hover text-gray-700">Careers</a>
      </nav>
      <nav>
        <h6 className="footer-title font-bold text-black">LEGAL</h6>

        <a className="link link-hover text-gray-700">Privacy policy</a>
        <a className="link link-hover text-gray-700">Terms of Service</a>
      </nav>
    </footer>
  );
};

export default Footer;
