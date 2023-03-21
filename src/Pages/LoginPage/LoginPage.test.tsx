import LoginPage from "./LoginPage";
import { screen } from "@testing-library/react";
import * as ReactRouterDom from "react-router-dom";
import renderRouterWithProviders from "../../utils/testUtils/renderRouterWithProviders";
import { preloadedStateToast } from "../../utils/testUtils/preloadedStates";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Navigate: jest.fn(),
}));

describe("Given a Login Page", () => {
  describe("When it is rendered", () => {
    test("Then it should a button inside a Login Form, with the text 'Log in'", () => {
      const expectedText = "Log in";

      renderRouterWithProviders({}, <LoginPage />);
      renderRouterWithProviders(preloadedStateToast);

      const expectedButton = screen.getByRole("button", { name: expectedText });

      expect(expectedButton).toBeInTheDocument();
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
      renderRouterWithProviders(preloadedState, <LoginPage />);
      expect(ReactRouterDom.Navigate).toHaveBeenCalled();
    });
  });
});
