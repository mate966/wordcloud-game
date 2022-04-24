import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getWords } from "../Features/wordsSlice";
import { Board } from "../Components/Board";
import { Buttons } from "../Components/Buttons";
import { selectGame } from "../Features/selectGameSlice";

export const Game = () => {
    const dispatch = useDispatch();
    const playerName = useSelector(state => state.name.name);
    const gameName = useSelector(state => state.words.words);
    const gameNumber = useSelector(state => state.gameNumber.gameNumber);

    const getRandomIntInclusive = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    useEffect(() => {
        (async () => {
            try {
                dispatch(selectGame(getRandomIntInclusive(0, 2)));
                const res = await fetch("data.json");
                const words = await res.json();
                dispatch(getWords(words));
            } catch (err) {
                console.log(err);
            }
        })();
    }, [dispatch]);

    return (
        <div className="game">
            <p>Welcome, {playerName}</p>
            <h2>{gameName.length && gameName[gameNumber].question}</h2>
            <Board />
            <Buttons />
        </div>
    );
};
