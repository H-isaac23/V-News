import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navbar from "./components/Navigation/Navigation";
import Description from "./components/Description/Description";
import TweetsBody from "./components/TweetsBody/TweetsBody";

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Description />
    <TweetsBody />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
