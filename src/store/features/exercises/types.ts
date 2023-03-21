export interface ExerciseCreateStructure {
  name: string;
  type: string;
  equipment: string;
  difficulty: string;
  muscles: string;
  description: string;
  sets: string;
  reps: string;
  rest: string;
  duration: string;
  image: File | string;
}

export interface ExerciseDataStructure extends ExerciseCreateStructure {
  id: string;
  createdBy: string;
}
export interface ExercisesData {
  exercises: ExercisesDataStructure;
  exercise: ExerciseDataStructure;
}

export type ExercisesDataStructure = ExerciseDataStructure[];
