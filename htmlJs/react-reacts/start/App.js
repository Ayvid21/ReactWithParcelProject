import React from "react";
import ReactDOM from 'react-dom/client';

// const heading = React.createElement("h1", {id: "heading"}, "Bye, Good Night!");

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading)

// {
  /* <div id='parent'>
    <div id='child'>
        <h1>I am h1 tag</h1>
    </div>
</div> */
// }

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am H1 tag 🚀"),
    React.createElement("h2", {}, "I am H2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h3", {}, "I am H3 tag"),
    React.createElement("h4", {}, "I am H4 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
