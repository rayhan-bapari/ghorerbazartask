import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { id, title, price, thumbnail, category } = action.payload;
            const productExist = state.find((item) => item.id === id);
            if (productExist) {
                productExist.qty += 1;
                productExist.price = productExist.price * productExist.qty;
            } else {
                state.push({ id, title, price, thumbnail, category, qty: 1 });
            }
        },
        removeFromCart: (state, action) => {
            const cartId = action.payload;
            return state.filter((item) => item.id !== cartId);
        },
        incrementQty: (state, action) => {
            const cartId = action.payload;
            const productExist = state.find((item) => item.id === cartId);

            if (productExist) {
                productExist.qty += 1;
            }
        },
        decrementQty: (state, action) => {
            const cartId = action.payload;
            const productExist = state.find((item) => item.id === cartId);

            if (productExist && productExist.qty > 1) {
                productExist.qty -= 1;
            }
        },
    },
});

export const { addToCart, removeFromCart, incrementQty, decrementQty } = cartSlice.actions;
export default cartSlice.reducer;
