import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import PostcodeInput from "./PostcodeInput";

const setup = () => {
  const utils = render(<PostcodeInput />);
  const input = screen.getByPlaceholderText("SW1P 2PN");
  return {
    input,
    ...utils,
  };
};

test("renders input box", () => {
  const { input } = setup();

  expect(input).toBeInTheDocument();
});

test("Too shorter postcodes should be rejected", async () => {
  const { input } = setup();

  fireEvent.change(input, { target: { value: "NOT A VALID POSTCODE" } });

  const Validation_warning = await screen.findByText("Postcode isn't valid");
  expect(Validation_warning).toBeInTheDocument();
});

test("Valid postcodes pass", async () => {
  const { input } = setup();

  fireEvent.change(input, { target: { value: "NOT A VALID POSTCODE" } });
  var Validation_warning = await screen.findByText("Postcode isn't valid");
  fireEvent.change(input, { target: { value: "VALID POSTCODE" } });

  await waitForElementToBeRemoved(Validation_warning);
  var final_message = screen.queryByText("Postcode isn't valid");
  expect(final_message).toBeNull();
});
