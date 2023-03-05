import { render } from "../../utils/test-utils";
import ProductCard from "./product-card.component";

it("should render ProductCard component", () => {
  const mockProduct = {
    name: "TestProduct",
    price: 100,
    imageUrl: "testImage.com",
  };

  const { container } = render(<ProductCard product={mockProduct} />);
  expect(container).toMatchSnapshot();
});
