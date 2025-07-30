import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const itemCount = cartItems.length;

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-800 shadow-md sticky top-0 z-50 w-full">
      <div className="w-[90%] mx-auto flex items-center justify-between h-14">
        
        <Link to="/" className="text-lg font-bold text-white">
          ShopCart
        </Link>

        
        <div className="flex items-center gap-5">
          
          <Link
            to="/cart"
            className="relative flex items-center justify-center text-white hover:text-blue-300 w-6 h-6"
          >
            <span className="text-3xl">🛒</span>
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                {itemCount}
              </span>
            )}
          </Link>

          
          <div
            className="md:hidden flex flex-col justify-center items-center w-6 h-6 cursor-pointer z-50"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div
              className={`w-6 h-[1.5px] bg-white mb-[5px] transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <div
              className={`w-6 h-[1.5px] bg-white mb-[5px] transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <div
              className={`w-6 h-[1.5px] bg-white transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </div>
        </div>
      </div>

      
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-blue-900 text-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-4 p-6 mt-20 text-base">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-300 transition duration-200"
          >
            🏠 Home
          </Link>

          <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            🔐 Login
          </Link>

          <Link
            to="/signup"
            onClick={() => setMenuOpen(false)}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            📝 Sign Up
          </Link>
        </div>
      </div>


      {menuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-30 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;













