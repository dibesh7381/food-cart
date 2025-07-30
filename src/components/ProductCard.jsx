import { useDispatch, useSelector } from 'react-redux';
import { addToCart, increment, decrement } from '../features/cart/cartSlice';
import { useEffect, useState } from 'react';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const itemInCart = cartItems.find((item) => item.id === product.id);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`w-full max-w-[240px] border p-4 rounded-lg shadow-md flex flex-col gap-2 transform transition duration-500 ease-out
        ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
        hover:scale-105 hover:shadow-lg`}
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-44 object-cover rounded"
      />

      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-700">₹{product.price}</p>

      {itemInCart ? (
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => dispatch(decrement(product.id))}
            className="bg-gray-300 hover:bg-gray-400 text-black px-3 py-1 rounded text-lg"
          >
            −
          </button>
          <span className="text-md font-semibold">{itemInCart.quantity}</span>
          <button
            onClick={() => dispatch(increment(product.id))}
            className="bg-gray-300 hover:bg-gray-400 text-black px-3 py-1 rounded text-lg"
          >
            +
          </button>
        </div>
      ) : (
        <button
          onClick={() => dispatch(addToCart(product))}
          className="bg-blue-600 hover:bg-blue-700 text-white py-1 rounded"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;



