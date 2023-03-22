import { screen } from "@testing-library/react";
import {
  preloadedStateExercise,
  preloadedStateLoggedIn,
} from "../../utils/testUtils/preloadedStates";
import renderRouterWithProviders from "../../utils/testUtils/renderRouterWithProviders";
import DetailPage from "./DetailPage";

describe("Given a DetailPage", () => {
  describe("When it renders", () => {
    test("Then it should show a header with the title 'Spotter'", async () => {
      renderRouterWithProviders(
        { ...preloadedStateExercise, ...preloadedStateLoggedIn },
        <DetailPage />
      );

      const exerciseImage = screen.getByRole("img");

      expect(exerciseImage).toBeInTheDocument();
    });
  });
});
