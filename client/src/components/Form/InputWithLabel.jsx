import React from "react";

function InputWithLabel({ label, placeholder, type, id, handleChange }) {
  return (
    <div className="p-2 mb-6 w-full">
      <label htmlFor={id} className="text-md font-medium text-gray-800 dark:text-gray-200">{label}</label>
      <input
        onChange={handleChange}
        id={id}
        className="w-full p-4 mt-2 text-xl bg-gray-100 dark:bg-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-4 focus:ring-blue-600 placeholder-opacity-75 transition-all"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputWithLabel;
