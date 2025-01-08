import React from "react";

function CustomButton({
  text,
  bgColor,
  textColor,
  onPress,
  fontSize,
  hoverBgColor,
}) {
  return (
    <button
      onClick={onPress}
      className="w-full rounded-lg p-4 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300 hover:bg-gray-200"
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
