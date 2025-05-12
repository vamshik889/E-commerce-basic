import React from 'react'
import HomePage from "../pages/HomePage"
import Cart from "../pages/Cart"
import {Route,Routes} from "react-router-dom"

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/cart" element= {<Cart/>}></Route>
        <Route path="*" element={<h4>No page found</h4>}></Route>
    
    </Routes>
  )
}

export default AllRoutes