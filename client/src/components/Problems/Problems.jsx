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
  }, []);

  return (
    <div className="flex items-center justify-center w-full p-5 ">
      <div className="w-1/2 ">
        <h1 className="text-3xl">Problems:</h1>
        {problems ? (
          problems.map((problem, index) => {
            return <ProblemBar number={index + 1} {...problem} />;
          })
        ) : (
          <DNA
            visible={true}
            height="200"
            width="200"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        )}
      </div>
    </div>
  );
}

export default Problems;