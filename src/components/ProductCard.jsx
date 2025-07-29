import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import { useEffect, useState } from 'react';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  const isAlreadyInCart = cartItems.some(item => item.id === product.id);

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

      <button
        onClick={() => {
          if (!isAlreadyInCart) dispatch(addToCart(product));
        }}
        className={`py-1 rounded text-white ${
          isAlreadyInCart
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700'
        }`}
        disabled={isAlreadyInCart}
      >
        {isAlreadyInCart ? 'Added' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default ProductCard;




