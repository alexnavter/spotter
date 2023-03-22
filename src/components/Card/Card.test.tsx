import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockBenchPress } from "../../mocks/mocks";
import { act } from "react-dom/test-utils";
import renderRouterWithProviders from "../../utils/testUtils/renderRouterWithProviders";

import Card from "./Card";

const mockDeleteExercise = jest.fn();

jest.mock("../../hooks/useExercises/useExercises", () => () => ({
  deleteExercise: mockDeleteExercise,
}));

const mockNavigationTo = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigationTo,
}));

describe("Given a ExerciseCard component", () => {
  describe("When it renders", () => {
    test("Then it should display an image of an exercise", () => {
      renderRouterWithProviders({}, <Card exercise={mockBenchPress} />);

      const expectedImage = screen.getByRole("img");

      expect(expectedImage).toBeInTheDocument();
    });

    test("Then it should display a title included in a heading with the exercise's name", () => {
      const exerciseName = "Bench Press";

      renderRouterWithProviders({}, <Card exercise={mockBenchPress} />);

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

  describe("When the user clicks on the image", () => {
    test("Then the useNavigate function should be called", async () => {
      renderRouterWithProviders(
        {
          user: {
            email: "",
            id: "marcelino1234",
            token: "",
            isLogged: true,
          },
        },
        <Card exercise={mockBenchPress} />
      );

      const exerciseImage = screen.getByRole("img");

      await act(async () => await userEvent.click(exerciseImage));

      expect(mockNavigationTo).toHaveBeenCalled();
    });
  });
});
