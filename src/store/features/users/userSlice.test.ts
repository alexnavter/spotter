import { User, UserState } from "./types";
import {
  loginUserActionCreator,
  userReducer,
  initialState,
  logoutUserActionCreator,
} from "./userSlice";

describe("Given a user reducer", () => {
  const user: User = {
    id: "",
    email: "alex@gmail.com",
    token: "asd23-asd4das458,.234mdf",
  };
  describe("When it receives an initial state and an action to log in the user", () => {
    test("Then it should return the given user with the property isLogged set to true", () => {
      const expectedState: UserState = {
        id: "",
        email: "alex@gmail.com",
        token: "asd23-asd4das458,.234mdf",
        isLogged: true,
      };

      const loginUserAction = loginUserActionCreator(user);

      const newState = userReducer(initialState, loginUserAction);

      expect(newState).toStrictEqual(expectedState);
    });
  });

  describe("When the user is logged and the logout action is invoked", () => {
    test("Then the user should be logged out by setting the property isLogged to false", () => {
      const expectedUserState = userReducer(
        initialState,
        logoutUserActionCreator
      );

      loginUserActionCreator(user);

      expect(expectedUserState).toStrictEqual(initialState);
    });
  });
});
