import React from "react";
import { useAppContext } from "../context/AppProvider";
import Product from "./Product";

const HomePage = () => {
  const { data,input,selectCategory } = useAppContext();
  const searchedResult = input.trim()&&data?.products?.filter((item)=>item.title.toLowerCase().includes(input.toLowerCase()))
  let results = searchedResult&&searchedResult.length>0?searchedResult:data.products;
  
   results = selectCategory&&selectCategory!=="Select a category" ? results.filter((item)=>item.category === selectCategory):results

  return (
     <div className="w-full grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-4 p-4 overflow-hidden font-sans bg-purple-300">
 
      {results &&
        results.map((ele) => <Product ele={ele} key={ele.id} />)}
    </div>
  );
};

export default HomePage;
