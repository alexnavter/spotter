export interface ExerciseCreationStructure {
  name: string;
  type: string;
  equipment: string;
  difficulty: number;
  muscles: string;
  description: string;
  sets: number;
  reps: number;
  rest: number;
  duration: number;
  image: File | string;
}

export interface ExerciseDataStructure extends ExerciseCreationStructure {
  id: string;
  createdBy: string;
}
export interface ExercisesData {
  exercises: Exercises;
}

export type Exercises = ExerciseDataStructure[];
