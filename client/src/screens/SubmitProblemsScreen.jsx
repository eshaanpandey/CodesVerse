import React, { useEffect, useState } from "react";

import LogoHeaderArea from "../components/Headers/LogoHeaderArea";
import ProblemDescription from "../components/Problems/ProblemDescription";
import CompilerArea from "../components/Compiler/CompilerArea";

import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProblemById } from "../redux/reducers/problems/problemsActions";

function SubmitProblemScreen() {
    const [problem, setProblem] = useState(null); 
    const dispatch = useDispatch();
    const { _id } = useParams();
  
    useEffect(() => {
      dispatch(getProblemById(_id)).then((data) => {
        setProblem(data.payload.data.problem);
      });
    }, []);
  
    return (
      <div className="w-full h-screen text-black bg-cyan-100">
        <div className="" style={{ height: "11%" }}>
          <LogoHeaderArea />
        </div>
        <div
          className="flex flex-row w-full h-5/6"
          style={{ fontFamily: "revert-layer" }}
        >
          <ProblemDescription problem={problem} />

          <CompilerArea problemId={_id} />
        </div>
      </div>
    );
  }
  
  export default SubmitProblemScreen;