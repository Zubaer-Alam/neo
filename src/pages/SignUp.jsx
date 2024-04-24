import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { Link } from "react-router-dom";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const SignUp = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }
  return (
    <>
      <div className="max-w-[420px] mx-auto border border-green-100 shadow-sm p-5 rounded-xl mt-20">
        <div>
          <p className="text-gray-800 mb-1 text-lg font-semibold"> Sign Up</p>
          <p className="text-gray-400 mb-4 text-sm font-semibold">
            {" "}
            Become a Member
          </p>
        </div>

        <form>
          <div className="space-y-4">
            <div className="flex gap-5 justify-between">
              <Input id="fn" label="First Name" placeholder=" " />
              <Input id="ln" label="Last Name" placeholder=" " />
            </div>
            <Input id="address" label="Address" placeholder=" " />
            <div className="flex gap-5 justify-between">
              <Input id="email" label="Email" placeholder=" " />
              <Input id="phone" label="Phone Number" placeholder=" " />
            </div>

            <div className="relative">
              <Input
                type={isPasswordVisible ? "text" : "password"}
                id="pass"
                label="Password"
                placeholder=" "
              />
            </div>

            <div className="relative">
              <Input
                type={isPasswordVisible ? "text" : "password"}
                id="pass"
                label="Confirm Password"
                placeholder=" "
              />
            </div>
          </div>
        </form>

        <div className="absolute z-10 transform -translate-y-[96px] translate-x-[350px] cursor-pointer text-gray-600">
          {isPasswordVisible ? (
            <IoEyeOffOutline onClick={togglePasswordVisibility} />
          ) : (
            <IoEyeOutline onClick={togglePasswordVisibility} />
          )}
        </div>

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
          Already a member?{" "}
          <Link to="/signIn" className="text-[#199771]">
            Sign In
          </Link>
        </p>
      </div>
    </>
  );
};

export default SignUp;
