import { render, screen } from "../../utils/test-utils";
import CartDropdown from "./cart-drop-down.component";

test("should render CartDropdown component", () => {
  const { container } = render(<CartDropdown />);
  expect(container).toMatchSnapshot();
});

test("should render EmptyMessageContainer if cartItems is empty", () => {
  render(<CartDropdown />);
  expect(screen.queryByRole("list")).toBeNull();
  expect(screen.getByText("Your cart is empty")).toBeInTheDocument();
});
