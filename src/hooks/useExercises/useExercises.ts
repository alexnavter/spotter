import { useCallback } from "react";
import { loadExercisesActionCreator } from "../../store/features/exercises/exercisesSlice";
import { ExercisesData } from "../../store/features/exercises/types";
import {
  setIsLoadingActionCreator,
  unSetIsLoadingActionCreator,
} from "../../store/features/ui/uiSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const apiUrl = process.env.REACT_APP_URL_API;
const exercisesEndpoint = "/exercises";
const userExercisesEndpoint = "/my-exercises";

const useExercises = () => {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.user);

  const getExercises = useCallback(async () => {
    try {
      dispatch(setIsLoadingActionCreator());
      const response = await fetch(`${apiUrl}${exercisesEndpoint}`, {
        method: "GET",
        headers: { "Content-Type": "application/json;" },
      });

      const { exercises } = (await response.json()) as ExercisesData;

      dispatch(unSetIsLoadingActionCreator());
      dispatch(loadExercisesActionCreator(exercises));
    } catch (error) {
      dispatch(unSetIsLoadingActionCreator());
      return (error as Error).message;
    }
  }, [dispatch]);

  const getUserExercises = useCallback(async () => {
    try {
      dispatch(setIsLoadingActionCreator());

      const response = await fetch(
        `${apiUrl}${exercisesEndpoint}${userExercisesEndpoint}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const { exercises } = (await response.json()) as ExercisesData;

      dispatch(unSetIsLoadingActionCreator());
      dispatch(loadExercisesActionCreator(exercises));
    } catch (error) {
      dispatch(unSetIsLoadingActionCreator());
      return (error as Error).message;
    }
  }, [dispatch, token]);

  return { getExercises, getUserExercises };
};

export default useExercises;
