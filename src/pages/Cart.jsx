import React, { lazy, useEffect, useState,Suspense } from "react";
import { useAppContext } from "../context/AppProvider";
import CartItem from "../components/CartItem";
//const CartItem = lazy(()=>import("../components/CartItem"))
const Cart = () => {
  const [total, setTotal] = useState(0);

  const {
    cart,
    setCart,
    setInput,
    input,
    selectCategory,
    setSelectedCategory,
  } = useAppContext();

  // Reset input and category on mount
  useEffect(() => {
    setInput("");
    setSelectedCategory("Select a category");
  }, []);

  // Calculate total whenever cart changes
  useEffect(() => {
    const calculatedTotal = cart.reduce((acc, item) => {
      return acc + item.quantity * item.price;
    }, 0);
    setTotal(calculatedTotal);
  }, [cart]);

  // Filter logic
  const searchedResult =
    input.trim() &&
    cart.filter((item) =>
      item.title.toLowerCase().includes(input.toLowerCase())
    );

  let results =
    searchedResult && searchedResult.length > 0 ? searchedResult : cart;

  results =
    selectCategory && selectCategory !== "Select a category"
      ? results.filter((item) => item.category === selectCategory)
      : results;

  return (
    <div className="relative min-h-screen">
      <h2 className="font-bold text-xl text-center border-b p-4">
        My Cart ({cart.length} items) - ${total.toFixed(2)}
      </h2>

      {/* Header row */}
      <div className="flex justify-center">
        <div className="grid grid-cols-[2.5fr_1fr_1fr_1fr] mx-4 gap-12 items-center font-bold text-lg w-full max-w-6xl mt-2">
          <p>Item</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
        </div>
      </div>

      {/* Cart items */}
     

      {results.length > 0 ? (
        results.map((ele) => <CartItem ele={ele} key={ele.id} />)
      ) : (
        <div className="flex justify-center text-center text-4xl mt-20 text-gray-500">
          No Products in the cart 😒
        </div>
      )}
     

    </div>
  );
};

export default Cart;
