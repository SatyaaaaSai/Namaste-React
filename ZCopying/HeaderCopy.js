import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStaus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnname, setbtnname] = useState("login");
  const onlinestatus=useOnlineStaus();
  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status:{onlinestatus? "✅":"❌"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="./About">About Us</Link></li>
          <li><Link to="./Contact">Contact us</Link></li>
          <li><Link to="./Grocery">Grocery</Link></li>
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
