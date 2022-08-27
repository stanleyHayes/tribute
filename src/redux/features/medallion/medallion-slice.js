import {createSlice} from "@reduxjs/toolkit";
import {medallions} from "./mediallion-data";

const medallionSlice = createSlice({
    name: 'medallions',
    initialState: {
        medallions: [...medallions],
        loading: false
    },
    reducers: {},
    extraReducers: builder => {}
});

export const MEDALLION_ACTION_CREATORS = {};
export const selectMedallions = state => state.medallion;
export default medallionSlice.reducer;
