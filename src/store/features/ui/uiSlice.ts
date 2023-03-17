import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModalPayload, UiState } from "./types";

export const initialState: UiState = {
  message: "",
  isError: false,
  isLoading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    displayModal: (
      currentState,
      action: PayloadAction<ModalPayload>
    ): UiState => ({
      ...currentState,
      message: action.payload.message,
      isError: action.payload.isError,
    }),
    closeModal: (currentState): UiState => ({
      ...currentState,
      message: "",
      isError: false,
    }),
    setIsLoading: (currentState): UiState => ({
      ...currentState,
      isLoading: true,
    }),
    unSetIsLoading: (currentState): UiState => ({
      ...currentState,
      isLoading: false,
    }),
  },
});

export const uiReducer = uiSlice.reducer;

export const {
  displayModal: displayModalActionCreator,
  setIsLoading: setIsLoadingActionCreator,
  unSetIsLoading: unSetIsLoadingActionCreator,
  closeModal: resetModalActionCreator,
} = uiSlice.actions;
