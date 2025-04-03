import React from "react";
import ReactDOM from "react-dom/client";

/*const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [
      React.createElement("h1", {key: "h1-1"}, "Namaste React🚀"),
      React.createElement("h2", {key: "h1-2"}, "I am the best developer"),
    ]
  ),
  React.createElement(  
    "div",
    { id: "child2" },
    [
      React.createElement("h1", {key: "h1-1"}, "I am H3 tag"),
      React.createElement("h2", {key: "h1-2"}, "I am H4 tag"),
    ]
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);*/

// now lets write h1 tag using JSX // which is the combination of html and react

const JsxHeading = <h1 className="Ritik">Hello World!🚀</h1>
                    // this peice of code is JSX
                    const root = ReactDOM.createRoot(document.getElementById("root"));
                    root.render(JsxHeading)
