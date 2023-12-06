import React from "react";

function InputWithLabel({ label, palceholder, type, id, handleChange }) {
  return (
    <div className="p-1 mb-4">
      <h1 className="text-md">{label}</h1>
      <input
        onChange={handleChange}
        id={id}
        className="p-2 mt-2 text-xl bg-gray-300 rounded-md"
        type={type}
        placeholder={palceholder}
        style={{ border: "none" }}
      />
    </div>
  );
}

export default InputWithLabel;