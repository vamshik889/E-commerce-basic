import React, {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useFetch } from "../hooks/useFetch";

const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [cart, setCart] = useState([]);
  const [selectCategory, setSelectedCategory] = useState("");
  const increase = (item) => {
    const updatedCart = cart.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      } else {
        return cartItem;
      }
    });
    setCart(updatedCart);
  };
  const decrease = (item) => {
    const updatedCart = cart
      .map((cartItem) => {
        if (cartItem.id === item.id && cartItem.quantity > 0) {
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        } else {
          return cartItem;
        }
      })
      .filter((cartItem) => cartItem.quantity > 0); // to remove the item whenever the quantity reaches to zero
    setCart(updatedCart);
  };
  useEffect(() => {
    console.log(cart);
    console.log(selectCategory)
  }, [cart]);

  const addToCart = (item) => {
    const isItemInCart = cart.some((cartItem) => cartItem.id === item.id);
    console.log(isItemInCart, "hh");
    if (isItemInCart) {
      const updatedCart = cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          const updatedproduct = {
            ...cartItem,
            quantity: Number(cartItem.quantity) + 1,
          };
          return updatedproduct;
        }
        return cartItem;
      });
      //  console.log("updatedCart",updatedCart)
      setCart(updatedCart);
    } else {
      const itemObj = { ...item, quantity: 1 };
      setCart((prev) => [...prev, itemObj]);
    }
  };

  const { data, loading, error } = useFetch("https://dummyjson.com/products");

  //console.log(data, loading, error);
  return (
    <AppContext.Provider
      value={{
        input,
        setInput,
        cart,
        setCart,
        data,
        loading,
        error,
        addToCart,
        increase,
        decrease,
        selectCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
