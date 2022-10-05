import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders hats", () => {
  render(<App />);
  const linkElement = screen.getByText(/sing in/i);
  expect(linkElement).toBeInTheDocument();
});
