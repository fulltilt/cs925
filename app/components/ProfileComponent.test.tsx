import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ProfileComponent from "./ProfileComponent";

let option = 1;
jest.mock("next-auth/react", () => ({
  useSession: jest.fn(() => ({
    data: {
      user: {
        name: null,
        email: "test@test.com",
        image: null,
        id: "123-abc",
        stripeData: `${option === 1 ? "free" : ""}`,
      },
      expires: "2024-12-02T04:34:13.132Z",
    },
    status: "authenticated",
  })),
}));

describe("ProfileComponent", () => {
  it("Subscribe button shows when User is on free plan", async () => {
    render(<ProfileComponent />);

    const button = screen.getByRole("button", { name: /subscribe/i });
    expect(button).toBeInTheDocument();

    // expect(window.location.href).toBe("http://localhost/subscribe");
  });

  it("Update Subscription button shows when User is subscribed", async () => {
    option = 2;
    render(<ProfileComponent />);

    const element = screen.getByText(/update subscription/i);
    expect(element).toBeInTheDocument();

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
