export interface ExerciseCreationStructure {
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

export interface ExerciseDataStructure extends ExerciseCreationStructure {
  id: string;
  createdBy: string;
}
export interface ExercisesData {
  exercises: Exercises;
  exercise: ExerciseDataStructure;
}

export type Exercises = ExerciseDataStructure[];
