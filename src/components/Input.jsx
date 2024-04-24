import React from "react";

const Input = ({ id, label, type = "text", ...rest }) => {
  return (
    <div className="relative">
      <input
        type={type}
        id={id}
        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-100 appearance-none dark:text-white dark:border-gray-600 dark:focus:[#199771] focus:outline-none focus:ring-0 focus:border-[#199771] peer"
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
