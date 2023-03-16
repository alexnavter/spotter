import { mockBenchPress, mockExercises, mockSquat } from "../../../mocks/mocks";
import {
  deleteExerciseActionCreator,
  exercisesReducer,
  loadExercisesActionCreator,
} from "./exercisesSlice";
import { ExercisesData, Exercises } from "./types";

const exercises: Exercises = [mockBenchPress, mockSquat];

const initialState: ExercisesData = {
  exercises: [],
};

describe("Given an exercises reducer", () => {
  describe("When it receives the load exercises action creator", () => {
    test("Then it should load bench press and squat exercises", () => {
      const loadExercisesAction = loadExercisesActionCreator(exercises);

      const expectedExercises: ExercisesData = { exercises: exercises };

      const newExercises = exercisesReducer(initialState, loadExercisesAction);

      expect(newExercises).toStrictEqual(expectedExercises);
    });
  });

  describe("When it receives a state and the deleteExercise action to delete an exercise", () => {
    test("Then it should return the new list of exercises", () => {
      const deleteExerciseAction = deleteExerciseActionCreator(mockBenchPress);

      const expectedNewList: ExercisesData = { exercises: [mockSquat] };

      const deletedExercise = exercisesReducer(
        mockExercises,
        deleteExerciseAction
      );

      expect(deletedExercise).toStrictEqual(expectedNewList);
    });
  });
});
