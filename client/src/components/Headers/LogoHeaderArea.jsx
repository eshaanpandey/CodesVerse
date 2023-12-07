import React from "react";

function LogoHeaderArea() {
  return (
    <div className="flex justify-center w-full h-full">
      <div className="flex items-center justify-center w-full h-full bg-gray-950">
        <img src={require("../../images/logo.png")} className="w-auto rounded-lg h-3/5" />
      </div>
    </div>
  );
}

export default LogoHeaderArea;