import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {usersService} from "../services";

export const getAllUsers = createAsyncThunk(
    'userSlice/getAllUsers',
    async (_, {rejectWithValue}) => {
        try {
            const users = await usersService.getAll();
            return users;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

const userSlice = createSlice({
    name: 'userSlice',

    initialState: {
        users: []
    },
    extraReducers:{
        [getAllUsers.pending]: (state, action) => {
            state.status = 'pending';
            state.error = null;
        },
        [getAllUsers.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.users = action.payload;
        },
        [getAllUsers.rejected]: (state, action) => {
            state.status = 'reject';
            state.error = action.payload;
        },
    }
});

const userSliceReducer = userSlice.reducer;

export default userSliceReducer;