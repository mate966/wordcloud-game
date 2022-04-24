import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    words: [],
};

export const wordsSlice = createSlice({
    name: "words",
    initialState,
    reducers: {
        getWords: (state, { payload }) => {
            state.words = payload;
        },
    },
});

export const { getWords } = wordsSlice.actions;

export default wordsSlice.reducer;
