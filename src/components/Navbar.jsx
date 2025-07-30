import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const itemCount = cartItems.length;

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

          </div>
      </div>
    </nav>
  );
};

export default Navbar;













