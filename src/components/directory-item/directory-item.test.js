import { render, screen } from "../../utils/test-utils";
import DirectoryItem from "./directory-item.component";

test("should render DirectoryItem component", () => {
  const mockCategory = {
    title: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    route: "shop/hats",
  };

  const { container } = render(<DirectoryItem category={mockCategory} />);
  expect(container).toMatchSnapshot();

  expect(screen.getByText("hats")).toBeInTheDocument();
  expect(screen.getByText(/shop now/i)).toBeInTheDocument();
});
