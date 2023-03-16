import Header from "./Header";
import { act, screen } from "@testing-library/react";
import renderRouterWithProviders from "../../utils/testUtils/renderRouterWithProviders";
import { preloadedStateLoading } from "../../utils/testUtils/preloadedStates";
import Burger from "../Burger/Burger";
import userEvent from "@testing-library/user-event";

describe("Given a Header component", () => {
  describe("When it renders", () => {
    test("It should display a heading with a title with the text 'Spotter'", () => {
      const expectedText = "Spotter";

      renderRouterWithProviders({}, <Header />);

      const logoTitle = screen.getByRole("heading", { name: expectedText });

      expect(logoTitle).toBeInTheDocument();
    });

    test("Then it should display a 3 line burger menu to click on", async () => {
      renderRouterWithProviders({}, <Burger />);

      const burgerButton = screen.getByRole("button", { name: "Open Menu" });
      await act(async () => await userEvent.click(burgerButton));

      expect(burgerButton).toBeInTheDocument();
    });
  });
});
