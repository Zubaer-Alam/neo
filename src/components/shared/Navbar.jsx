// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../../provider/AuthProvider";

// const Navbar = () => {
//   const {token, userIdData } = useContext(AuthContext);
  
//   return (
//     <div>
//       <nav className="flex items-center justify-between flex-wrap bg-teal-600 py-6 lg:px-[65px] px-4">
//         <div className="flex items-center flex-shrink-0 text-white mr-6">
//           <Link to="/" className="font-semibold text-xl tracking-tight">
//             Automatica.Software
//           </Link>
//         </div>

//         <div className="flex items-center w-auto gap-5">
//           <div>
//             <Link
//               to=""
//               className="inline-block text-sm px-4 py-2 leading-none border border-red-600 rounded bg-red-600 text-white font-semibold hover:border-white hover:text-white hover:bg-transparent"
//             >
//               Log Out
//             </Link>
//           </div>
//           <div>
//             <Link
//               to="/signIn"
//               className="inline-block text-sm px-4 py-2 leading-none border rounded bg-white text-teal-600 font-semibold border-white hover:text-white hover:bg-transparent"
//             >
//               Sign In
//             </Link>
//           </div>
//           <div>
//             <Link
//               to="/signUp"
//               className="inline-block text-sm px-4 py-2 leading-none border rounded font-semibold text-white border-white hover:border-transparent hover:text-teal-600 hover:bg-white"
//             >
//               Sign Up
//             </Link>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../../provider/AuthProvider";

// const Navbar = () => {
//   const { tokenData } = useContext(AuthContext);
  
//   return (
//     <div>
//       <nav className="flex items-center justify-between flex-wrap bg-teal-600 py-6 lg:px-[65px] px-4">
//         <div className="flex items-center flex-shrink-0 text-white mr-6">
//           <Link to="/" className="font-semibold text-xl tracking-tight">
//          NEO
//           </Link>
//         </div>

//         <div className="flex items-center w-auto gap-5">
//           {( tokenData !== undefined && tokenData !== "") ? (
//             <div>
//               <Link
//                 to=""
//                 className="inline-block text-sm px-4 py-2 leading-none border border-red-600 rounded bg-red-600 text-white font-semibold hover:border-white hover:text-white hover:bg-transparent"
//               >
//                 Log Out
//               </Link>
//             </div>
//           ) : (
//             <>
//               <div>
//                 <Link
//                   to="/signIn"
//                   className="inline-block text-sm px-4 py-2 leading-none border rounded bg-white text-teal-600 font-semibold border-white hover:text-white hover:bg-transparent"
//                 >
//                   Sign In
//                 </Link>
//               </div>
//               <div>
//                 <Link
//                   to="/signUp"
//                   className="inline-block text-sm px-4 py-2 leading-none border rounded font-semibold text-white border-white hover:border-transparent hover:text-teal-600 hover:bg-white"
//                 >
//                   Sign Up
//                 </Link>
//               </div>
//             </>
//           )}
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
  const { tokenData, setTokenData,setUserIdData,userIdData } = useContext(AuthContext);

  const handleLogout = () => {
    // Remove token from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("userId");

    // Clear token data in context
    setTokenData("");
    setUserIdData("");
    window.location.href ="/signIn"
    
  };


  

  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-teal-600 py-6 lg:px-[65px] px-4">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link to="/" className="font-semibold text-xl tracking-tight">
            NEO
          </Link>
        </div>

        <div className="flex items-center w-auto gap-5">
          {tokenData ? (
            <div className="flex gap-3">
               <Link to="/profile"
      
                className="inline-block text-sm px-4 py-2 leading-none border border-black rounded bg-white text-black shadow-sm font-semibold hover:border-white hover:text-white hover:bg-transparent"
              >
               Profile
              </Link>
              <button
                onClick={handleLogout}
                className="inline-block text-sm px-4 py-2 leading-none border border-red-600 rounded bg-red-600 text-white font-semibold hover:border-white hover:text-white hover:bg-transparent"
              >
                Log Out
              </button>
            </div>
          ) : (
            <>
              <div>
                <Link
                  to="/signIn"
                  className="inline-block text-sm px-4 py-2 leading-none border rounded bg-white text-teal-600 font-semibold border-white hover:text-white hover:bg-transparent"
                >
                  Sign In
                </Link>
              </div>
              <div>
                <Link
                  to="/signUp"
                  className="inline-block text-sm px-4 py-2 leading-none border rounded font-semibold text-white border-white hover:border-transparent hover:text-teal-600 hover:bg-white"
                >
                  Sign Up
                </Link>
              </div>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

