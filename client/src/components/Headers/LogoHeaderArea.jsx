import React from "react";

function LogoHeaderArea() {
  return (
    <div className="flex justify-center w-full h-full">
      <div className="flex items-center justify-center w-full h-full bg-gray-950">
        <img src={require("/Users/eshaanpandey/Documents/AlgoUniversity/OJ_Project/Judge_Project/client/src/images/logo.jpeg")} className="w-auto rounded-lg h-4/5" />
      </div>
    </div>
  );
}

export default LogoHeaderArea;