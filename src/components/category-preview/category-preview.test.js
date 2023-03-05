import { render } from "../../utils/test-utils";
import CategoryPreview from "./category-preview.component";

test("should render CategoryPreview component", () => {
  const mockTitle = "MockTitle";
  const mockProducts = ["Hats", "Jeans", "Skirts", "Shoes"];

  const { container } = render(
    <CategoryPreview title={mockTitle} products={mockProducts} />
  );
  expect(container).toMatchSnapshot();
});
