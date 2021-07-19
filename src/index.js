import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./components/Navigation/Navigation";
import Description from "./components/Description/Description";
import UpdatesBody from "./components/UpdatesBody/UpdatesBody";

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Description />
    <UpdatesBody />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
