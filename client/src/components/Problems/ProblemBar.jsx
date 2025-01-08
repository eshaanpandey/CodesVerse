import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

function ProblemBar({ number, heading, _id, difficulty }) {
  const darkMode = useSelector((state) => state.darkModeReducer.darkMode);

  return (
    <Link to={`/problems/${_id}`} className="w-full">
      <motion.div
        className={classNames(
          "flex flex-col md:flex-row justify-between w-full p-4 mt-4 text-base rounded-lg shadow-md cursor-pointer hover:shadow-lg transform transition duration-300 hover:scale-105",
          {
            "bg-white text-black": !darkMode,
            "bg-gray-800 text-white": darkMode,
          }
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-row items-center">
          <h1 className="mr-2 text-2xl font-semibold transition duration-300">{number}.</h1>
          <h1 className="font-medium transition-colors duration-300 group-hover:text-yellow-600 text-lg">
            {heading}
          </h1>
        </div>

        <div
          className={classNames(
            "mt-2 md:mt-0 rounded-lg p-2 md:flex-shrink-0 text-center md:w-24 lg:w-24 lg:h-10 transform transition-all duration-300 ease-in-out",
            {
              "bg-green-500 text-white ": difficulty === "Easy",
              "bg-yellow-500 text-white": difficulty === "Medium",
              "bg-red-500 text-white": difficulty === "Hard",
            }
          )}
        >
          <h1>{difficulty}</h1>
        </div>
      </motion.div>
    </Link>
  );
}

export default ProblemBar;
