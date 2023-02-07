import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    showCart: false
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct(state, action) {
            // console.log(state, action.payload,"product")
            const product = state.products.find((product) => product.id === action.payload.id);
            if (product) {
                product.quantity += action.payload.quantity;
            }
            else {
                // console.log(state,action.payload,"cartslice")
                state.products.push(action.payload);
            }
        },
        removeProduct(state, action){
            state.products = state.products.filter((product) => product.id !== action.payload.id);
        },
        emptyCart(state){
            state.products = [];
        },
        toggleShowCart(state){
            state.showCart = !state.showCart;
        }
    }
});

export const { addProduct, removeProduct, emptyCart, toggleShowCart } = cartSlice.actions;
export default cartSlice.reducer;