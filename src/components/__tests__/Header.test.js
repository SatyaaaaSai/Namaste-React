import { Provider } from "react-redux";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
test("Should containing The login Button in Header or Not", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // const loginbutton=screen.getByRole("button");
  const loginbutton = screen.getByText("Login");

  expect(loginbutton).toBeInTheDocument();
});

test("Should containing The Cart Item in Header or Not", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // const loginbutton=screen.getByRole("button");
  const cartButton = screen.getByText("Cart-0");

  expect(cartButton).toBeInTheDocument();
});

test("Should containing The contain Header or Not Using Regex", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    // const loginbutton=screen.getByRole("button");
    const cartButton = screen.getByText(/Cart/);
  
    expect(cartButton).toBeInTheDocument();
  });

  test("Should containing Login/Logout Button ", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const loginButton=screen.getByRole("button",{name:"Login"});
    fireEvent.click(loginButton);
    const logoutButton=screen.getByRole("button",{name:"Logout"})
    expect(logoutButton).toBeInTheDocument();
  });