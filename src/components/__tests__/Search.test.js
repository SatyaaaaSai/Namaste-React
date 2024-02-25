import MOCK_DATA from "../mocks/ResBodyDataMock.json";
import Body from "../Body";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("should render Body Component or not the ", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBe(9);

  const searchButton = screen.getByRole("button", { name: "Search" });

  const InputBox = screen.getByTestId("InputBox");

  fireEvent.change(InputBox, { target: { value: "s" } });

  fireEvent.click(searchButton);

  const cardsAftereSearch = screen.getAllByTestId("resCard");

  expect(cardsAftereSearch.length).toBe(6);

});

test("Should Conatins Top Rated Restros", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
  
    const cardsBeforeSearch = screen.getAllByTestId("resCard");
  
    expect(cardsBeforeSearch.length).toBe(9);
  
    const searchButton = screen.getByRole("button", { name: "Top Rated Resturants" });
  
  
    fireEvent.click(searchButton);
  
    const cardsAftereSearch = screen.getAllByTestId("resCard");
  
    expect(cardsAftereSearch.length).toBe(9);
  
  });
