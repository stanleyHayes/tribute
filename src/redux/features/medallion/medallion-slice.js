import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {medallions} from "./mediallion-data";
import {MEDALLIONS_API} from "../../../api/medallions";

const getMedallions = createAsyncThunk('medallions/getMedallions', async ({query}, {rejectWithValue}) => {
    try {
        const response = await MEDALLIONS_API.getMedallions(query);
        return response.data;
    } catch (e) {
        return rejectWithValue(e.response.error.message);
    }
});


const getMedallion = createAsyncThunk('medallions/getMedallion', async ({id}, {rejectWithValue}) => {
    try {
        const response = await MEDALLIONS_API.getMedallion(id);
        return response.data;
    } catch (e) {
        return rejectWithValue(e.response.error.message);
    }
});

const medallionSlice = createSlice({
    name: 'medallions',
    initialState: {
        medallions: [...medallions],
        medallion: medallions[0],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getMedallions.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        }).addCase(getMedallions.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.medallions = action.payload;
        }).addCase(getMedallions.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }).addCase(getMedallion.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(getMedallion.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.medallions = action.payload;
        }).addCase(getMedallion.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
});

export const MEDALLION_ACTION_CREATORS = {getMedallions, getMedallion};
export const selectMedallions = state => state.medallion;
export default medallionSlice.reducer;
