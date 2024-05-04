import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FaUserCircle, FaUserAlt } from "react-icons/fa";

const Navbar = () => {
  const { tokenData, setTokenData, setUserIdData, userIdData } = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const dropdownRef = React.useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  const handleLogout = () => {
    // Remove token from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("userId");

    // Clear token data in context
    setTokenData("");
    setUserIdData("");
    window.location.href = "/signIn";
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-teal-600 py-6 lg:px-[65px] px-4">
        <div className="flex gap-4 text-sm items-center flex-shrink-0 text-white mr-6">
          <Link to="/" className="font-extralight text-3xl tracking-tight pe-5">
            NEO
          </Link>
          {tokenData ? (
            <Link to="/" className="font-semibold tracking-tight">
              My Products
            </Link>
          ) : (
            ""
          )}
          <Link to="/allProducts" className="font-semibold tracking-tight">
            All Products
          </Link>
        </div>

        <div className="flex items-center w-auto gap-5">
          {tokenData ? (
            <div className="relative inline-block" ref={dropdownRef}>
              <div className="cursor-pointer" onClick={toggleDropdown}>
                <FaUserAlt size={30} className="text-white" />
              </div>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 bg-white shadow-lg rounded overflow-hidden">
                  <Link
                    to="/profile"
                    className="block px-4 py-3 text-gray-800 hover:bg-gray-200 transition-colors duration-200"
                  >
                    Profile
                  </Link>
                  <a
                    href="#"
                    className="block px-4 py-3 text-gray-800 hover:bg-gray-200 transition-colors duration-200"
                    onClick={handleLogout}
                  >
                    Logout
                  </a>
                </div>
              )}
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