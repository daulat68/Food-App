import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import logo from "../assets/logo.png";

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
        <div className="flex justify-between items-center px-6 h-40 py-4">
          {/* Logo */}
          <div className="flex items-center">
          <img alt="Logo" className="w-40 h-30 rounded-2xl sm:w-48" src={logo} />
          </div>

          {/* 🔹 Mobile Menu Button */}
          <button
            className="text-2xl ml-auto mr-4 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          {/* Navigation Links */}
          <nav className={`absolute top-0 left-0 w-64 h-screen bg-white shadow-lg transition-transform duration-300 
            transform ${menuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"} md:relative md:w-auto 
            md:h-auto md:bg-transparent md:shadow-none md:translate-x-0 md:opacity-100`}
            style={{ zIndex: 40 }}
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
      <div className="pt-[180px] md:pt-[170px] "></div>
    </>
  );
};

export default Header;
