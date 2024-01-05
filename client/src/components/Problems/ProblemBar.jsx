import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";

function ProblemBar({ number, name, _id, difficulty }) {
  return (
    <Link to={`/problem/${_id}`} className="flex flex-row items-center justify-between w-full p-4 mt-2 text-base bg-white rounded-lg shadow-xl cursor-pointer hover:bg-blue-700">
      <div>
        <div className="flex flex-row">
            <h1 className="">
            {number}{".)"}
            </h1>
            <h1 className="ml-2">{name}</h1>
        </div>
        <div
            className={classNames("rounded-lg p-2", {
            "bg-green-500": difficulty === "Easy",
            "bg-yellow-500": difficulty === "Medium",
            "bg-red-500": difficulty === "Hard",
            })}
        >
            <h1>{difficulty}</h1>
        </div>
      </div>
     </Link>
  );
}

export default ProblemBar;