import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
//import ResContainer from "./components/ResContainer";
import Body from "./components/Body";

/**
 *  Header
 *  -Logo
 *  -Nav Items
 *  Body
 *  - Seach Bar
 *  - Restro Component
 *    - Restro Card
 *   Footer
 *    - Links
 *    - Address
 *    - Copyright
 */

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
