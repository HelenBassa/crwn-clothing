import { render } from "../../utils/test-utils";
import SignInForm from "./sign-in-form.component";

it("should render SignInForm component", () => {
  const { container } = render(<SignInForm />);
  expect(container).toMatchSnapshot();
});
