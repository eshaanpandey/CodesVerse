import classNames from "classnames";
import React from "react";
import ExampleArea from "./ExampleArea";
import ConstraintsArea from "./ConstraintsArea";

function ProblemDescription({ problem }) {
  if (!problem || Object.keys(problem).length === 0) {
    return (
      <div className="flex justify-center items-center text-lg font-bold text-gray-700">
        Loading problem description...
      </div>
    );
  }
  return (
    <div className="w-2/5 p-5 overflow-y-auto bg-white rounded-lg shadow-md mt-5 ml-1 h-full">
      <div className="flex flex-col w-full">
        <h1 className="text-3xl font-bold text-gray-800">{problem.heading}</h1>
        <div
          className={classNames(
            "text-lg font-semibold text-center mt-2 py-1 px-3 rounded-lg",
            {
              "bg-green-100 text-green-600": problem.difficulty === "Easy",
              "bg-yellow-100 text-yellow-600": problem.difficulty === "Medium",
              "bg-red-100 text-red-600": problem.difficulty === "Hard",
            }
          )}
        >
          {problem.difficulty}
        </div>
        <div className="h-px my-4 bg-gray-400"></div>
        <div className="text-lg text-gray-700">
          <p className="mb-4">{problem.statement}</p>
          {problem.examples &&
            problem.examples.map((example, index) => {
              return (
                <ExampleArea
                  key={index}
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
