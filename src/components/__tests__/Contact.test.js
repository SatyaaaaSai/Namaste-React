import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";
// test("to check whether Page is Rendered or Not", () => {
//   render(<Contact />);
//   const heading = screen.getByRole("heading"); //

//   //Assertion
//   expect(heading).toBeInTheDocument();
// });

// test("to check Whether Button Exists or Not", () => {
//   render(<Contact />);
//   const button = screen.getByRole("button");
//   expect(button).toBeInTheDocument();
// });

// test("to check Multiple Text-Boxes or not", () => {
//   render(<Contact />);

//   const inputbox = screen.getAllByRole("textbox");

//   expect(inputbox.length).toBe(2);
// });

//describe is Used For Grouping The Multiple Test Caes into the One.
describe("test cass in a component", () => {
  test("to check whether Page is Rendered or Not", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading"); //

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  //test alternative alis of it 
  it("to check Whether Button Exists or Not", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("to check Multiple Text-Boxes or not", () => {
    render(<Contact />);

    const inputbox = screen.getAllByRole("textbox");

    expect(inputbox.length).toBe(2);
  });
});
