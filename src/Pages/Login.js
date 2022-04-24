import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleName } from "../Features/nameSlice";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [nameError, setNameError] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userName = useSelector(state => state.name.name);

    const handleUserName = e => {
        e.preventDefault();
        dispatch(handleName(e.target.value));
    };

    const moveToGame = e => {
        e.preventDefault();
        if (!userName) {
            setNameError(true);
        } else {
            navigate("/game");
        }
    };

    return (
        <div className="login__container">
            <h1 className="login-heading">Wordcloud game</h1>
            <form className="form" onSubmit={moveToGame}>
                <input
                    type="text"
                    placeholder="Enter your nickname here..."
                    className="form-input"
                    onChange={handleUserName}
                />
                {nameError && <span className="error-msg">Invalid username!</span>}
                <input type="submit" value="Play" className="form-submit button" />
            </form>
        </div>
    );
};
