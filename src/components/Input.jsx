import React from "react";

const Input = ({ id, value, width, label, type = "text", ...rest }) => {
  const widthClassMap = {
    full: "w-full",
    mid: "w-1/2",
    small: "w-auto",
    px500: "w-[500px]",
  };

  const widthClass = widthClassMap[width] || "w-full";

  return (
    <div className="relative">
      <input
        value={value}
        type={type}
        id={id}
        // autoFocus
        // required
        className={`focus:cursor-pointer  block px-2.5 pb-2.5 pt-4 text-sm text-gray-900 bg-transparent rounded-lg border border-gray-200 appearance-none dark:text-white dark:border-gray-600 dark:focus:[#199771] focus:outline-none focus:ring-0 focus:border-[#199771] peer ${widthClass}`}
        {...rest}
      />
      <label
        htmlFor={id}
        className="absolute text-sm text-[#9AA0A6] dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-[#199771] peer-focus:dark:text-[#199771] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
