import { mockExercises } from "../../mocks/mocks";

export const preloadedStateLoggedIn = {
  user: {
    email: "",
    id: "",
    token: "",
    isLogged: true,
  },
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
