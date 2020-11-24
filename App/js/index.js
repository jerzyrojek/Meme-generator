import React from "react";
import ReactDOM from "react-dom";
import "../css/style.css";
import App from "./App";
import {BrowserRouter} from "react-router-dom";


ReactDOM.render(
    <BrowserRouter basename="/Meme-generator">
        <App/>
    </BrowserRouter>
    , document.querySelector("#app")
)