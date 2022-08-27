import {createSlice} from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name: 'wishlists',
    initialState: {
        wishlists: [],
        loading: false
    },
    reducers: {},
    extraReducers: builder => {}
});

export const WISHLIST_ACTION_CREATORS = {};
export const selectWishlist = state => state.wishlists;
export default wishlistSlice.reducer;
