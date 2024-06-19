import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../pages/components/Button/Button";

describe("Button component", () => {
  it("renders with default props", () => {
    render(<Button onClick={() => {}}>Click me</Button>);
    const buttonElement = screen.getByText("Click me");
    expect(buttonElement).toBeInTheDocument();
  });

  it("handles click event", () => {
    const onClickMock = jest.fn();
    render(<Button onClick={onClickMock}>Click me</Button>);

    const buttonElement = screen.getByText("Click me");

    // Simulate a button click
    fireEvent.click(buttonElement);

    // Check if the onClick function is called
    expect(onClickMock).toHaveBeenCalled();
  });

  it("applies correct styles based on color prop", () => {
    render(
      <Button onClick={() => {}} color="red">
        Click me
      </Button>
    );
    const buttonElement = screen.getByText("Click me");

    // Check if the button has the appropriate background color class based on the color prop
    expect(buttonElement).toHaveClass("bg-red");
  });
});
