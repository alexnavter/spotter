import { screen } from "@testing-library/react";
import App from "./App";
import { preloadedStateLoading } from "../../utils/testUtils/preloadedStates";
import renderRouterWithProviders from "../../utils/testUtils/renderRouterWithProviders";

describe("Given an App component", () => {
  describe("When it renders", () => {
    test("Then it should display a Loader component", () => {
      renderRouterWithProviders(<App />, preloadedStateLoading);

      const loader = screen.getByLabelText("progress-bar-loading");

      expect(loader).toBeInTheDocument();
    });
  });
});
