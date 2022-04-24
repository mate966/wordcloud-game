import { configureStore } from "@reduxjs/toolkit";
import nameSlice from "../Features/nameSlice";
import wordsSlice from "../Features/wordsSlice";
import selectedWordsSlice from "../Features/selectedWordsSlice";
import resultSlice from "../Features/resultSlice";
import selectGameSlice from "../Features/selectGameSlice";

export const store = configureStore({
    reducer: {
        name: nameSlice,
        words: wordsSlice,
        selectedWords: selectedWordsSlice,
        result: resultSlice,
        gameNumber: selectGameSlice,
    },
});
