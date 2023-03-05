import { render } from "../../utils/test-utils";
import SignUpForm from "./sign-up-form.component";

it("should render SignUpForm component", () => {
  const { container } = render(<SignUpForm />);
  expect(container).toMatchSnapshot();
});
