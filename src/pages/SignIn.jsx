// import React, { useContext, useState } from "react";
// import Input from "../components/Input";
// import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
// import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
// import Button from "../components/Button";
// import { Toaster, toast } from 'react-hot-toast';
// import { AuthContext } from "../provider/AuthProvider";

// const SignIn = () => {
//   const { tokenData, setTokenData } = useContext(AuthContext);

//   if (tokenData) {
//     window.location.href ="/"
//   }
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSignIn = async () => {
//     try {
//       const response = await fetch('http://162.0.237.97:3000/users/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       if (!response.ok) {
//         throw new Error('Sign In failed');
//       }

//       const data = await response.json();
//       const token = JSON.stringify(data.token);
//       const userId = JSON.stringify(data.userId);
      
//       localStorage.setItem('userId', userId);
//       localStorage.setItem('token', token);
//       toast.success('Sign In successful');
//       setEmail('');
//       setPassword('');
//       window.location.href ="/"
  
//     } catch (error) {
//       toast.error('Incorrect email or password');
  
//     }
//   };


//   const [isPasswordVisible, setIsPasswordVisible] = useState(false);
//   function togglePasswordVisibility() {
//     setIsPasswordVisible((prevState) => !prevState);
//   }
//   return (
//     <>
//      <Toaster />
//       <div className="max-w-[420px] mx-auto border border-green-100 shadow-sm p-5 rounded-xl mt-10">
//         <div>
//           <p className="text-gray-800 mb-1 text-lg font-semibold"> Sign In</p>
//           <p className="text-gray-400 mb-4 text-sm font-semibold">
//             {" "}
//             Connect With Us
//           </p>
//         </div>

//         <form className="space-y-4">
//           <Input 
//           id="email"
//           label="Email" 
//           placeholder=" "
//           value={email}
//           onChange={(e) => setEmail(e.target.value)} />

//           <div className="relative">
//             <Input
//               type={isPasswordVisible ? "text" : "password"}
//               id="pass"
//               label="Password"
//               placeholder=" "
//               value={password}
//               onChange={(e) => setPassword(e.target.value)} 
//             />
//           </div>
//         </form>

//         <div className="absolute z-10 transform -translate-y-[32px] translate-x-[350px] cursor-pointer text-gray-600">
//           {isPasswordVisible ? (
//             <IoEyeOffOutline onClick={togglePasswordVisibility} />
//           ) : (
//             <IoEyeOutline onClick={togglePasswordVisibility} />
//           )}
//         </div>

//         <div className="justify-center flex mx-auto mt-4">
//           {" "}
          
//           <Button
//             width="full"
//             label="Sign In"
//             textColor="white"
//             bgColor="teal-600"
//             focusColor="gray-100"
//             hoverColor="teal-900"
//             borderColor=""
//             onClick={handleSignIn}
//           />
//         </div>
 
//         <p className="text-xs mt-3 text-gray-800">
//           Not a member yet?{" "}
//           <Link to="/signUp" className="text-[#199771]">
//             Sign Up
//           </Link>
//         </p>
//       </div>
//     </>
//   );
// };

// export default SignIn;


import React, { useContext, useState } from "react";
import Input from "../components/Input";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import Button from "../components/Button";
import { Toaster, toast } from 'react-hot-toast';
import { AuthContext } from "../provider/AuthProvider";

const SignIn = () => {
  const { tokenData, setTokenData } = useContext(AuthContext);

  if (tokenData) {
    window.location.href ="/"
  }
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const response = await fetch('http://162.0.237.97:3000/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Sign In failed');
      }

      const data = await response.json();
      const token = JSON.stringify(data.token);
      const userId = JSON.stringify(data.userId);
      
      localStorage.setItem('userId', userId);
      localStorage.setItem('token', token);
      toast.success('Sign In successful');
      setEmail('');
      setPassword('');
      window.location.href ="/"
  
    } catch (error) {
      toast.error('Incorrect email or password');
    }
  };

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSignIn();
    }
  };

  return (
    <>
     <Toaster />
      <div className="max-w-[420px] mx-auto border border-green-100 shadow-sm p-5 rounded-xl mt-10">
        <div>
          <p className="text-gray-800 mb-1 text-lg font-semibold"> Sign In</p>
          <p className="text-gray-400 mb-4 text-sm font-semibold">
            {" "}
            Connect With Us
          </p>
        </div>

        <form className="space-y-4">
          <Input 
          id="email"
          label="Email" 
          placeholder=" "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyPress={handleKeyPress} />

          <div className="relative">
            <Input
              type={isPasswordVisible ? "text" : "password"}
              id="pass"
              label="Password"
              placeholder=" "
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              onKeyPress={handleKeyPress}
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
          <Button
            width="full"
            label="Sign In"
            textColor="white"
            bgColor="teal-600"
            focusColor="gray-100"
            hoverColor="teal-900"
            borderColor=""
            onClick={handleSignIn}
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
