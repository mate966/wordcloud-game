import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedWords: [],
};

export const selectedWordsSlice = createSlice({
    name: "selectedWords",
    initialState,
    reducers: {
        getWord: (state, { payload }) => {
            const { selectedWords } = state;
            if (!selectedWords.includes(payload)) {
                selectedWords.push(payload);
            } else {
                selectedWords.filter((word, id) => {
                    if (word === payload) {
                        selectedWords.splice(id, 1);
                    }
                });
            }
        },
    },
});

export const { getWord } = selectedWordsSlice.actions;

export default selectedWordsSlice.reducer;
