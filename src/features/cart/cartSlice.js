import { createSlice } from "@reduxjs/toolkit";

const storedCart = JSON.parse(localStorage.getItem("cartItems")) || []

const initialState = {
    cartItems : storedCart
}

const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
       addToCart : (state,action) => {
          const exists = state.cartItems.find(i => i.id === action.payload.id)
          if (!exists) {
             state.cartItems.push({...action.payload, quantity : 1})
          }
       } ,
        removeFromCart : (state,action) => {
          state.cartItems = state.cartItems.filter(i => i.id !== action.payload)
        }, 
        increment : (state,action) => {
          const item = state.cartItems.find(i => i.id === action.payload)
          if (item) {
             if (item.quantity >= 10){
                alert("You can order a maximum of 10 units at once.")
             }
             else {
                item.quantity += 1
             }
          }
        },
        decrement : (state,action) => {
           const item = state.cartItems.find(i => i.id === action.payload)
           if (item && item.quantity > 1) {
              item.quantity -= 1
           }
        },
        clearCart : (state) => {
          state.cartItems = []
        }
    }

})

export const {addToCart,removeFromCart,increment,decrement,clearCart} = cartSlice.actions

export default cartSlice.reducer






