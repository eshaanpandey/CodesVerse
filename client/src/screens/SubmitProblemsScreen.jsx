import React, { useEffect, useState } from "react";

// import LogoHeaderArea from "../components/Headers/LogoHeaderArea";
import ProblemDescription from "../components/Problems/ProblemDescription";
import CompilerArea from "../components/Compiler/CompilerArea";

import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProblemById } from "../redux/reducers/problems/problemsActions";
import Navbar from "../components/Headers/Navbar/Navbar";

function SubmitProblemScreen() {
    const [problem, setProblem] = useState(null); 
    const dispatch = useDispatch();
    const { _id } = useParams();
  
    useEffect(() => {
      dispatch(getProblemById(_id)).then((data) => {
        setProblem(data.payload.data.problem);
      });
    }, [_id, dispatch]);
  
    return (
      <div className="w-full h-full text-black dark:text-white bg-cyan-100 dark:bg-gray-800">
        <div className="">
          {/* <LogoHeaderArea /> */}
          <Navbar/>
        </div>
        <div
          className="flex flex-col lg:flex-row w-full h-auto lg:h-5/6 p-2 gap-2"
          style={{ fontFamily: "revert-layer" }}
        >
          <ProblemDescription problem={problem} />

          <CompilerArea problemId={_id} />
        </div>
      </div>
    );
  }
  
  export default SubmitProblemScreen;