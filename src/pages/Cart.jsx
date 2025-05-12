import React, { useEffect } from 'react'
import { useAppContext } from '../context/AppProvider'
import Product from "./Product"
const Cart = () => {
    const {cart,setCart,setInput,input,selectCategory,setSelectedCategory} = useAppContext();
     useEffect(() => {
    setInput("");
    setSelectedCategory("Select a category");
  }, []);
     const searchedResult = input.trim()&&cart?.filter((item)=>item.title.toLowerCase().includes(input.toLowerCase()))
  
   let results = searchedResult&&searchedResult.length>0?searchedResult:cart;

   results = selectCategory&&selectCategory!=="Select a category" ? results.filter((item)=>item.category === selectCategory):results
  return (
    <div>
        {(results.length>0)?
 results.map((ele) => <Product ele={ele} key={ele.id} />)  :<h3>No Products in the cart😒</h3>      }
    </div>
  )
}

export default Cart