import { screen } from "@testing-library/react";
import Layout from "./Layout";
import { preloadedStateLoading } from "../utils/testUtils/preloadedStates";
import renderRouterWithProviders from "../utils/testUtils/renderRouterWithProviders";

describe("Given a Layout component", () => {
  describe("When it renders but the user is not logged", () => {
    test("Then it should display a LoginForm component", () => {
      renderRouterWithProviders(preloadedStateLoading, <Layout />);

      const loader = screen.getByLabelText("progress-bar-loading");

      expect(loader).toBeInTheDocument();
    });
  });
});
