import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils/renderRouterWithProviders";
import HomePage from "./HomePage";

describe("Given a HomePage", () => {
  describe("When it renders", () => {
    test("Then it should display a list of exercises cards", () => {
      renderWithProviders({}, <HomePage />);

      const expectedCardList = screen.getByRole("list");
      expect(expectedCardList).toBeInTheDocument();
    });
  });
});
