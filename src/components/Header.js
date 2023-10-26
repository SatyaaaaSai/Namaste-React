import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {
  const [btnname, setbtnname] = useState("login");
  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact us</li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              btnname === "login" ? setbtnname("logout") : setbtnname("login");
            }}
          >
            {btnname}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
