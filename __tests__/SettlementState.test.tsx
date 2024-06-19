import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SettlementState from "@/pages/components/SettlementState/SettlementState ";

describe("SettlementState Component", () => {
  it("checks if state prop is a string", () => {
    const mockState = "disputed";

    // Check the type of the state prop
    expect(typeof mockState).toBe("string");

    // Render the component with the state prop
    render(<SettlementState state={mockState} />);

    const specificStateElement = screen.getByText(mockState);

    // Check if the specific state element has the appropriate classes
    expect(specificStateElement).toHaveClass(
      "border border-green bg-white text-green font-bold rounded-md p-2 ml-2 capitalize"
    );
  });
});
