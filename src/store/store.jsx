import { configureStore } from "@reduxjs/toolkit";
// import CounterOP from "../Features/counter/CounterSlice"
import cartOP from "../cart/CartSlice"
export const store=configureStore({
    reducer:{
        cart:cartOP
        // Count:CounterOP,
    }
})