import React from "react";
import { Link } from "react-router-dom";

function LogoHeaderArea() {
  return (
    <div className="flex justify-center w-full h-full">
      <div className="flex items-center px-4 justify-start w-full h-full bg-gray-950">
        <Link to="/">
          <img
            src={require("../../images/CodesVerse.jpg")}
            className="max-h-20 max-w-40 rounded-lg"
            alt="logo"
          />
        </Link>
      </div>
    </div>
  );
}

export default LogoHeaderArea;
