import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { name, address, paymentMethod, total } = location.state || {};

  useEffect(() => {

    if (!name || !address || !paymentMethod || !total) {
      navigate("/");
    }
  }, [name, address, paymentMethod, total, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-green-50">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md text-center">
        <div className="text-6xl mb-4">✅</div>
        <h1 className="text-2xl font-bold text-green-700 mb-2">Order Confirmed!</h1>
        <p className="text-gray-600 mb-6">
          Thank you <strong>{name}</strong> for your purchase.
        </p>

        <div className="text-left text-sm bg-gray-100 p-4 rounded-lg mb-4">
          <p><strong>Shipping to:</strong> {address}</p>
          <p><strong>Payment Method:</strong> {paymentMethod}</p>
          <p><strong>Total Paid:</strong> ₹{total.toLocaleString()}</p>
        </div>

        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Success;

