import React from "react";
import Navbar from "../components/Headers/Navbar/Navbar.jsx";

function HomeLayout({ children }) {
  return (
    <div
      className="flex flex-col w-full min-h-screen bg-cyan-200 h-fit"
      style={{ fontFamily: "cursive" }}
    >
      <Navbar />
      {children}
    </div>
  );
}

export default HomeLayout;