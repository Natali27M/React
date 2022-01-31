import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {commentsService} from "../services";

export const getAllComments = createAsyncThunk(
    'commentSlice/getAllComments',
    async (_,{rejectWithValue})=>{
      try {
          const comments = await commentsService.getAll();
          return comments;
      }catch (e) {
         return rejectWithValue(e.message)
      }
});

const commentSlice = createSlice({
    name: 'commentSlice',

    initialState: {
        comments: []
    },

    extraReducers: {
        [getAllComments.pending]: (state, action) => {
            state.status = 'pending';
            state.error = null;
        },
        [getAllComments.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.comments = action.payload;
        },
        [getAllComments.rejected]: (state, action) => {
            state.status = 'reject';
            state.error = action.payload;
        },
    }
});

const commentSliceReducer = commentSlice.reducer;

export default commentSliceReducer;