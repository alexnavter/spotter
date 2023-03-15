import { renderHook } from "@testing-library/react";
import { errorHandlers } from "../../mocks/handlers";
import { mockExercises } from "../../mocks/mocks";
import { server } from "../../mocks/server";
import { loadExercisesActionCreator } from "../../store/features/exercises/exercisesSlice";
import { store } from "../../store/store";
import Wrapper from "../../utils/Wrapper";
import useExercises from "./useExercises";

afterEach(() => {
  jest.clearAllMocks();
});

const spy = jest.spyOn(store, "dispatch");

describe("Given a useExercises custom hook", () => {
  describe("When the getExercises function is called", () => {
    test("Then it should call the dispatch", async () => {
      const {
        result: {
          current: { getExercises },
        },
      } = renderHook(() => useExercises(), { wrapper: Wrapper });

      await getExercises();

      expect(spy).toHaveBeenCalledWith(
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

      expect(spy).not.toHaveBeenCalledWith(
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
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    });
  });

  describe("When the getUserExercises function is called and an error occurs", () => {
    beforeEach(() => {
      server.resetHandlers(...errorHandlers);
    });

    test("Then it should invoke the dispatch", async () => {
      const {
        result: {
          current: { getUserExercises },
        },
      } = renderHook(() => useExercises(), { wrapper: Wrapper });

      await getUserExercises();

      expect(spy).toHaveBeenCalled();
    });
  });
});
