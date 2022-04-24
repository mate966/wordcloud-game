import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    goodWords: [],
    badWords: [],
    score: 0,
};

export const resultSlice = createSlice({
    name: "result",
    initialState,
    reducers: {
        addGoodWord: (state, { payload }) => {
            state.goodWords.push(payload);
        },
        addBadWord: (state, { payload }) => {
            state.badWords.push(payload);
        },
        getResult: (state, { payload }) => {
            state.score = payload;
        },
    },
});

export const { addGoodWord, addBadWord, getResult } = resultSlice.actions;

export default resultSlice.reducer;
