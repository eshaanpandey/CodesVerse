import React, { useEffect, useState } from "react";

import LogoHeaderArea from "../components/Headers/LogoHeaderArea";
import ProblemDescription from "../components/Problems/ProblemDescription";

import { useParams } from "react-router-dom";

function SubmitProblemScreen() {
    const [problem, setProblem] = useState({});
    // const dispatch = useDispatch();
    const { _id } = useParams();
  
    // useEffect(() => {
    //   dispatch(getProblemById(_id)).then((data) => {
    //     setProblem(data.payload.data.problem);
    //   });
    // }, []);
  
    return (
      <div className="w-full h-screen text-white bg-zinc-900">
        <div className="" style={{ height: "13%" }}>
          <LogoHeaderArea />
        </div>
        <div
          className="flex flex-row w-full h-5/6"
          style={{ fontFamily: "cursive" }}
        >
          <ProblemDescription problem={problem} />
          {/* <CompilerArea problemId={_id} /> */}
        </div>
      </div>
    );
  }
  
  export default SubmitProblemScreen;