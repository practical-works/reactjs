import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import React from "react";
import ReactDOM from "react-dom";
import Game from "./Game";

ReactDOM.render(<Game />, document.querySelector("#root"));
serviceWorker.register();
