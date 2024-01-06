import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";

function ProblemBar({ number, heading, _id, difficulty }) {
  return (
    <Link to={`/problems/${_id}`} className="flex flex-row justify-between w-full p-4 mt-2 text-base bg-white rounded-lg shadow-xl cursor-pointer hover:bg-yellow-100">
      {/* <div className="flex-grow"> */}
        <div className="flex items-center">
            <h1 className=" mr-2">
            {number}{".)"}
            </h1>
            <h1 className="ml-2">{heading}</h1>
        </div>
        <div
            className={classNames("rounded-lg p-2 flex-shrink-0", {
            "bg-green-500 inline-flex center hover:shadow-xl": difficulty === "Easy",
            "bg-yellow-500 inline-flex center hover:shadow-xl": difficulty === "Medium",
            "bg-red-500 inline-flex center hover:shadow-xl": difficulty === "Hard",
            })}
        >
            <h1>{difficulty}</h1>
        </div>
      {/* </div> */}
     </Link>
  );
}

export default ProblemBar;