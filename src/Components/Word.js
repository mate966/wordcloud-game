import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getWord } from "../Features/selectedWordsSlice";

export const Word = () => {
    const dispatch = useDispatch();
    const words = useSelector(state => state.words.words);
    const selectedWords = useSelector(state => state.selectedWords.selectedWords);
    const gameNumber = useSelector(state => state.gameNumber.gameNumber);
    const selectedGoodWords = useSelector(state => state.result.goodWords);
    const selectedBadWords = useSelector(state => state.result.badWords);

    const selectWord = e => {
        const target = e.target;

        dispatch(getWord(target.innerText));

        selectedWords.includes(target.innerText)
            ? (target.className = "word")
            : (target.className = "word word--selected");
    };

    const handleClass = word => {
        if (selectedGoodWords.includes(word)) return "word word--good";
        if (selectedBadWords.includes(word)) return "word word--bad";
        return "word";
    };

    return (
        <>
            {words.length &&
                words[gameNumber].all_words.map((word, id) => (
                    <li key={id} className={handleClass(word)} onClick={selectWord}>
                        {selectedGoodWords.includes(word) && (
                            <span className="word-result">Good</span>
                        )}
                        {selectedBadWords.includes(word) && (
                            <span className="word-result">Bad</span>
                        )}
                        {word}
                    </li>
                ))}
        </>
    );
};
