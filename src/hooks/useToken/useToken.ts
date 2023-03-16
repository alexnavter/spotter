import { useCallback } from "react";
import { useAppDispatch } from "../../store/hooks";
import decodeToken from "jwt-decode";
import { loginUserActionCreator } from "../../store/features/users/userSlice";
import { CustomTokenPayload } from "../../types/types";

interface UseTokenStructure {
  getToken: () => void;
  removeToken: () => void;
}

const useToken = (): UseTokenStructure => {
  const dispatch = useAppDispatch();

  const getToken = useCallback(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const { sub: id, email } = decodeToken<CustomTokenPayload>(token);

      dispatch(loginUserActionCreator({ email, id, token }));
    }
  }, [dispatch]);

  const removeToken = () => {
    localStorage.removeItem("token");
  };

  return { getToken, removeToken };
};

export default useToken;
