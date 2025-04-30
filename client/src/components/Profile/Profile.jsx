import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { Dialog } from "@headlessui/react";
import { FiCode } from "react-icons/fi";
import { getLoggedInUser } from "../../redux/reducers/user/userActions";
import { useNavigate, Link } from "react-router-dom";

export default function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, solvedProblems, error } = useSelector(
    (state) => state.userReducer
  );

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSolution, setCurrentSolution] = useState(null);

  useEffect(() => {
    dispatch(getLoggedInUser());
  }, [dispatch]);

  const openModal = (solution) => {
    setCurrentSolution(solution);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentSolution(null);
  };

  // While loading initial profile data
  if (user === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-8">
        <p className="text-gray-700 dark:text-gray-300">Loading profile…</p>
      </div>
    );
  }

  //If user is logged out
  if (user === null) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 p-8">
        <p className="mb-4 text-xl text-gray-700 dark:text-gray-300">
          You need to log in to view your profile.
        </p>
        <button
          onClick={() => navigate("/login")}
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg"
        >
          Go to Login
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      {/* User Info Card */}
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow p-8 mb-8">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          {user.name}’s Profile
        </h2>
        <div className="flex flex-col sm:flex-row justify-between px-10 text-gray-700 dark:text-gray-300 space-y-6 sm:space-y-0">
          <div>
            <p className="font-semibold">Username</p>
            <p>{user.username}</p>
          </div>
          <div>
            <p className="font-semibold">Email</p>
            <p>{user.email}</p>
          </div>
          <div>
            <p className="font-semibold">Joined On</p>
            <p>{new Date(user.createdAt).toLocaleDateString()}</p>
          </div>
        </div>
      </div>

      {/* Solved Problems Table */}
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow p-6">
        <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Solved Problems
        </h3>

        {solvedProblems.length === 0 ? (
          <div className="text-center">
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              You haven’t solved any problems yet.
            </p>
            <button
              onClick={() => navigate("/problems")}
              className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded"
            >
              Go Solve Problems
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Problem
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Submitted On
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Code
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {solvedProblems.map((p) => (
                  <tr key={p.solutionId}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Link
                        to={`/problems/${p._id}`}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        {p.heading}
                      </Link>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">
                      {new Date(p.submittedOn).toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <button
                        onClick={() => openModal(p)}
                        className="inline-flex items-center p-2 bg-indigo-100 hover:bg-indigo-200 rounded"
                        title="View submitted code"
                      >
                        <FiCode size={20} className="text-indigo-600" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Code Modal */}
      <Dialog
        open={isModalOpen}
        onClose={closeModal}
        className="fixed inset-0 z-10 flex items-center justify-center p-4"
      >
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />

        <motion.div
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-5xl w-full p-8 relative"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <Dialog.Title className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">
            {currentSolution?.heading}
          </Dialog.Title>
          <p className="text-sm text-gray-600 pb-4 dark:text-gray-400 mb-4">
            Submitted on:{" "}
            {new Date(currentSolution?.submittedOn).toLocaleString()}
          </p>
          <pre className="bg-gray-100 dark:bg-gray-900 dark:text-gray-300 p-4 rounded h-80 overflow-auto text-sm">
            {currentSolution?.submittedCode}
          </pre>
          <button
            onClick={closeModal}
            className="mt-6 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded"
          >
            Close
          </button>
        </motion.div>
      </Dialog>
    </div>
  );
}
