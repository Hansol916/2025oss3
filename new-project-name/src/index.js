import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<React.StrictMode></React.StrictMode>);
const myElement = (
  <div>
    I Love JSX!<div>hahaha</div>
  </div>
); // JSX
const myElement1 = React.createElement("h1", {}, "I do not use JSX!");

let temp_number = 10;
let temp_text = "nono";
if (temp_number > 10) {
  temp_text = "over 10";
} else {
  temp_text = "not over 10";
}
const myElement3 = (
  <div>
    {temp_number} === this number?: {temp_text}
  </div>
);
const myElement4 = (
  <div>
    {temp_number}==={temp_number > 10 ? "o 10" : "n o 10"}
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {myElement},{myElement1},{myElement3},{myElement4}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
