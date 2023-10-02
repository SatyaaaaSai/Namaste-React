const root=ReactDOM.createRoot(document.getElementById("root"));

const heading=React.createElement(
"h1",
{id:"heading"},
"hello World From React"
);

console.log(heading); // Create Element Creates The JavaScript Object . No the H1 Tag.S

root.render(heading); // Render Function Converts This Function To H1 Tag.

console.log(root.render(heading));

/* <div id="parent">
    <div id="child">
        <div id="child1">
            <h1>I am h1 Tag!</h1>{ h1 and h2 are siblings
            <h2>I am H2 Tag!</h2>  }
        </div>
    </div>
</div> */

const html=React.createElement(
    "div",
    {id:"parent"},
    React.createElement("div",{id:"child"},
    React.createElement("div",{id:"child1"},[
    React.createElement("h1",{},"i am nested h1"),React.createElement("H2",{}," i am nested h2")
    ]))
);

const root2=ReactDOM.createRoot(document.getElementById("root"));
root2.render(html);