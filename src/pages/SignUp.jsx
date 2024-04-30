import React, { useContext, useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { Link } from "react-router-dom";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { AuthContext } from "../provider/AuthProvider";

const SignUp = () => {
  const { tokenData, setTokenData } = useContext(AuthContext);

  if (tokenData) {
    window.location.href ="/"
  }
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const response = await fetch("http://162.0.237.97:3000/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
          phone,
          address,
        }),
      });

      console.log(response)
      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      const token = JSON.stringify(data.token);
      const userId = JSON.stringify(data.userId);
      localStorage.setItem('userId', userId);
      localStorage.setItem('token', token);
      toast.success("Signup successful");
      setEmail("");
      setPassword("");
      setAddress("");
      setConfirmPassword("");
      setFirstName("");
      setLastName("");
      setPhone("");
      window.location.href ="/"
    } catch (error) {
      toast.error("Incorrect inputs");
    }
  };

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }
  return (
    <>
      <Toaster />
      <div className="max-w-[420px] mx-auto border border-green-100 shadow-sm p-5 rounded-xl mt-10">
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
              <Input
                value={firstName}
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
                id="fn"
                label="First Name"
                placeholder=" "
              />
              <Input
                value={lastName}
                type="text"
                onChange={(e) => setLastName(e.target.value)}
                id="ln"
                label="Last Name"
                placeholder=" "
              />
            </div>
            <Input
              value={address}
              type="text"
              onChange={(e) => setAddress(e.target.value)}
              id="address"
              label="Address"
              placeholder=" "
            />
            <div className="flex gap-5 justify-between">
              <Input
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                label="Email"
                placeholder=" "
              />
              <Input
                value={phone}
                type="text"
                onChange={(e) => setPhone(e.target.value)}
                id="phone"
                label="Phone Number"
                placeholder=" "
              />
            </div>

            <div className="relative">
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={isPasswordVisible ? "text" : "password"}
                id="pass"
                label="Password"
                placeholder=" "
              />
            </div>

            <div className="relative">
              <Input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
            label="Sign Up"
            textColor="white"
            bgColor="teal-600"
            focusColor="gray-100"
            hoverColor="teal-900"
            borderColor=""
            onClick={handleSignUp}
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
