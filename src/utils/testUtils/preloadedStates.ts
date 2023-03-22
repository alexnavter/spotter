import { mockExercises } from "../../mocks/mocks";

export const preloadedStateLoggedIn = {
  user: {
    email: "",
    id: "",
    token: "",
    isLogged: true,
  },
};

export const preloadedStateExercise = {
  id: "marcelino1234",
  name: "Bench Press",
  type: "Upper body",
  equipment: "Barbell, Bench",
  difficulty: "3",
  muscles: "Chest",
  description:
    "Lie on a bench with a barbell, lower it to your chest, and then push it back up.",
  sets: "3",
  reps: "10",
  rest: "60",
  duration: "0",
  image: "https://cdn.mos.cms.futurecdn.net/pLaRi5jXSHDKu6WRydetBo-1200-80.jpg",
  createdBy: "Alex",
};

export const preloadedStateToast = {
  ui: { modal: "Wrong credentials", isError: true, isLoading: false },
};

export const preloadedStateLoading = {
  ui: { isLoading: true, isError: false, modal: "" },
};

export const preloadedStateExercises = {
  exercises: mockExercises,
};
