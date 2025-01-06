import React, { useState, Fragment } from "react";
import { useDispatch } from "react-redux";
import { Dialog, Transition } from "@headlessui/react";

import CustomButton from "../CustomButton";

import { runProgram, submitSolution } from "../../redux/reducers/solutions/solutionActions";

import { Triangle } from "react-loader-spinner";
import classNames from "classnames";
import { Editor } from "@monaco-editor/react";


function CompilerArea({ problemId }) {
  const [code, setCode] = useState(`#include<iostream>\nusing namespace std;\n\nint main(){\n\n    return 0;\n}`);
  const [solution, setSolution] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  function closeModal() {
    setSolution();
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function onRun() {
    dispatch(
      runProgram({ problemData: { code: code, language: "cpp" }, problemId })
    ).then((data) => {
      if (!data.payload.data) {
        setSolution({
          verdict: "Fail",
          message:
            data.payload.response.data.error.stderr.split("error:")[1] || "Unknown error",
        });
      } else {
        const verdict = data.payload.data.verdict === "Pass" ? "Pass" : "Fail";
        const message = data.payload.data.message || "Solution passed successfully";
        setSolution({
          verdict,
          message,
        });
      }
    });
    openModal();
  }

  function onSubmit() {
    dispatch(
      submitSolution({
        problemData: { code: code, language: "cpp" },
        problemId,
      })
    ).then((data) => {
      if (!data.payload.data) {
        setSolution({
          verdict: "Fail",
          message: data.payload.response.data.error.stderr.split("error:")[1],
        });
      } else {
        setSolution(data.payload.data.solution);
      }
    });
    openModal();
  }

  return (
    <>
      <div className="w-3/5 h-full p-5">
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex items-center justify-center min-h-full p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                    <div className="flex flex-col items-center justify-center w-full h-full" style={{ fontFamily: "cursive" }}>
                      {solution ? (
                        <>
                          <h1 className="text-xl">Your Submission</h1>
                          <div className="w-full h-px my-4 bg-black"></div>
                          <div className={classNames("text-xl", {
                            "text-green-500": solution.verdict === "Pass",
                            "text-red-500": solution.verdict === "Fail",
                          })}>
                            <h1>Verdict : {solution.verdict || "Unknown"}</h1>
                            <h1>Status : {solution.message || "No status available"}</h1>
                          </div>
                        </>
                      ) : (
                        <Triangle height="100" width="100" color="#FF0099" ariaLabel="triangle-loading" visible={true} />
                      )}
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        <Editor
          height="75vh"
          defaultLanguage="cpp"
          defaultValue={`#include<iostream>
using namespace std;

int main() {
    return 0;
}`}
          onChange={(value) => setCode(value)}
          theme="vs-dark"
        />

        <div className="flex flex-row justify-end px-4">
          <div className="flex items-center justify-center p-2 text-lg">
            <CustomButton
              bgColor="#D3D3D3"
              textColor="black"
              text={"Run Code"}
              fontSize={"1.125rem"}
              onPress={onRun}
            />
          </div>
          <div className="flex items-center justify-center p-2 text-lg">
            <CustomButton
              bgColor="#32CD32"
              textColor="black"
              text={"Submit"}
              fontSize={"1.125rem"}
              onPress={onSubmit}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CompilerArea;
