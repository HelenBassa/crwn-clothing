import { render } from "../../utils/test-utils";
import CartIcon from "./cart-icon.component";

test("should render CartIcon component", () => {
  const { container } = render(<CartIcon />);
  expect(container).toMatchSnapshot();
});
