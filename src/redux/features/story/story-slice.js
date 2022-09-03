import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {STORY_API} from "../../../api/story";
import {stories} from "./stories-data";


const getStories = createAsyncThunk(
    'stories/getStories',
    async ({
               values,
               showMessage
           }, {rejectWithValue}) => {
        try {
            const response = await STORY_API.getStories({...values});
           showMessage(response.data.message, {variant: 'success'});
            return response.data;
        } catch (e) {
            const {message} = e.response.data;
            showMessage(message, {variant: 'error'});
            return rejectWithValue(message);
        }
    });


const getStory = createAsyncThunk(
    'stories/getStory',
    async ({id, showMessage}, {rejectWithValue}) => {
        try {
            const response = await STORY_API.getStory(id);
            showMessage(response.data.message, {variant: 'success'});
            return response.data;
        } catch (e) {
            const {message} = e.response.data;
            showMessage(message, {variant: 'error'});
            return rejectWithValue(message);
        }
    });

const storySlice = createSlice({
    name: 'stories',
    initialState: {
        storyLoading: false,
        storyMessage: null,
        storyError: null,
        stories: [...stories],
        story: stories[0]
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getStories.pending, (state) => {
            state.storyLoading = true;
            state.storyError = null;
            state.storyMessage = null;
        }).addCase(getStories.fulfilled, (state, action) => {
            state.storyLoading = false;
            state.storyError = null;
            state.storyMessage = action.payload.message;
            state.message = action.payload.data;
        }).addCase(getStories.rejected, (state, action) => {
            state.storyLoading = false;
            state.storyError = action.payload;
            state.storyMessage = null;
            state.message = null
        })
    }
});

export const selectStory = state => state.story;

export const STORY_ACTION_CREATORS = {getStories, getStory};

export default storySlice.reducer;
