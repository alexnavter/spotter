import { act, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockExerciseCreate } from "../../mocks/mocks";
import renderRouterWithProviders from "../../utils/testUtils/renderRouterWithProviders";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";

import CreateForm from "./CreateForm";

jest.mock("../../hooks/useExercises/useExercises", () => () => ({
  createExercise: mockCreateExercise,
}));

const mockCreateExercise = jest.fn();

describe("Given a CreateForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with the text 'Create exercise'", () => {
      const expectedButtonText = "Create exercise";
      renderWithProviders(<CreateForm />);

      const expectedButton = screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(expectedButton).toBeInTheDocument();
    });

    test("Then it should show a heading with for attribute text 'name'", () => {
      const headingText = "Create new exercise";

      renderWithProviders(<CreateForm />);

      const expectedInput = screen.getByRole("heading", { name: headingText });

      expect(expectedInput).toBeInTheDocument();
    });

    test("Then it should show an input with the attribute text 'type'", () => {
      const text = "equipment";

      renderWithProviders(<CreateForm />);

      const expectedInput = screen.getByRole("textbox", { name: text });

      expect(expectedInput).toBeInTheDocument();
    });

    test("Then it should show an input with the attribute text 'sets'", () => {
      const text = "sets";

      renderWithProviders(<CreateForm />);

      const expectedInput = screen.getByRole("textbox", { name: text });

      expect(expectedInput).toBeInTheDocument();
    });

    test("Then it should show an input with the attribute text 'duration'", () => {
      const text = "duration";

      renderWithProviders(<CreateForm />);

      const expectedInput = screen.getByRole("textbox", { name: text });

      expect(expectedInput).toBeInTheDocument();
    });
  });

  describe("When the user submits the form", () => {
    test("The createExercise function should be called", async () => {
      const exerciseNamePlaceholder = "Exercise name...";
      const typePlaceholder = "Type...";
      const equipmentPlaceholder = "Equipment...";
      const difficultyPlaceholder = "Difficulty...";
      const musclesPlaceholder = "Muscles...";
      const descriptionPlaceHolder = "Description...";
      const setsPlaceholder = "1 - 6";
      const repsPlaceholder = "1 - 20";
      const restPlaceholder = "Seconds...";
      const durationPlaceholder = "Minutes...";
      const imagePlaceholder = "Image...";

      const picture = new File(["exervise"], "exercise.jpg", {
        type: "image/jpg",
      });

      renderRouterWithProviders({}, <CreateForm />);

      const nameInputPlaceholder = screen.getByPlaceholderText(
        exerciseNamePlaceholder
      );

      await act(
        async () =>
          await userEvent.type(nameInputPlaceholder, mockExerciseCreate.name)
      );

      const typeInputPlaceholder = screen.getByPlaceholderText(typePlaceholder);

      await act(
        async () =>
          await userEvent.selectOptions(
            typeInputPlaceholder,
            mockExerciseCreate.type
          )
      );

      const equipmentInputPlaceholder =
        screen.getByPlaceholderText(equipmentPlaceholder);

      await act(
        async () =>
          await userEvent.type(
            equipmentInputPlaceholder,
            mockExerciseCreate.equipment
          )
      );

      const difficultyInputPlaceholder = screen.getByPlaceholderText(
        difficultyPlaceholder
      );

      await act(
        async () =>
          await userEvent.selectOptions(
            difficultyInputPlaceholder,
            mockExerciseCreate.difficulty
          )
      );

      const musclesInputPlaceholder =
        screen.getByPlaceholderText(musclesPlaceholder);

      await act(
        async () =>
          await userEvent.type(
            musclesInputPlaceholder,
            mockExerciseCreate.muscles
          )
      );

      const descriptionInputPlaceholder = screen.getByPlaceholderText(
        descriptionPlaceHolder
      );

      await act(
        async () =>
          await userEvent.type(
            descriptionInputPlaceholder,
            mockExerciseCreate.description
          )
      );

      const setsInputPlaceholder = screen.getByPlaceholderText(setsPlaceholder);

      await act(
        async () =>
          await userEvent.type(setsInputPlaceholder, mockExerciseCreate.sets)
      );

      const repsInputPlaceholder = screen.getByPlaceholderText(repsPlaceholder);

      await act(
        async () =>
          await userEvent.type(repsInputPlaceholder, mockExerciseCreate.reps)
      );

      const restInputPlaceholder = screen.getByPlaceholderText(restPlaceholder);

      await act(
        async () =>
          await userEvent.type(restInputPlaceholder, mockExerciseCreate.rest)
      );

      const durationInputPlaceholder =
        screen.getByPlaceholderText(durationPlaceholder);

      await act(
        async () =>
          await userEvent.type(
            durationInputPlaceholder,
            mockExerciseCreate.duration
          )
      );

      const imageInputPlaceholder =
        screen.getByPlaceholderText(imagePlaceholder);

      const submitButton = screen.getByRole("button");

      await act(
        async () => await userEvent.upload(imageInputPlaceholder, picture)
      );

      await act(async () => await userEvent.click(submitButton));

      expect(mockCreateExercise).toHaveBeenCalled();
    });
  });
});
