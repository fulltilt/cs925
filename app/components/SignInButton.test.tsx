import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { SignInButton } from "./SignInButton";
import React from "react";

// jest.mock("next/router", () => ({
//   useRouter() {
//     return {
//       route: "/",
//       pathname: "",
//       query: "",
//       asPath: "",
//       push: jest.fn(),
//       events: {
//         on: jest.fn(),
//         off: jest.fn(),
//       },
//       beforePopState: jest.fn(() => null),
//       prefetch: jest.fn(() => null),
//     };
//   },
// }));
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: jest.fn(),
      prefetch: () => null,
    };
  },
}));

describe("SignInButton", () => {
  xit("Signin button should load", async () => {
    render(<SignInButton children={null} className="" />);

    const element = screen.getByText(/sign in/i);
    expect(element).toBeInTheDocument();
  });

  // NOTE: don't know how to get this to work just yet as st
  xit("Spinner shows when clicking on Sign In button", async () => {
    user.setup();
    render(<SignInButton children={null} className="" />);

    jest
      .spyOn(React, "useState")
      .mockImplementationOnce(() => [true, () => null]);

    const element = screen.getByText(/sign in/i);
    expect(element).toBeInTheDocument();
    await user.click(element);

    const spinner = await screen.findByTestId("spinner");
    expect(spinner).toBeInTheDocument();
  });
});
