import { render } from "../../utils/test-utils";
import Spinner from "./spinner.component";

it("should render Spinner component", () => {
  const { container } = render(<Spinner />);
  expect(container).toMatchSnapshot();
});
