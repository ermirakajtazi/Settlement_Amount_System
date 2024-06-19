import { render, screen } from "@testing-library/react";
import LoadingSkeleton from "@/pages/components/LoadingSkeleton/LoadingSkeleton";

describe("LoadingSkeleton Component", () => {
  it("renders the loading skeleton component properly", () => {
    render(<LoadingSkeleton />);

    // Assert that the component contains two placeholder content areas
    const placeholderContents = screen.getAllByTestId("placeholder-content");
    expect(placeholderContents).toHaveLength(2);
  });
});
