import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { Link } from "react-router-dom";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const SignIn = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }
  return (
    <>
      <div className="max-w-[420px] mx-auto border border-green-100 shadow-sm p-5 rounded-xl mt-32">
        <div>
          <p className="text-gray-800 mb-1 text-lg font-semibold"> Sign In</p>
          <p className="text-gray-400 mb-4 text-sm font-semibold">
            {" "}
            Connect With Us
          </p>
        </div>

        <form className="space-y-4">
          <Input id="email" label="Email" placeholder=" " />

          <div className="relative">
            <Input
              type={isPasswordVisible ? "text" : "password"}
              id="pass"
              label="Password"
              placeholder=" "
            />
          </div>
        </form>

        <div className="absolute z-10 transform -translate-y-[32px] translate-x-[350px] cursor-pointer text-gray-600">
          {isPasswordVisible ? (
            <IoEyeOffOutline onClick={togglePasswordVisibility} />
          ) : (
            <IoEyeOutline onClick={togglePasswordVisibility} />
          )}
        </div>

        <div className="justify-center flex mx-auto mt-4">
          {" "}
          <Button
            width="full"
            label="Sign In"
            onClick={() => console.log("Button clicked!")}
          />
        </div>
        <p className="text-xs mt-3 text-gray-800">
          Not a member yet?{" "}
          <Link to="/signUp" className="text-[#199771]">
            Sign Up
          </Link>
        </p>
      </div>
    </>
  );
};

export default SignIn;
