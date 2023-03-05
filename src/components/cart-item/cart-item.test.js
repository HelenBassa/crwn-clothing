import { render } from "../../utils/test-utils";
import CartItem from "./cart-item.component";

test("should render CartItem component", () => {
  const mockItem = {
    name: "Adidas NMD",
    imageUrl: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
    price: 220,
    quantity: 2,
  };

  const { container } = render(<CartItem cartItem={mockItem} />);
  expect(container).toMatchSnapshot();
});
