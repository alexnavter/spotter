import renderRouterWithProviders from "../../utils/testUtils/renderRouterWithProviders";
import MyExercisesPage from "./MyExercisesPage";
import { screen } from "@testing-library/react";
import { mockBenchPress } from "../../mocks/mocks";
import Card from "../../components/Card/Card";

describe("Given a MyExercisesPage", () => {
  describe("When it renders", () => {
    test("Then it should display a Card component", () => {
      const expectedText = "My exercises";

      renderRouterWithProviders({}, <MyExercisesPage />);

      const expectedHeading = screen.getByRole("heading", {
        name: expectedText,
      });

      expect(expectedHeading).toBeInTheDocument();
    });

    test("Then it should display a Card component with a title 'Bench Press'", () => {
      const expectedText = "Bench Press";

      renderRouterWithProviders({}, <Card exercise={mockBenchPress} />);

      const expectedTitle = screen.getByRole("heading", { name: expectedText });

      expect(expectedTitle).toBeInTheDocument();
    });
  });
});
