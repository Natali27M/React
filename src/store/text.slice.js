import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    text: [],
    completed: 0
};

const textSlice = createSlice({
    name: "textSlice",

    initialState,

    reducers: {
        addText: (state, action) => {
            console.log(action.payload.data);
            state.text.push({
                id: new Date().getTime(),
                ...action.payload.data,
            });
        },
        deleteText: (state, action) => {
            state.text = state.text.filter(sentence => sentence.id !== action.payload.id);
        },
        changeStatus: (state, action) => {
            // const item = state.text.find(item => item.id === action.payload.id);
            // Object.assign(item, {status: !item.status})

            const index = state.text.findIndex(item => item.id === action.payload.id);
            const item = state.text[index];
            item.status = !item.status
            item.status?++state.completed:--state.completed
        }
    },

    extraReducers: {}
});

const textSliceReducer = textSlice.reducer;

export const {addText, deleteText, changeStatus} = textSlice.actions;

export default textSliceReducer;