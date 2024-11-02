import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProfileComponent from "./ProfileComponent";

jest.mock("next-auth/react", () => ({
  useSession: jest.fn(() => ({
    data: {
      user: {
        name: null,
        email: "test@test.com",
        image: null,
        id: "123-abc",
        stripeData: "free",
      },
      expires: "2024-12-02T04:34:13.132Z",
    },
    status: "authenticated",
  })),
}));

describe("ProfileComponent", () => {
  it("renders a heading", async () => {
    render(<ProfileComponent />);

    await userEvent.click(screen.getByText("Subscribe"));

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
