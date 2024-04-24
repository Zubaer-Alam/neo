import React from "react";

const Button = ({ label, onClick, width }) => {
  const widthClassMap = {
    full: "w-full",
    "1/2": "w-1/2",
    "1/3": "w-1/3",
  };

  const widthClass = widthClassMap[width] || "w-full";

  return (
    <button
      type="button"
      className={`focus:outline-none text-white bg-[#17B686] hover:bg-[#199771] focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 ${widthClass}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
