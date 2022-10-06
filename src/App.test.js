import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("renders hats", () => {
  render(<App />, { wrapper: BrowserRouter });
  const linkElement = screen.getByText(/hats/i);
  expect(linkElement).toBeInTheDocument();
});
