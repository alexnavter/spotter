import { screen } from "@testing-library/react";
import Layout from "./Layout";
import { preloadedStateLoading } from "../utils/testUtils/preloadedStates";
import renderRouterWithProviders from "../utils/testUtils/renderRouterWithProviders";
import { UserState } from "../store/features/users/types";

describe("Given a Layout component", () => {
  describe("When it renders but the user is not logged", () => {
    test("Then it should display a LoginForm component", () => {
      renderRouterWithProviders(preloadedStateLoading, <Layout />);

      const loader = screen.getByLabelText("progress-bar-loading");

      expect(loader).toBeInTheDocument();
    });
  });

  describe("When it renders but the user is logged", () => {
    test("Then it should display a Header", () => {
      const user: UserState = { email: "", id: "", isLogged: true, token: "" };

      renderRouterWithProviders({ user: user }, <Layout />);

      const expectedText = "Spotter";

      const logoTitle = screen.getByRole("heading", { name: expectedText });

      expect(logoTitle).toBeInTheDocument();
    });
  });
});
