import { render } from "../../utils/test-utils";
import CheckoutItem from "./checkout-item.component";

test("should render CheckoutItem component", () => {
  const mockCartItem = {
    name: "Adidas NMD",
    imageUrl: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
    price: 220,
    quantity: 2,
  };

  const { container } = render(<CheckoutItem cartItem={mockCartItem} />);
  expect(container).toMatchSnapshot();
});
