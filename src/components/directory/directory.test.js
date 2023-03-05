import { render } from "../../utils/test-utils";
import Directory from "./directory.component";

test("should render Directory component", () => {
  const { container } = render(<Directory />);
  expect(container).toMatchSnapshot();
});
