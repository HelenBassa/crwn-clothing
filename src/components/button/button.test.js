import userEvent from "@testing-library/user-event";

import { render, screen } from "../../utils/test-utils";
import Button from "./button.component";

test("should render Button component", () => {
  const onClick = jest.fn();
  const { container } = render(<Button onClick={onClick} />);
  expect(container).toMatchSnapshot();

  userEvent.click(screen.getByRole("button"));
  expect(onClick).toHaveBeenCalled();
});
