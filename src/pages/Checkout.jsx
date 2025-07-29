import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../features/cart/cartSlice";

const Checkout = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");

  const cartItems = useSelector((state) => state.cart.cartItems);
  const total = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleConfirmOrder = (e) => {
    e.preventDefault();

    if (!name || !address) {
      alert("Please enter your name and address.");
      return;
    }

    navigate("/success", {
      state: {
        name,
        address,
        paymentMethod,
        total,
      },
    });

    dispatch(clearCart());
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-green-600 mb-6">
          Shipping & Payment
        </h2>

        <form onSubmit={handleConfirmOrder} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              className="border rounded px-3 py-2 w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Your delivery address"
              className="border rounded px-3 py-2 w-full"
              rows={3}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Payment Method</label>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="cod"
                  value="Cash on Delivery"
                  checked={paymentMethod === "Cash on Delivery"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="accent-green-600"
                />
                <label htmlFor="cod" className="text-gray-700">Cash on Delivery</label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="upi"
                  value="UPI / Wallet"
                  checked={paymentMethod === "UPI / Wallet"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="accent-green-600"
                />
                <label htmlFor="upi" className="text-gray-700">UPI / Wallet</label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="card"
                  value="Credit/Debit Card"
                  checked={paymentMethod === "Credit/Debit Card"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="accent-green-600"
                />
                <label htmlFor="card" className="text-gray-700">Credit/Debit Card</label>
              </div>
            </div>
          </div>

          <div className="text-right mt-4">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded transition"
            >
              Confirm Order
            </button>
          </div>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          <p><strong>Total Amount:</strong> ₹{total.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;


