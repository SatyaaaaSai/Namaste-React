import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
//import ResContainer from "./components/ResContainer";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom"; 
import About from "./components/About";
import Contact from "./components/Contact";
import Error  from "./components/Error";
import ResMenu from "./components/ResMenu";
import { lazy } from "react";
import Shimmer from "./components/Shimmer";

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
      <Header/>
      <Outlet/>
    </div>
  );
};

const Grocery=lazy(()=>import("./components/Grocery"));

const Approuter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"contact",
        element:<Contact/>,
      },
      {
        path:"/resturants/:resId",
        element:<ResMenu/>
      },
      {
        path:"grocery",
        element:<Suspense fallback={<Shimmer/>}>
          <Grocery/>
          </Suspense>,
      },
    ],
    errorElement:<Error/>,
  }
  // {
  //   path:"/about",
  //   element:<About/>,
  // },
  // {
  //   path:"contact",
  //   element:<Contact/>,
  // }
])
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />);
root.render(<RouterProvider router={Approuter}/>)
