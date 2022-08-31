import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            const cartItem = state.items.find(cartItem => cartItem.item._id === action.payload.item._id);
            if (cartItem) {
                state.items = [...state.items.map(cartItem => {
                    if (cartItem.item._id === action.payload.item._id) {
                        return {item: cartItem.item, quantity: action.payload.quantity + cartItem.quantity};
                    }
                    return cartItem;
                })]
            } else {
                state.items = [
                    ...state.items,
                    {
                        quantity: action.payload.quantity ? action.payload.quantity : 1,
                        item: action.payload.item
                    }]
            }

        },
        removeItem: (state, action) => {
            const item = state.items.find(cartItem => cartItem.item._id === action.payload._id);
            if (item) {
                state.items = [...state.items.filter(cartItem => cartItem.item._id !== action.payload._id)];
            }
        },
        increaseItem: (state, action) => {
            const cartItem = state.items.find(cartItem => cartItem.item._id === action.payload._id);
            if (cartItem) {
                state.items = [...state.items.map(cartItem => {
                    if (cartItem.item._id === action.payload._id) {
                        return {item: cartItem.item, quantity: cartItem.quantity + 1};
                    }
                    return cartItem;
                })]
            }
        },
        decreaseItem: (state, action) => {
            const cartItem = state.items.find(cartItem => cartItem.item._id === action.payload._id);
            if (cartItem) {
                if (cartItem.quantity === 1) {
                    state.items = [...state.items.filter(cartItem => cartItem.item._id !== action.payload._id)];
                } else {
                    state.items = [...state.items.map(cartItem => {
                        if (cartItem.item._id === action.payload._id) {
                            return {item: cartItem.item, quantity: cartItem.quantity - 1};
                        }
                        return cartItem;
                    })]
                }
            }
        },
        clearItems: (state) => {
            state.items = [];
        }
    }
});


export const selectCart = state => state.cart;
const calculateTotalQuantity = items => {
    return items.reduce((accumulator, item) => {
        return accumulator + item.quantity;
    }, 0);
}

const calculateTotalPrice = items => {
    return items.reduce((accumulator, cartItem) => {
        const price = cartItem.item.sale.status ? cartItem.item.sale.price.amount : cartItem.item.price.amount
        return accumulator + (price * cartItem.quantity);
    }, 0);
}
export const CART_ACTION_CREATORS = {
    addItem: cartSlice.actions.addItem,
    removeItem: cartSlice.actions.removeItem,
    clearItems: cartSlice.actions.clearItems,
    decreaseItem: cartSlice.actions.decreaseItem,
    increaseItem: cartSlice.actions.increaseItem,
    calculateTotalQuantity,
    calculateTotalPrice
}
export default cartSlice.reducer;
