import React, { useEffect, useState } from "react";

import LogoHeaderArea from "../components/Headers/LogoHeaderArea";
import ProblemDescription from "../components/Problems/ProblemDescription";
import ExampleArea from "../components/Problems/ExampleArea";
// import ConstraintsArea from "../components/Problems/ConstraintsArea";
import ProblemBar from "../components/Problems/ProblemBar";

import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProblemById } from "../redux/reducers/problems/problemsActions";

function SubmitProblemScreen() {
    const [problem, setProblem] = useState({});
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
          style={{ fontFamily: "serif" }}
        >
          <ProblemDescription problem={problem} />

          <div 
            className="flex flex-row w-full h-5/6"
            style={{ fontFamily: "cursive" }}>
            <ProblemBar/>
          </div>

          {/* <CompilerArea problemId={_id} /> */}
        </div>
      </div>
    );
  }
  
  export default SubmitProblemScreen;