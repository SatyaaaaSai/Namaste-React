import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStaus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnname, setbtnname] = useState("login");
  const onlinestatus=useOnlineStaus();
  //For Redux 
  const cartItems=useSelector((store)=>store.cart.items)
  return (
    <div className="header flex justify-between mx-10 bg-slate-100">
      <div className="logo bg-slate-100">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="nav-items flex items-center">
        <ul className="flex list-none text-base">
          <li className="m-2 p-2 hover:text-cyan-300">Online Status:{onlinestatus? "✅":"❌"}</li>
          <li className="m-2 p-2 hover:text-cyan-300"><Link to="/">Home</Link></li>
          <li className="m-2 p-2 hover:text-cyan-300" ><Link to="./About">About Us</Link></li>
          <li className="m-2 p-2 hover:text-cyan-300"><Link to="./Contact">Contact us</Link></li>
          <li className="m-2 p-2 hover:text-cyan-300"><Link to="./Grocery">Grocery</Link></li>
          <li className="m-2 p-2 hover:text-cyan-300"><Link to="./cart">Cart-{cartItems.length}</Link>
          </li>
          <button
            className="m-2 p-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-sm"
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
