import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const [menuOpen, setMenuOpen] = useState(false);

  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <>
      {/* ✅ Fixed Header with Shadow */}
      <header className="fixed top-0 left-0 w-full bg-pink-200 shadow-lg z-50">
        <div className="flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img alt="Logo" className="w-40 sm:w-48" src={LOGO_URL} />
          </div>

          {/* 🔹 Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          {/* Navigation Links */}
          <nav
            className={`absolute md:relative top-16 left-0 md:top-auto md:left-auto bg-white md:bg-transparent w-full md:w-auto shadow-md md:shadow-none transition-transform duration-300 ${
              menuOpen ? "block" : "hidden"
            } md:flex md:items-center`}
          >
            <ul className="flex flex-col md:flex-row items-center gap-6 p-4 md:p-0 text-lg font-medium text-gray-700">
              <li className="hidden md:block">
                Online Status: {onlineStatus ? "✅" : "❌"}
              </li>
              <li>
                <Link to="/" className="hover:text-pink-500 transition-all">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-pink-500 transition-all">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-pink-500 transition-all">
                  Contact us
                </Link>
              </li>
              <li>
                <Link to="/grocery" className="hover:text-pink-500 transition-all">
                  Grocery
                </Link>
              </li>
              <li className="font-bold">
                <Link to="/cart" className="hover:text-pink-500 transition-all">
                🛒({cartItems.length})
                </Link>
              </li>
              <button
                className="px-6 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-800 transition-all"
                onClick={() =>
                  setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login")
                }
              >
                {btnNameReact}
              </button>
              <li className="text-lg font-semibold bg-white text-blue-600 px-3 py-1 rounded-lg shadow-md">{loggedInUser}</li>
            </ul>
          </nav>
        </div>
      </header>

      {/* ✅ Push Content Down to Avoid Overlap */}
      <div className="pt-[180px] md:pt-[170px]"></div>
    </>
  );
};

export default Header;
