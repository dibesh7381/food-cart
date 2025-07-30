import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  removeFromCart,
  clearCart,
} from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  const handleBuyNow = () => {
    navigate("/checkout");
  };

  return (
    <div className="min-h-screen bg-gray-100 pb-28 px-4 pt-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-4">
          <p className="text-gray-500 text-lg">🛒 Your cart is empty.</p>
          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md text-sm transform transition duration-150 active:scale-95"
          >
            Keep Shopping
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-sm rounded-xl p-4 flex items-center gap-4 transition transform hover:scale-[1.01]"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg border"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500">₹{item.price}</p>

                <div className="flex items-center mt-2 gap-3">
                  <button
                    onClick={() => dispatch(decrement(item.id))}
                    className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded text-lg"
                  >
                    −
                  </button>
                  <span className="text-md font-medium">{item.quantity}</span>
                  <button
                    onClick={() => dispatch(increment(item.id))}
                    className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded text-lg"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="text-red-600 text-sm mt-2 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}


      {cartItems.length > 0 && (
        <div className="fixed bottom-0 left-0 w-full bg-white border-t px-4 py-4 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] flex flex-col sm:flex-row justify-between items-center gap-4 z-50">
          <h3 className="text-xl font-semibold text-gray-800">
            Total: ₹{total.toLocaleString()}
          </h3>
          <div className="flex gap-2">
            <button
              onClick={() => dispatch(clearCart())}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm"
            >
              Remove All
            </button>
            <button
              onClick={handleBuyNow}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm"
            >
              Buy Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
