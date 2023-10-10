import { render, screen } from "@testing-library/react";
import ValidationWarning from "./ValidationWarning";

test("renders warning", () => {
  render(<ValidationWarning warning="Field is invalid" is_valid={false} />);
  const warning = screen.getByText("Field is invalid");
  expect(warning).toBeInTheDocument();
});

test("Doesn't render warning when valid", () => {
  render(<ValidationWarning warning="Field is invalid" is_valid={true} />);
  const warning = screen.queryByText("Field is invalid");
  expect(warning).toBeNull();
});
