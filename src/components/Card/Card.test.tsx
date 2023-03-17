import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockBenchPress } from "../../mocks/mocks";
import renderRouterWithProviders from "../../utils/testUtils/renderRouterWithProviders";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import Card from "./Card";

const mockDeleteExercise = jest.fn();

jest.mock("../../hooks/useExercises/useExercises", () => () => ({
  deleteExercise: mockDeleteExercise,
}));

describe("Given a ExerciseCard component", () => {
  describe("When it renders", () => {
    test("Then it should display an image of an exercise", () => {
      renderWithProviders(<Card exercise={mockBenchPress} />);

      const expectedImage = screen.getByRole("img");

      expect(expectedImage).toBeInTheDocument();
    });

    test("Then it should display a title included in a heading with the exercise's name", () => {
      const exerciseName = "Bench Press";

      renderWithProviders(<Card exercise={mockBenchPress} />);

      const expectedHeading = screen.getByRole("heading", {
        name: exerciseName,
      });

      expect(expectedHeading).toBeInTheDocument();
    });
  });

  describe("When it receives a drone created by that user and the Delete button is clicked", () => {
    test("Then the deleteDrone function should be called", async () => {
      const buttonLabelText = /delete/i;

      renderRouterWithProviders(
        {
          user: {
            email: "",
            id: "Alex",
            isLogged: true,
            token: "",
          },
        },
        <Card exercise={mockBenchPress} />
      );

      const deleteButton = screen.getByRole("button", {
        name: buttonLabelText,
      });

      await await userEvent.click(deleteButton);

      expect(mockDeleteExercise).toHaveBeenCalled();
    });
  });
});
