import React from "react";
import ReactDOM from "react-dom/client";

const root2 = ReactDOM.createRoot(document.getElementById("root"));
const html=React.createElement("div",{id:"parent"},[React.createElement("div",
    {id:"child1"},
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{},"I am H1,Tag"),
        React.createElement("h2",{},"I am H2 Tag")
    ])
    ),React.createElement("div",{id:"child2"},
    React.createElement("div",{id:"child1"},
    [ React.createElement("h1",{},"I am H1,Tag"),
    React.createElement("h2",{},"I am H2 Tag")
    ]))

]);

root2.render(html);

// const root=ReactDOM.createRoot(document.getElementById("root"));

// const heading=React.createElement(
// "h1",
// {id:"heading"},
// "hello World From React"
// );
// root.render(heading); // Render Function Converts This Function To H1 Tag.