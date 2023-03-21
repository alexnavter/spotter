import { useAppDispatch } from "../../store/hooks";
import { LoginResponse, UserCredentials } from "./types";
import decodeToken from "jwt-decode";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from "../../store/features/users/userSlice";
import { User } from "../../store/features/users/types";
import { CustomTokenPayload } from "../../types/types";
import {
  displayModalActionCreator,
  closeModalActionCreator,
  setIsLoadingActionCreator,
  unSetIsLoadingActionCreator,
} from "../../store/features/ui/uiSlice";
import useToken from "../useToken/useToken";

interface UseUserStructure {
  loginUser: (userCredentials: UserCredentials) => Promise<void>;
  logoutUser: () => void;
}

const useUser = (): UseUserStructure => {
  const dispatch = useAppDispatch();

  const { removeToken } = useToken();

  const apiUrl = process.env.REACT_APP_URL_API;

  const loginUser = async (userCredentials: UserCredentials) => {
    dispatch(closeModalActionCreator());
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

      const logUserIn: User = {
        email,
        token,
        id,
      };

      dispatch(loginUserActionCreator(logUserIn));
      localStorage.setItem("token", token);
      dispatch(unSetIsLoadingActionCreator());
    } catch {
      dispatch(
        displayModalActionCreator({
          modal: "Wrong credentials",
          isError: true,
        })
      );
      dispatch(unSetIsLoadingActionCreator());
    }
  };

  const logoutUser = () => {
    removeToken();
    dispatch(logoutUserActionCreator());
  };

  return { loginUser, logoutUser };
};

export default useUser;
