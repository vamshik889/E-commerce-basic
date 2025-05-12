import React from "react";
import { useAppContext } from "../context/AppProvider";

const Quantity = ({ item }) => {
  const { increase, decrease, addToCart } = useAppContext();
  return (
    <div className="flex items-center">
      {item.quantity > 0 ? (
        <>
          <button
            className="px-4 py-1 m-1 rounded-sm cursor-pointer bg-blue-500 hover:bg-blue-700 text-white"
            onClick={() => {
              decrease(item);
            }}
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            className="px-4 py-1 m-1 rounded-sm cursor-pointer bg-blue-500 hover:bg-blue-700 text-white"
            onClick={() => increase(item)}
          >
            +
          </button>
        </>
      ) : (
        <button
          className="px-2 py-1 m-1 rounded-sm cursor-pointer bg-blue-500 hover:bg-blue-700 text-white"
          onClick={() => addToCart(item)}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default Quantity;
