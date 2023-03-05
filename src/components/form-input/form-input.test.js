import { render } from "../../utils/test-utils";
import FormInput from "./form-input.component";

it("should render FormInput component", () => {
  const mockLabel = "";

  const { container } = render(<FormInput label={mockLabel} />);
  expect(container).toMatchSnapshot();
});
