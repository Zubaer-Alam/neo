import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-teal-600 py-6 lg:px-[65px] px-4">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link to="/" className="font-semibold text-xl tracking-tight">
            Automatica.Software
          </Link>
        </div>

        <div className="flex items-center w-auto gap-5">
          <div>
            <Link
              to=""
              className="inline-block text-sm px-4 py-2 leading-none border border-red-600 rounded bg-red-600 text-white font-semibold hover:border-white hover:text-white hover:bg-transparent"
            >
              Log Out
            </Link>
          </div>
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
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
