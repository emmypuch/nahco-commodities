import { useState } from "react";
import { Link } from "react-router-dom";
import NahcoLogo from "../../assets/svg/nahco-logo.svg";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
  ];

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className="flex justify-between bg-[#263C28] px-[20px] md:px-[50px] pb-[20px] pt-[30px] items-center">
        <div className="logo">
          <img src={NahcoLogo} alt="Logo" className="md:w-full w-[100px]" />
        </div>

        {/* Hamburger button for small screen */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-[#C8C0B4] hover:text-[#E4CAA4] focus:outline-none relative left-[70px]"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation links for large screen */}
        <ul className="hidden md:flex gap-[50px] justify-center items-center">
          {navLinks.map((link, index) => (
            <li key={index} className="text-[14px] font-[400]">
              <Link
                to={link.path}
                className="text-[#C8C0B4] hover:text-[#E4CAA4] transition-colors duration-300 ease-in-out"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="hidden md:flex justify-center items-center">
          <li>
            <a
              href="#"
              className="btn border border-[#C8C0B4] rounded-full px-4 py-3 text-[14px] text-white font-[400] flex items-center justify-center transition-colors duration-300 hover:bg-[#C8C0B4] hover:text-[#263C28] focus:outline-none focus:ring-2 focus:ring-[#E4CAA4]"
            >
              Contact Us
            </a>
          </li>
        </ul>

        {/* Mobile menu */}
        <div className="block md:hidden">
          <div className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
            <div className="close-menu">
              <button
                onClick={toggleMenu}
                className="text-[#C8C0B4] hover:text-[#E4CAA4] focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            {navLinks.map((link, index) => (
              <li key={index} className="text-[14px] font-[400] py-2 list-none">
                <Link
                  to={link.path}
                  className="text-[#C8C0B4] hover:text-[#E4CAA4] transition-colors duration-300 ease-in-out"
                >
                  {link.name}
                </Link>
              </li>
            ))}

            <li className="py-2 list-none">
              <a
                href="#"
                className="btn border border-[#C8C0B4] rounded-full px-4 py-3 text-[14px] text-white font-[400] flex items-center justify-center transition-colors duration-300 hover:bg-[#C8C0B4] hover:text-[#263C28] focus:outline-none focus:ring-2 focus:ring-[#E4CAA4]"
              >
                Contact Us
              </a>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
