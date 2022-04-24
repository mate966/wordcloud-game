import React from "react";
import { Word } from "./Word";
import { useSelector } from "react-redux";

export const Board = () => {
    const selectedGoodWords = useSelector(state => state.result.goodWords);
    const selectedBadWords = useSelector(state => state.result.badWords);

    return (
        <ul
            className={
                !selectedBadWords.length && !selectedGoodWords.length
                    ? "board"
                    : "board board--disabled"
            }
        >
            <Word />
        </ul>
    );
};
