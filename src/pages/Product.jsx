import React from 'react';
import { useAppContext } from '../context/AppProvider';
import Quantity from '../components/Quantity';

const Product = ({ ele }) => {
  const { images, title, price, id } = ele;
  const { addToCart, cart } = useAppContext();

  const cartItem = cart.find((item) => item.id === id);
  const isPresent = Boolean(cartItem);
  const quantity = cartItem?.quantity || 0;


  return (
    <div className='flex flex-col justify-center items-center shadow-md shadow-purple-500 rounded-md cursor-pointer bg-white hover:bg-gray-300'>
      <div className='w-full max-w-[200px] h-[200px] flex justify-center items-center overflow-hidden'>
        <img src={images[0]} alt={title} className='object-contain w-full h-full' />
      </div>
      <p className='font-bold'><span>💲</span>{price}</p>
      <p className='font-medium text-gray-600'>{title}</p>

      {!isPresent ? (
        <button
          className='px-2 py-1 m-1 rounded-sm cursor-pointer bg-blue-500 hover:bg-blue-700 text-white'
          onClick={() => addToCart(ele)}
        >
          Add to Cart
        </button>
      ) : (
        <Quantity item={cartItem} />
      )}
    </div>
  );
};

export default Product;
