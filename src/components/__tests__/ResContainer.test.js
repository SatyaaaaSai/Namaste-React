import ResContainer from "../ResContainer";
import MOCK_DATA from "../mocks/ResCardDataMock.json";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
test("Restro Card will be mounted or Not", () => {
  render(<ResContainer resData={MOCK_DATA} />);

  const restroname = screen.getByText("Chinese Wok");

  expect(restroname).toBeInTheDocument();
});

//We Should Write the Test Case for the Component!