import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Result = () => {
    const navigate = useNavigate();
    const playerName = useSelector(state => state.name.name);
    const score = useSelector(state => state.result.score);

    const reloadApp = () => {
        window.location.reload();
    };

    const startAgain = () => {
        navigate("/");
        reloadApp();
    };

    return (
        <>
            <h2>Congratulations, {playerName}</h2>
            <p>
                Your score: <span>{score} points</span>
            </p>
            <button className="button" onClick={startAgain}>
                Start again
            </button>
        </>
    );
};
