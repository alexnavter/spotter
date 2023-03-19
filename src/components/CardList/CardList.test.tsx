import CardList from "./CardList";
import { screen } from "@testing-library/react";
import { mockExercises } from "../../mocks/mocks";
import renderRouterWithProviders from "../../utils/testUtils/renderRouterWithProviders";

describe("Given a CardList component", () => {
  describe("When it renders", () => {
    test("Then it should display a list of Cards", () => {
      renderRouterWithProviders({ exercise: mockExercises }, <CardList />);

      const expectedCard = screen.getByRole("list");

      expect(expectedCard).toBeInTheDocument();
    });
  });
});
