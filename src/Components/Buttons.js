import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addBadWord, addGoodWord, getResult } from "../Features/resultSlice";

export const Buttons = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const gameNumber = useSelector(state => state.gameNumber.gameNumber);
    const goodWords = useSelector(state => state.words.words);
    const selectedWords = useSelector(state => state.selectedWords.selectedWords);
    const selectedGoodWords = useSelector(state => state.result.goodWords);
    const selectedBadWords = useSelector(state => state.result.badWords);

    const compareArrays = () => {
        selectedWords.filter(word => {
            if (goodWords[gameNumber].good_words.includes(word)) {
                dispatch(addGoodWord(word));
            } else {
                dispatch(addBadWord(word));
            }
        });
    };

    const checkResult = () => {
        compareArrays();
    };

    const checkScore = () => {
        let score = 0;
        const calculateScore =
            selectedGoodWords.length * 2 -
            selectedBadWords.length -
            (goodWords[gameNumber].good_words.length - selectedGoodWords.length);

        if (selectedGoodWords.length === 0) score = 0;

        score = calculateScore;

        if (score < 0) score = 0;

        navigate("/result");
        dispatch(getResult(score));
    };

    return (
        <>
            {!selectedBadWords.length && !selectedGoodWords.length ? (
                <button className="button" onClick={checkResult}>
                    check answers
                </button>
            ) : (
                <button className="button" onClick={checkScore}>
                    finish game
                </button>
            )}
        </>
    );
};
