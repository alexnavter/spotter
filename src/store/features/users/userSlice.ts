import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserState } from "./types";

export const initialState: UserState = {
  email: "",
  token: "",
  id: "",
  isLogged: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (currentUserState, action: PayloadAction<User>): UserState => ({
      ...currentUserState,
      email: action.payload.email,
      token: action.payload.token,
      id: action.payload.id,
      isLogged: true,
    }),
    logoutUser: (): UserState => ({ ...initialState }),
  },
});

export const {
  loginUser: loginUserActionCreator,
  logoutUser: logoutUserActionCreator,
} = userSlice.actions;
export const userReducer = userSlice.reducer;
