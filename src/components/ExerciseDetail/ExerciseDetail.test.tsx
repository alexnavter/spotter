import { mockBenchPress } from "../../mocks/mocks";
import renderRouterWithProviders from "../../utils/testUtils/renderRouterWithProviders";
import ExerciseDetail from "./ExerciseDetail";
import { screen } from "@testing-library/react";

describe("Given an ExerciseDetail component", () => {
  describe("When it renders", () => {
    test("Then it should show a heading with a title with the text 'Bench Press'", () => {
      const expectedTitle = mockBenchPress.name;

      renderRouterWithProviders(
        { exercise: { exercises: [], exercise: mockBenchPress } },
        <ExerciseDetail exercise={mockBenchPress} />
      );

      const expectHeading = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(expectHeading).toBeInTheDocument();
    });
  });
});
