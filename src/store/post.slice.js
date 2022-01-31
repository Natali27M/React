import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {postsService} from "../services";

export const getAllPosts = createAsyncThunk(
    'postSlice/getAllPosts',
    async (_, {rejectWithValue}) => {
        try {
            const posts = await postsService.getAll();
            return posts;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    });

const postSlice = createSlice({
    name: 'postSlice',

    initialState: {
        posts: []
    },
    extraReducers: {
        [getAllPosts.pending]: (state, action) => {
            state.status = 'pending';
            state.error = null;
        },
        [getAllPosts.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.posts = action.payload;
        },
        [getAllPosts.rejected]: (state, action) => {
            state.status = 'reject';
            state.error = action.payload;
        },
    }
});

const postSliceReducer = postSlice.reducer;

export default postSliceReducer;

