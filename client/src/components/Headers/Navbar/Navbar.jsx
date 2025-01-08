import React, { useState, useEffect, useRef } from "react";
import NavbarElement from "./NavbarElement";
import { AiFillHome } from "react-icons/ai";
import { TbListCheck } from "react-icons/tb";
import { IoMdLogIn, IoMdLogOut } from "react-icons/io";
import { FaUserCircle, FaSun, FaMoon } from "react-icons/fa";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signout } from "../../../redux/reducers/auth/authActions";
import { toggleDarkMode } from "../../../redux/reducers/darkMode/darkModeActions";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const isAuthenticated = useSelector(
    (state) => state.authReducer.isAuthenticated
  );
  const dispatch = useDispatch();
  const location = useLocation();
  const darkMode = useSelector((state) => state.darkModeReducer.darkMode);

  const handleLogout = () => {
    dispatch(signout());
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDarkModeHandler = () => {
    dispatch(toggleDarkMode());
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div
      className={`flex items-center w-full px-4 py-4 h-20 justify-between ${
        darkMode ? "bg-gray-950 text-white" : "bg-gray-800 text-black"
      }`}
    >
      <Link to="/problems" className="flex-shrink-0">
        <img
          src={require("../../../images/CodesVerse.jpg")}
          className="w-24 h-12"
          alt="Logo"
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center justify-between flex-grow text-white">
        {/* Center Navigation */}
        <div className="flex justify-center space-x-16 flex-grow">
          <NavbarElement
            label="Home"
            id="home"
            active={location.pathname === "/"}
          >
            <AiFillHome size={24} />
          </NavbarElement>
          <NavbarElement
            label="Problems"
            id="problems"
            active={location.pathname === "/problems"}
          >
            <TbListCheck size={24} />
          </NavbarElement>
          <NavbarElement
            label="Profile"
            id="profile"
            active={location.pathname === "/profile"}
          >
            <FaUserCircle size={24} />
          </NavbarElement>
          <button
            onClick={toggleDarkModeHandler}
            className={`ml-4 p-2 rounded-full flex items-center justify-center w-12 ${
              darkMode ? "bg-gray-700" : "bg-gray-200"
            }`}
          >
            <FaMoon
              className={`text-white ${darkMode ? "opacity-100" : "opacity-0"}`}
            />
            <FaSun
              className={`text-yellow-400 ${
                darkMode ? "opacity-0" : "opacity-100"
              }`}
            />
          </button>
        </div>

        {/* Login/Logout */}
        <div className="flex items-center space-x-4">
          {!isAuthenticated ? (
            <NavbarElement label="Log In" id="login">
              <IoMdLogIn size={24} />
            </NavbarElement>
          ) : (
            <div
              onClick={handleLogout}
              className="flex items-center space-x-2 cursor-pointer hover:text-gray-400"
            >
              <IoMdLogOut size={24} />
              <span>Log Out</span>
            </div>
          )}
        </div>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="lg:hidden flex items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white"
        >
          {isMenuOpen ? <HiX size={30} /> : <HiOutlineMenu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`lg:hidden fixed top-20 right-0 h-2/4 w-2/5 ${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"} shadow-lg p-4 transform transition-transform z-50 duration-500 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center space-y-6 h-full">
          <NavbarElement
            label="Home"
            id="home"
            active={location.pathname === "/"}
            onClick={() => setIsMenuOpen(false)}
          >
            <AiFillHome size={24} />
          </NavbarElement>
          <NavbarElement
            label="Problems"
            id="problems"
            active={location.pathname === "/problems"}
            onClick={() => setIsMenuOpen(false)}
          >
            <TbListCheck size={24} />
          </NavbarElement>
          <NavbarElement
            label="Profile"
            id="profile"
            active={location.pathname === "/profile"}
            onClick={() => setIsMenuOpen(false)}
          >
            <FaUserCircle size={24} />
          </NavbarElement>
          <button
            onClick={toggleDarkModeHandler}
            className={`p-2 rounded-full flex items-center justify-center w-12 ${
              darkMode ? "bg-gray-700" : "bg-white"
            }`}
          >
            <FaMoon
              className={`text-white ${darkMode ? "opacity-100" : "opacity-0"}`}
            />
            <FaSun
              className={`text-yellow-400 ${
                darkMode ? "opacity-0" : "opacity-100"
              }`}
            />
          </button>
          {!isAuthenticated ? (
            <NavbarElement
              label="Log In"
              id="login"
              onClick={() => setIsMenuOpen(false)}
            >
              <IoMdLogIn size={24} />
            </NavbarElement>
          ) : (
            <div
              onClick={() => {
                handleLogout();
                setIsMenuOpen(false);
              }}
              className="flex items-center space-x-2 cursor-pointe"
            >
              <IoMdLogOut size={24} />
              <span>Log Out</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
