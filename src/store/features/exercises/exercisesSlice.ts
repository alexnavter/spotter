import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ExercisesData, Exercises, ExerciseCreationStructure } from "./types";

const initialState: ExercisesData = {
  exercises: [],
};

const exercisesSlice = createSlice({
  name: "exercise",
  initialState,
  reducers: {
    loadExercises: (
      currentExerciseState,
      action: PayloadAction<Exercises>
    ) => ({ ...currentExerciseState, exercises: action.payload }),
    deleteExercise: (
      currentExerciseState,
      action: PayloadAction<ExerciseCreationStructure>
    ) => {
      const newExercises = currentExerciseState.exercises.filter(
        (exercise) => exercise.id !== action.payload.id
      );

      return { exercises: newExercises };
    },
  },
});

export const {
  loadExercises: loadExercisesActionCreator,
  deleteExercise: deleteExerciseActionCreator,
} = exercisesSlice.actions;

export const exercisesReducer = exercisesSlice.reducer;
