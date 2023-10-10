import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
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

test("Too shorter postcodes should be rejected", () => {
  const { input } = setup();
  fireEvent.change(input, { target: { value: "SW" } });

  const Validation_warning = screen.getByText("Postcode isn't valid");
  expect(Validation_warning).toBeInTheDocument();
});
