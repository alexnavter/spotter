import { mockBenchPress, mockExercises, mockSquat } from "../../../mocks/mocks";
import {
  deleteExerciseActionCreator,
  exercisesReducer,
  loadExerciseByIdActionCreator,
  loadExercisesActionCreator,
} from "./exercisesSlice";
import { ExercisesData, ExercisesDataStructure } from "./types";

const exercises: ExercisesDataStructure = [mockBenchPress, mockSquat];

const initialState: ExercisesData = {
  exercises: [],
  exercise: {
    id: "",
    name: "",
    type: "",
    equipment: "",
    difficulty: "",
    muscles: "",
    description: "",
    sets: "",
    reps: "",
    rest: "",
    duration: "",
    image: "",
    createdBy: "",
  },
};

describe("Given an exercises reducer", () => {
  describe("When it receives the load exercises action creator", () => {
    test("Then it should load bench press and squat exercises", () => {
      const loadExercisesAction = loadExercisesActionCreator(exercises);

      const expectedExercises: ExercisesData = {
        exercises: exercises,
        exercise: {
          id: "",
          name: "",
          type: "",
          equipment: "",
          difficulty: "",
          muscles: "",
          description: "",
          sets: "",
          reps: "",
          rest: "",
          duration: "",
          image: "",
          createdBy: "",
        },
      };

      const newExercises = exercisesReducer(initialState, loadExercisesAction);

      expect(newExercises).toStrictEqual(expectedExercises);
    });
  });

  describe("When it receives a state and the deleteExercise action to delete an exercise", () => {
    test("Then it should return the new list of exercises", () => {
      const deleteExerciseAction = deleteExerciseActionCreator(mockBenchPress);

      const expectedNewList: ExercisesData = {
        exercises: [mockSquat],
        exercise: mockBenchPress,
      };

      const deletedExercise = exercisesReducer(
        mockExercises,
        deleteExerciseAction
      );

      expect(deletedExercise).toStrictEqual(expectedNewList);
    });
  });

  describe("When it receives a new state and an action to load an exercise by id", () => {
    test("Then it should load that exercise", () => {
      const loadExerciseByIdAction =
        loadExerciseByIdActionCreator(mockBenchPress);
      const expectedNewExercise: ExercisesData = {
        exercises: [],
        exercise: mockBenchPress,
      };

      const loadedExercise = exercisesReducer(
        initialState,
        loadExerciseByIdAction
      );

      expect(expectedNewExercise).toStrictEqual(loadedExercise);
    });
  });
});
