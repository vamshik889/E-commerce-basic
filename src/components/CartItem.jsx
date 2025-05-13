import React from "react";
import Quantity from "./Quantity";
import { useAppContext } from "../context/AppProvider";

const CartItem = ({ ele }) => {
  const { images, title, price, quantity } = ele;
  const total = (quantity * price).toFixed(2);

  return (
    <div className="flex justify-center py-4 border-b border-gray-200">
      <div className="grid grid-cols-[2.5fr_1fr_1fr_1fr] mx-4 gap-6 items-center w-full max-w-6xl">
        {/* Product Image and Title */}
        <div className="flex items-center gap-4">
          <img
            src={images[0]}
            alt={title}
            className="h-24 w-24 object-cover rounded "
          />
          <p className="font-medium text-gray-800">{title}</p>
        </div>

        {/* Price */}
        <p className="text-gray-700 font-semibold">${price}</p>

        {/* Quantity Selector */}
        <Quantity item={ele} />

        {/* Total */}
        <p className="text-gray-900 font-bold">${total}</p>
      </div>
    </div>
  );
};

export default CartItem;
