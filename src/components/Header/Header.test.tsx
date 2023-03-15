import Header from "./Header";
import { act, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Burger from "../Burger/Burger";
import renderRouterWithProviders from "../../utils/testUtils/renderRouterWithProviders";

describe("Given a Header component", () => {
  describe("When it renders", () => {
    test("It should display a heading with a title with the text 'Spotter'", () => {
      const expectedText = "Spotter";

      renderRouterWithProviders(<Header />);

      const logoTitle = screen.getByRole("heading", { name: expectedText });

      expect(logoTitle).toBeInTheDocument();
    });
  });

  describe("When the burger menu is clicked", () => {
    test("Then it should show a menu on the side with the text 'Home' as a link", async () => {
      renderRouterWithProviders(<Burger />);

      const burgerButton = screen.getByRole("button", { name: "Open Menu" });
      await act(async () => await userEvent.click(burgerButton));

      const homeLink = screen.getByRole("link", { name: "Home" });

      expect(homeLink).toBeInTheDocument();
    });
  });
});
