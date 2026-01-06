import { createSlice } from "@reduxjs/toolkit";


let CounterSlice=createSlice({
    name:"Count",
    initialState:0,
    reducers:{
        increment:(state,action)=>{
            return state+action.payload
        },
        decrement:(state,action)=>{
            return state-action.payload
        }
    }
})
export const {increment,decrement}=CounterSlice.actions
export default CounterSlice.reducer