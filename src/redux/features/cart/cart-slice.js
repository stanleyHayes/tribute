import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            const item = state.items.find(item => item._id === action.payload._id);
            if(item){
                state.items = [...state.items.map(item => {
                    if(item._id === action.payload._id){
                        item.quantity = item.quantity + 1
                        return item;
                    }
                    return item;
                })]
            }else{
                state.items = [{quantity: 1, item: action.payload}]
            }
        },
        removeItem: (state, action) => {
            const item = state.items.find(item => item._id === action.payload._id);
            if(item){
                state.items = [...state.items.filter(item => item._id !== action.payload._id)];
            }
        },
        increaseItem: (state, action) => {
            const item = state.items.find(item => item._id === action.payload._id);
            if(item){
                state.items = [...state.items.map(item => {
                    if(item._id === action.payload._id){
                        item.quantity = item.quantity + 1
                        return item;
                    }
                    return item;
                })]
            }
        },
        decreaseItem: (state, action) => {
            const item = state.items.find(item => item._id === action.payload._id);
            if(item){
                if(item.quantity === 1){
                    state.items = [...state.items.filter(item => item._id !== action.payload._id)];
                }else{
                    state.items = [...state.items.map(item => {
                        if(item._id === action.payload._id){
                            item.quantity = item.quantity - 1
                            return item;
                        }
                        return item;
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
export const CART_ACTION_CREATORS = {
    addItem: cartSlice.actions.addItem,
    removeItem: cartSlice.actions.removeItem,
    clearItems: cartSlice.actions.clearItems,
    decreaseItem: cartSlice.actions.decreaseItem,
    increaseItem: cartSlice.actions.increaseItem,
}
export default cartSlice.reducer;
