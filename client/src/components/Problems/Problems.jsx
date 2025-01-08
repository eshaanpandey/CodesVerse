import React, { useEffect, useState } from "react";
import ProblemBar from "./ProblemBar";
import { useDispatch } from "react-redux";
import { DNA } from "react-loader-spinner";
import { getProblemsList } from "../../redux/reducers/problems/problemsActions";

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
        <h1 className="text-2xl sm:text-3xl mb-4">Problems:</h1>
        {problems ? (
          problems.map((problem, index) => {
            return <ProblemBar key={index} number={index + 1} {...problem} />;
          })
        ) : (
          <div className="flex justify-center items-center">
            <DNA
              visible={true}
              height="100"
              width="100"
              ariaLabel="dna-loading"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Problems;
