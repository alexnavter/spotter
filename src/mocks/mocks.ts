import {
  Exercises,
  ExercisesData,
  ExerciseStructure,
} from "../store/features/exercises/types";

export const mockBenchPress: ExerciseStructure = {
  id: "marcelino1234",
  name: "Bench Press",
  type: "Upper body",
  equipment: "Barbell, Bench",
  difficulty: 3,
  muscles: {
    primary: "Chest",
    secondary: ["Triceps", "Shoulders"],
  },
  description:
    "Lie on a bench with a barbell, lower it to your chest, and then push it back up.",
  sets: 3,
  reps: 10,
  rest: 60,
  duration: 0,
  image: "https://cdn.mos.cms.futurecdn.net/pLaRi5jXSHDKu6WRydetBo-1200-80.jpg",
  createdBy: "Alex",
};

export const mockSquat: ExerciseStructure = {
  id: "2",
  name: "Squat",
  type: "Lower body",
  equipment: "Barbell, Power Rack",
  difficulty: 4,
  muscles: {
    primary: "Quadriceps",
    secondary: ["Glutes", "Hamstrings"],
  },
  description:
    "Place a barbell on your shoulders behind your neck, bend your knees to lower your hips until your thighs are parallel to the floor, then extend your legs to return to standing.",
  sets: 3,
  reps: 8,
  rest: 90,
  duration: 0,
  image: "https://example.com/squat.jpg",
  createdBy: "Alex",
};

export const mockExercises: ExercisesData = {
  exercises: [mockBenchPress, mockSquat],
};

export const mockExercisesList: Exercises = [mockBenchPress, mockSquat];
