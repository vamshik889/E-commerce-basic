import React,{lazy,Suspense} from 'react'
// import HomePage from "../pages/HomePage"
// import Cart from "../pages/Cart"
import {Route,Routes} from "react-router-dom"
import Loader from './Loader';
const HomePage = lazy(()=>import("../pages/HomePage"));
const Cart = lazy(()=>import("../pages/Cart"))

const AllRoutes = () => {
  return (

    <Suspense fallback={<Loader/>} >

    <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/cart" element= {<Cart/>}></Route>
        <Route path="*" element={<h4>No page found</h4>}></Route>
    
    </Routes>
     </Suspense>
  )
}

export default AllRoutes