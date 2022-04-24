import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { App } from "./App";
import { Login } from "./Pages/Login";
import { Result } from "./Pages/Result";
import { store } from "./App/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<Login />} />
                    <Route path="/game" element={<App />} />
                    <Route path="/result" element={<Result />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
