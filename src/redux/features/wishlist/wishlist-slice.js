import {createSlice} from "@reduxjs/toolkit";
import {CONSTANTS} from "../../../utils/constants";

const wishlistSlice = createSlice({
    name: 'wishlists',
    initialState: {
        items: [],
        loading: false
    },
    reducers: {
        toggleItem: (state, action) => {
            const item = state.items.find(item => item._id === action.payload._id);
            if (!item) {
                state.items = [...state.items, {...action.payload}];
                localStorage.setItem(
                    CONSTANTS.TRIBUTE_THEME_VARIANT_KEY,
                    JSON.stringify(state.items)
                );
            }else {
                state.items = [...state.items.filter(item => item._id !== action.payload._id)]
            }
        },
        clearItems: (state) => {
            state.items = []
        },
        getItems: (state) => {
            state.items = localStorage.getItem(CONSTANTS.TRIBUTE_THEME_VARIANT_KEY) ?
                JSON.parse(localStorage.getItem(CONSTANTS.TRIBUTE_THEME_VARIANT_KEY)): []
        }
    },
    extraReducers: builder => {}
});

export const WISHLIST_ACTION_CREATORS = {
    toggleItem: wishlistSlice.actions.toggleItem,
    clearItems: wishlistSlice.actions.clearItems,
    getItems: wishlistSlice.actions.getItems,
};

export const selectWishlist = state => state.wishlist;
export default wishlistSlice.reducer;
