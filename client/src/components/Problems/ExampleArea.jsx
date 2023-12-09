import React from "react";

function ExampleArea({ number, input, output, explanation }) {
    if(!explanation)
    explanation = 'No Explanation Needed'
  return (
    <div className="mt-4 font-serif">
      <h1>Example {number}</h1>
      <div className="flex flex-col w-full p-4 mt-2 rounded-lg bg-green-400 font-serif">
        <h1>Input : {input}</h1>
        <h1>Output : {output}</h1>
        <h1>Explanation : {explanation}</h1>
      </div>
    </div>
  );
}

export default ExampleArea;