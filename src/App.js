import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
//import ResContainer from "./components/ResContainer";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom"; 
import About from "./components/About";
import Contact from "./components/Contact";
import Error  from "./components/Error";
import ResMenu from "./components/ResMenu";

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
        path:"/resturants/:id",
        element:<ResMenu/>
      }
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
