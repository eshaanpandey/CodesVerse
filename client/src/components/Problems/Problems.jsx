import React, { useEffect, useState } from "react";
import ProblemBar from "./ProblemBar";
import { useDispatch } from "react-redux";
import { DNA } from "react-loader-spinner";
import { getProblemsList } from "../../redux/reducers/problems/problemsActions";
import { motion } from "framer-motion";

function Problems() {
  const [problems, setProblems] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProblemsList()).then((data) => {
      setProblems(data.payload.data.problems);
    });
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center justify-center w-full p-5">
      <div className="w-full sm:w-3/4 lg:w-1/2">
        <motion.h1
          className="text-3xl font-semibold text-center text-blue-600 dark:text-blue-400 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Problems
        </motion.h1>
        {problems ? (
          problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <ProblemBar key={index} number={index + 1} {...problem} />
            </motion.div>
          ))
        ) : (
          <div className="flex flex-col justify-center items-center space-y-4">
            <DNA visible={true} height="100" width="100" ariaLabel="dna-loading" />
            <p className="text-center text-black dark:text-white">
              Please wait, Problems loading...
            </p>
          </div>

        )}
      </div>
    </div>
  );
}

export default Problems;
