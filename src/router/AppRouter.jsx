import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { SignUp } from "../Features/Authentication/SignUp"
import ProductsList from "../product/ProductList"
import ProductData from "../product/ProductData"
import { Products } from "../pages/Products"
import Cart from "../cart/Cart"
import SignIn from "../Features/Authentication/SignIn"

export const AppRouter=()=>{
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/product/:id" element={<ProductData/>}/>
            <Route path="/productlist" element={<ProductsList/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/signin" element={<SignIn/>}/>
        </Routes>
        </>
    );
}