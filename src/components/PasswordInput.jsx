import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

export default function PasswordInput() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  return (
    <div className="relative w-1/4 container mx-auto mt-20">
      <div className="relative">
        <input
          type={isPasswordVisible ? "text" : "password"}
          placeholder="Password"
          className="w-full px-4 py-2 text-base border border-gray-300 rounded outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1 pl-10" // Added pl-10 for padding left to accommodate the icon
        />
        {isPasswordVisible ? (
          <IoEyeOffOutline
            className="absolute top-1/2 transform -translate-y-1/2 left-3 cursor-pointer"
            onClick={togglePasswordVisibility}
          />
        ) : (
          <IoEyeOutline
            className="absolute top-1/2 transform -translate-y-1/2 left-3 cursor-pointer"
            onClick={togglePasswordVisibility}
          />
        )}
      </div>
    </div>
  );
}
