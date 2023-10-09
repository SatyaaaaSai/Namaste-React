
import React from "react";
import ReactDOM from "react-dom/client";

// const headin = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Learnig React Bro🙌"
// );

// const heading = (
//   <h1 className="hello" tabIndex={"hello"}>
//     I am Writing React 🤩
//   </h1>
// );

// const HeadingComponent = () => {
//   return <h1>Hello I am Returning This From Arrow Function.</h1>;
// };

// const HeadingComponent2 = () => (
//   <div id="heading">
//     {" "}
//     <h1> I am Learniang React </h1> <h2> I am Learning React</h2>
//   </div>
// );
const ele=<span>I am From Span Element</span>
const Element10 = () =>{
  return (
    <div>
      {ele}
      <h1> I Am H1 Tag</h1>
    </div>
);
  };
const Component2 = () => (
  <div>
    <Element10></Element10>
    <Element10/>
    {Element10()}
    <h2>{100 + 200}</h2>
    <h1> I Am From Functional Component</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Component2 />);
