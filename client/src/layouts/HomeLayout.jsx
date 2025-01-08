import React from "react";
import Navbar from "../components/Headers/Navbar/Navbar.jsx";
import { useSelector } from "react-redux";

function HomeLayout({ children }) {
  const darkMode = useSelector((state) => state.darkModeReducer.darkMode);

  return (
    <div
      className={`flex flex-col w-full min-h-screen h-fit transition duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-cyan-200 text-black"}`}
      // style={{ fontFamily: "cursive" }}
    >
      <Navbar />
      {children}
    </div>
  );
}

export default HomeLayout;