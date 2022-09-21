import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";

describe("render App", () => {
  test("Button Rendering", () => {
    render(
      <ContextProvider>
        <App />
      </ContextProvider>
    );
    const div = screen.getByTestId("div");
    expect(div).toBeInTheDocument();
  });
});
