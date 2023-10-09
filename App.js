import React from "react";
import ReactDOM from "react-dom/client";

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

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/25539c29532269.55f7d6a0a8c71.jpg" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const ResContainer = () => {
  return (
    <div className="res-card">
      <img className="res-photo"alt="res-photo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/kgdwp56osv8jcey3yapr"/>
      <h3>Meghana Foods</h3>
      <h4>Andhra,South Indian</h4>
      <h4>4.4 stars</h4>
      <h4>38 MINS</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="resturant-conatiner">
        <ResContainer />
        <ResContainer />
        <ResContainer />
        <ResContainer />
        <ResContainer />
        <ResContainer />
        <ResContainer />
        <ResContainer />
        <ResContainer />
        <ResContainer />
        <ResContainer />
        <ResContainer />
        <ResContainer />
        <ResContainer />
        <ResContainer />
        <ResContainer />
        <ResContainer />
        <ResContainer />
      </div>
    </div>
  );
};

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
