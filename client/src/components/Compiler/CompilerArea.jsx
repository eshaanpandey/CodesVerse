import React, { useState, Fragment, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dialog, Transition } from "@headlessui/react";
import CustomButton from "../CustomButton";
import Confetti from "react-confetti";
import {
  runProgram,
  submitSolution,
} from "../../redux/reducers/solutions/solutionActions";
import { Hourglass } from "react-loader-spinner";
import classNames from "classnames";
import { Editor } from "@monaco-editor/react";
import { useWindowSize } from "react-use";
import { useNavigate } from "react-router-dom";
import { getLoggedInUser } from "../../redux/reducers/user/userActions";

function CompilerArea({ problemId }) {
  const [code, setCode] = useState(
    `#include<iostream>\nusing namespace std;\n\nint main(){\n    //Write your code here\n\n    return 0;\n}`
  );
  const [solution, setSolution] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const dispatch = useDispatch();
  const { width, height } = useWindowSize();
  const isLoggedIn = useSelector((state) => state.authReducer.isAuthenticated);
  const navigate = useNavigate();

  function closeModal() {
    setSolution();
    setIsOpen(false);
    setShowConfetti(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const onRun = useCallback(() => {
    if (!isLoggedIn) {
      setSolution({
        verdict: "Login Required",
        message: "You need to log in to run the code.",
        isLoginPrompt: true,
      });
      openModal();
      return;
    }

    dispatch(
      runProgram({ problemData: { code: code, language: "cpp" }, problemId })
    ).then((data) => {
      if (!data.payload.data) {
        const error = data.payload.response?.data?.error;
        setSolution({
          verdict: "Fail",
          message:
            error?.stderr?.split("error:")[1] || error || "Unknown error",
        });
      } else {
        const verdict = data.payload.data.verdict === "Pass" ? "Pass" : "Fail";
        const message =
          data.payload.data.message || "Solution passed successfully";
        setSolution({
          verdict,
          message,
        });
      }
    });
    openModal();
  }, [code, dispatch, problemId, isLoggedIn]);

  const onSubmit = useCallback(() => {
    if (!isLoggedIn) {
      setSolution({
        verdict: "Login Required",
        message: "You need to log in to submit the code.",
        isLoginPrompt: true,
      });
      openModal();
      return;
    }

    dispatch(
      submitSolution({
        problemData: { code: code, language: "cpp" },
        problemId,
      })
    ).then((data) => {
      if (!data.payload.data) {
        const error = data.payload.response?.data?.error;
        setSolution({
          verdict: "Fail",
          message:
            error?.stderr?.split("error:")[1] || error || "Unknown error",
        });
      } else {
        const verdict =
          data.payload.data.solution.verdict === "Pass" ? "Pass" : "Fail";
        const message =
          // data.payload.data.solution.message || "Solution failed!";
          data.payload.data.solution.verdict === "Pass"
            ? "Solution passed successfully!"
            : "Solution failed!";
        setSolution({
          verdict,
          message,
        });

        if (verdict === "Pass") {
          dispatch(getLoggedInUser());
          setShowConfetti(true);
          setTimeout(() => setShowConfetti(false), 5000);
        }
      }
    });
    openModal();
  }, [code, dispatch, problemId, isLoggedIn]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "'") {
        onRun();
      } else if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        onSubmit();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [code, onRun, onSubmit]);

  return (
    <>
      {showConfetti && <Confetti width={width} height={height} />}
      <div className="w-full lg:w-3/5 h-full py-4">
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
                    <div className="flex flex-col items-center justify-center w-full h-full space-y-4 text-center">
                      {solution ? (
                        <>
                          {solution.isLoginPrompt ? (
                            <div className="text-lg font-medium text-red-600">
                              <p className="mb-2">{solution.message}</p>
                              <CustomButton
                                text="Login / Sign Up"
                                onPress={() => navigate("/login")}
                              />
                            </div>
                          ) : (
                            <>
                              <h1 className="text-2xl font-semibold text-gray-800">
                                Your Submission
                              </h1>
                              <div className="w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
                              <div
                                className={classNames("text-lg font-medium", {
                                  "text-green-600": solution.verdict === "Pass",
                                  "text-red-600": solution.verdict === "Fail",
                                })}
                              >
                                <p className="mb-2">
                                  Verdict:{" "}
                                  <span className="font-bold">
                                    {solution.verdict || "Unknown"}
                                  </span>
                                </p>
                                <p>
                                  Status:{" "}
                                  <span className="font-light">
                                    {solution.message || "No status available"}
                                  </span>
                                </p>
                              </div>
                            </>
                          )}
                        </>
                      ) : (
                        <div className="flex flex-col items-center">
                          <Hourglass
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="hourglass-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            colors={["#306cce", "#72a1ed"]}
                          />
                          <p className="mt-4 text-sm text-gray-500">
                            Processing your submission, please wait...
                          </p>
                        </div>
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
          value={code}
          onChange={(value) => setCode(value)}
          theme="vs-dark"
          options={{
            fontSize: 15,
            automaticLayout: "true",
          }}
        />

        <div className="flex justify-center space-x-4 mt-4">
          <div className="relative group">
            <CustomButton
              bgColor="#D3D3D3"
              hoverBgColor="#bbbdbf"
              textColor="black"
              text="Run"
              fontSize="1.125rem"
              onPress={onRun}
            />
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100">
              {navigator.platform.includes("Mac") ? "Cmd+'" : "Ctrl+'"}
            </div>
          </div>
          <div className="relative group">
            <CustomButton
              bgColor="#32CD32"
              hoverBgColor="#1eb332"
              textColor="black"
              text="Submit"
              fontSize="1.125rem"
              onPress={onSubmit}
            />
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100">
              {navigator.platform.includes("Mac") ? "Cmd+Enter" : "Ctrl+Enter"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompilerArea;
