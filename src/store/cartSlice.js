import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [], // Array of {id, name, price, image, quantity}
    totalQuantity: 0,
    totalAmount: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);

            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    image: newItem.image,
                    quantity: 1
                });
                state.totalQuantity++;
                state.totalAmount += newItem.price;
            }
        },

        removeFromCart: (state, action) => {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);

            if (existingItem) {
                state.totalQuantity -= existingItem.quantity;
                state.totalAmount -= existingItem.price * existingItem.quantity;
                state.items = state.items.filter(item => item.id !== id);
            }
        },

        incrementQuantity: (state, action) => {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);

            if (existingItem) {
                existingItem.quantity++;
                state.totalQuantity++;
                state.totalAmount += existingItem.price;
            }
        },

        decrementQuantity: (state, action) => {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);

            if (existingItem) {
                if (existingItem.quantity === 1) {
                    state.totalQuantity--;
                    state.totalAmount -= existingItem.price;
                    state.items = state.items.filter(item => item.id !== id);
                } else {
                    existingItem.quantity--;
                    state.totalQuantity--;
                    state.totalAmount -= existingItem.price;
                }
            }
        }
    }
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
