import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    gameNumber: 0,
};

export const selectGameSlice = createSlice({
    name: "gameNumber",
    initialState,
    reducers: {
        selectGame: (state, { payload }) => {
            state.gameNumber = payload;
        },
    },
});

export const { selectGame } = selectGameSlice.actions;

export default selectGameSlice.reducer;
