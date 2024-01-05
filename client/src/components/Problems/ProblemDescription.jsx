import classNames from "classnames";
import React from "react";
import ExampleArea from "./ExampleArea";
import ConstraintsArea from "./ConstraintsArea";

function ProblemDescription({ problem }) {
  return (
    <div className="w-2/5 p-5 overflow-y-auto">
      <div className="flex flex-col w-full">
        <h1 className="text-2xl font-bold">{problem.name}</h1>
        <div
          className={classNames("text-lg", {
            "text-green-500": problem.difficulty === "Easy",
            "text-yellow-500": problem.difficulty === "Medium",
            "text-red-500": problem.difficulty === "Hard",
          })}
        >
          <h1>{problem.difficulty}</h1>
        </div>
        <div className="h-px my-3 bg-gray-500"></div>
        <div className="text-xl">
          <p>{problem.statement}</p>
          {problem.examples &&
            problem.examples.map((example, index) => {
              return (
                <ExampleArea
                  number={index + 1}
                  input={example.input}
                  output={example.output}
                  explanation={example.explanation}
                />
              );
            })}
          <ConstraintsArea constraints={problem.constraints} />
        </div>
      </div>
    </div>
  );
}

export default ProblemDescription;