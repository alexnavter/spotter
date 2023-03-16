export interface ExerciseStructure {
  id: string;
  name: string;
  image: string;
  type: "Upper body" | "Lower body";
  equipment: string;
  difficulty: number;
  muscles: {
    primary: string;
    secondary: string[];
  };
  description: string;
  sets: number;
  reps: number;
  rest: number;
  duration: number;
  createdBy: string;
}

export type Exercises = ExerciseStructure[];

export interface ExercisesData {
  exercises: Exercises;
}
