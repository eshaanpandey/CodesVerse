import React from "react";

function ExampleArea({ number, input, output, explanation }) {
  if (!explanation) explanation = "No Explanation Needed";

  return (
    <div className="mt-4 font-serif">
      <h1 className="text-lg font-bold text-gray-800">Example {number}</h1>
      <div className="flex flex-col w-full p-4 mt-2 rounded-lg bg-green-400 shadow-md text-black">
        <p className="mb-2">
          <span className="font-semibold">Input:</span> {input}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Output:</span> {output}
        </p>
        <p>
          <span className="font-semibold">Explanation:</span> {explanation}
        </p>
      </div>
    </div>
  );
}

export default ExampleArea;
