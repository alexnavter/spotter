import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ExercisesData,
  ExercisesDataStructure,
  ExerciseDataStructure,
} from "./types";

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

const exercisesSlice = createSlice({
  name: "exercise",
  initialState,
  reducers: {
    loadExercises: (
      currentExerciseState,
      action: PayloadAction<ExercisesDataStructure>
    ) => ({ ...currentExerciseState, exercises: action.payload }),
    deleteExercise: (
      currentExerciseState,
      action: PayloadAction<ExerciseDataStructure>
    ) => ({
      ...currentExerciseState,
      exercises: currentExerciseState.exercises.filter(
        (exercise) => exercise.id !== action.payload.id
      ),
    }),
    loadExerciseById: (
      currentExerciseState,
      action: PayloadAction<ExerciseDataStructure>
    ) => ({
      ...currentExerciseState,
      exercise: action.payload,
    }),
  },
});

export const {
  loadExercises: loadExercisesActionCreator,
  deleteExercise: deleteExerciseActionCreator,
  loadExerciseById: loadExerciseByIdActionCreator,
} = exercisesSlice.actions;

export const exercisesReducer = exercisesSlice.reducer;
