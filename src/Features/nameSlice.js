import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
};

export const nameSlice = createSlice({
    name: "name",
    initialState,
    reducers: {
        handleName: (state, { payload }) => {
            state.name = payload;
        },
    },
});

export const { handleName } = nameSlice.actions;

export default nameSlice.reducer;
