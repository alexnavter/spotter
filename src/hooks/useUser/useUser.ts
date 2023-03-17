import { useAppDispatch } from "../../store/hooks";
import { LoginResponse, UserCredentials } from "./types";
import decodeToken from "jwt-decode";
import { loginUserActionCreator } from "../../store/features/users/userSlice";
import { User } from "../../store/features/users/types";
import { CustomTokenPayload } from "../../types/types";
import {
  displayModalActionCreator,
  resetModalActionCreator,
  setIsLoadingActionCreator,
  unSetIsLoadingActionCreator,
} from "../../store/features/ui/uiSlice";

interface UseUserStructure {
  loginUser: (userCredentials: UserCredentials) => Promise<void>;
}

const useUser = (): UseUserStructure => {
  const dispatch = useAppDispatch();

  const apiUrl = process.env.REACT_APP_URL_API;

  const loginUser = async (userCredentials: UserCredentials) => {
    dispatch(resetModalActionCreator());
    try {
      dispatch(setIsLoadingActionCreator());
      const response = await fetch(`${apiUrl}/users/login`, {
        method: "POST",
        body: JSON.stringify(userCredentials),
        headers: { "Content-Type": "application/json" },
      });

      const { token } = (await response.json()) as LoginResponse;

      const tokenPayload: CustomTokenPayload = decodeToken(token);

      const { sub: id, email } = tokenPayload;

      const logUser: User = {
        email,
        token,
        id,
      };

      dispatch(loginUserActionCreator(logUser));
      localStorage.setItem("token", token);
      dispatch(unSetIsLoadingActionCreator());
    } catch {
      dispatch(
        displayModalActionCreator({
          message: "Wrong credentials",
          isError: true,
        })
      );
      dispatch(unSetIsLoadingActionCreator());
    }
  };
  return { loginUser };
};

export default useUser;
