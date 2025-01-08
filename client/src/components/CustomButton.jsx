import React from "react";

function CustomButton({ text, bgColor, textColor, onPress, fontSize, hoverBgColor }) {
  return (
    <button
      onClick={onPress}
      className={`w-full rounded-lg flex justify-center p-2 transition duration-300`}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        fontSize: fontSize,
      }}
      onMouseEnter={(e) => (e.target.style.backgroundColor = hoverBgColor)}
      onMouseLeave={(e) => (e.target.style.backgroundColor = bgColor)}
    >
      {text}
    </button>
  );
}

export default CustomButton;