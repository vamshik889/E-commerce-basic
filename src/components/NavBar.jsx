import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import { useAppContext } from "../context/AppProvider";

const NavBar = () => {
  const { cart,data, input,setInput,selectCategory,setSelectedCategory } = useAppContext();
   const location = useLocation();
  let categories = data.products && data.products.map((item)=>item.category);
  const categorySet = new Set(categories);
  categories = ["Select a category",...categorySet]

  useEffect(()=>{

    console.log("categories",categories)
  },[])
   useEffect(() => {
    // Reset inputs whenever the route changes
    setInput("");
    setSelectedCategory("");
  }, [location.pathname]);

  const links = [
    { id: 1, path: "/", text: "Homepage" },
    { id: 2, path: "/cart", text: "Cart" },
  ];
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-5 h-12 w-full bg-purple-400">
      <div
        style={{ display: "flex", justifyContent: "flex-start", gap: "20px" }}
        className="sticky top-0"
      >
        {links.map((link) => (
          <NavLink key={link.id} to={link.path}>
            {link.text}
          </NavLink>
        ))}
      </div>
      <div>
        <input
          placeholder="search..."
          className="outline-none bg-zinc-100 rounded-sm p-1"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </div>
      <div>
        <label htmlFor="category">Filter by Category </label>
        <select name="filters" id="category" onChange={(e)=>setSelectedCategory(e.target.value)}
          className="bg-white rounded-sm capitalize p-1"
          >
          {categories && categories.length>0?categories.map((category)=><option key={category} value={category}
          
          >{category}</option>):"No categories"}

        </select>
      </div>
      <div className="relative h-8 w-8 flex justify-center items-center">
        <span>
          <Link to="/cart">
          <IoMdCart  />
          </Link>
        </span>
       {cart.length>0? <span className="absolute flex justify-center items-center top-[-6px] right-0 text-xs h-[15px] w-[15px] bg-white rounded-2xl">{cart.length}</span>:""}
      </div>
    </header>
  );
};

export default NavBar;
