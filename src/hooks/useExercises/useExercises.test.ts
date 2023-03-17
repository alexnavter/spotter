import { renderHook } from "@testing-library/react";
import {
  successDeleteHandler,
  errorHandlers,
  errorDeleteHandler,
  errorGetUserExercisesHandler,
} from "../../mocks/handlers";
import {
  mockBenchPress,
  mockExercises,
  mockExercisesList,
} from "../../mocks/mocks";
import { server } from "../../mocks/server";
import {
  deleteExerciseActionCreator,
  loadExercisesActionCreator,
} from "../../store/features/exercises/exercisesSlice";
import { displayModalActionCreator } from "../../store/features/ui/uiSlice";
import { store } from "../../store/store";
import Wrapper from "../../utils/Wrapper";
import useExercises from "./useExercises";

afterEach(() => {
  jest.clearAllMocks();
});

beforeAll(() => {
  jest.clearAllMocks();
});

beforeEach(() => {
  jest.resetAllMocks();
});

const spyDispatch = jest.spyOn(store, "dispatch");

describe("Given a useExercise", () => {
  describe("When the deleteExercise function is called", () => {
    test("Then it should call the dispatch with the action to delete an exercise", async () => {
      server.use(...successDeleteHandler);
      const {
        result: {
          current: { deleteExercise },
        },
      } = renderHook(() => useExercises(), { wrapper: Wrapper });

      await deleteExercise(mockBenchPress);

      expect(spyDispatch).toHaveBeenCalledWith(
        deleteExerciseActionCreator(mockBenchPress)
      );
    });
  });

  describe("When the deleteExercise function is called and the response is failed", () => {
    test("Then it throw an error", async () => {
      server.use(...errorDeleteHandler);

      const {
        result: {
          current: { deleteExercise },
        },
      } = renderHook(() => useExercises(), { wrapper: Wrapper });

      await deleteExercise(mockBenchPress);

      expect(spyDispatch).toHaveBeenCalledWith(
        displayModalActionCreator({
          isError: true,
          message: "The exercise couldn't be deleted",
        })
      );
    });
  });
});

describe("Given a useExercises custom hook", () => {
  describe("When the getExercises function is called", () => {
    test("Then it should call the dispatch with the action to load exercises", async () => {
      const {
        result: {
          current: { getExercises },
        },
      } = renderHook(() => useExercises(), { wrapper: Wrapper });

      await getExercises();

      expect(spyDispatch).toHaveBeenCalledWith(
        loadExercisesActionCreator(mockExercises.exercises)
      );
    });
  });

  describe("When the getExercises function is called and the reponse from the request is failed", () => {
    beforeEach(() => {
      server.resetHandlers(...errorHandlers);
    });

    test("Then it should not call the dispatch", async () => {
      const {
        result: {
          current: { getExercises },
        },
      } = renderHook(() => useExercises(), { wrapper: Wrapper });

      await getExercises();

      expect(spyDispatch).not.toHaveBeenCalledWith(
        loadExercisesActionCreator(mockExercises.exercises)
      );
    });
  });

  describe("When the getUserExercises function is called", () => {
    beforeEach(() => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue({}),
      });
    });

    test("Then it should make a request with an Authorization header", async () => {
      const token = "";
      const {
        result: {
          current: { getUserExercises },
        },
      } = renderHook(() => useExercises(), { wrapper: Wrapper });

      await getUserExercises();

      const apiUrl = process.env.REACT_APP_URL_API;
      const exercisesEndpoint = "/exercises";
      const userExercisesEndpoint = "/my-exercises";

      expect(global.fetch).toHaveBeenCalledWith(
        `${apiUrl}${exercisesEndpoint}${userExercisesEndpoint}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    });
  });

  describe("When the getUserExercises function is called and an error occurs", () => {
    test("Then it throw an error", async () => {
      server.use(...errorGetUserExercisesHandler);

      const {
        result: {
          current: { getUserExercises },
        },
      } = renderHook(() => useExercises(), { wrapper: Wrapper });

      await getUserExercises();

      expect(spyDispatch).not.toHaveBeenCalledWith(
        loadExercisesActionCreator(mockExercisesList)
      );
    });
  });
});
