import LoginPage from "./LoginPage";
import { screen } from "@testing-library/react";
import * as ReactRouterDom from "react-router-dom";
import renderRouterWithProviders from "../../utils/testUtils/renderRouterWithProviders";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Navigate: jest.fn(),
}));

describe("Given a Login Page", () => {
  describe("When it is rendered", () => {
    test("Then it should a button inside a Login Form, with the text 'Log in'", () => {
      const expectedText = "Log in";

      renderRouterWithProviders(<LoginPage />);

      const expectedButton = screen.getByRole("button", { name: expectedText });

      expect(expectedButton).toBeInTheDocument();
    });
  });

  describe("When the user introduces wrong credentials at Login Page, and the modal property isError is set to true", () => {
    test("Then it should display this modal with the text 'Wrong credentials'", async () => {
      await renderRouterWithProviders(<LoginPage />, {
        ui: { modal: "Wrong credentials", isError: true, isLoading: false },
      });

      const modal = await screen.findByText("Wrong credentials");

      expect(modal).toBeInTheDocument();
    });
  });

  describe("When the user is already logged", () => {
    test("Then 'Navigate' should be invoked", () => {
      const preloadedState = {
        user: {
          id: "",
          email: "",
          token: "",
          isLogged: true,
        },
      };
      renderRouterWithProviders(<LoginPage />, preloadedState);
      expect(ReactRouterDom.Navigate).toHaveBeenCalled();
    });
  });
});
