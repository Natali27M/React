import {createSlice} from "@reduxjs/toolkit";

const initialState={
    text: []
}
const textSlice = createSlice({
    name: 'textSlice',
    initialState,
    reducers: {
        addText:(state,action)=>{
            state.text.push({
                id: new Date().getTime(),
                ...action.payload.data
            });
        },
        deleteText:(state,action)=>{
            state.text = state.text.filter(sentence => sentence.id !== action.payload.id);
        }
    },
    extraReducers: {}
});

const textSliceReducer = textSlice.reducer;

export const {addText,deleteText} = textSlice.actions;

export default textSliceReducer;