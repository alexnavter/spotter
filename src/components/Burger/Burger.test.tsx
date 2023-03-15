import Burger from "./Burger";
import { act, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderRouterWithProviders from "../../utils/testUtils/renderRouterWithProviders";

describe("Given a Burger component", () => {
  describe("When rendered", () => {
    test("It should render a button with the class 'logout', the text 'Log out'", () => {
      renderRouterWithProviders({}, <Burger />);

      const burgerButton = screen.getByRole("button");

      expect(burgerButton).toBeInTheDocument();
    });
  });

  describe("When the burger menu is clicked", () => {
    test("Then it should show a menu on the side with the text 'Home' as a link", async () => {
      renderRouterWithProviders({}, <Burger />);

      const burgerButton = screen.getByRole("button", { name: "Open Menu" });
      await act(async () => await userEvent.click(burgerButton));

      const homeLink = screen.getByRole("link", { name: "Home" });

      expect(homeLink).toBeInTheDocument();
    });
  });
});
