import { ModalPayload, UiState } from "./types";
import {
  initialState,
  displayModalActionCreator,
  uiReducer,
  setIsLoadingActionCreator,
  unSetIsLoadingActionCreator,
  closeModalActionCreator,
} from "./uiSlice";

describe("Given a uiReducer", () => {
  describe("When its displayModal action creator is invoked, with the text 'Wrong credentials' and its property isError true", () => {
    test("Then it should set to modal the text 'Wrong crendentials' and set property isError to true", () => {
      const modal: ModalPayload = {
        modal: "Wrong credentials.",
        isError: true,
      };

      const expectedUiState: UiState = {
        modal: modal.modal,
        isError: modal.isError,
        isLoading: false,
      };

      const displayModal = displayModalActionCreator(modal);
      const newModalState = uiReducer(initialState, displayModal);

      expect(newModalState).toStrictEqual(expectedUiState);
    });
  });

  describe("When its setIsLoading action creator is invoked", () => {
    test("Then it should set isLoading property to true", () => {
      const expectedUiState: UiState = {
        isError: false,
        isLoading: true,
        modal: "",
      };

      const newUiState = uiReducer(initialState, setIsLoadingActionCreator());

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });

  describe("When its unSetIsLoading action creator is invoked", () => {
    test("Then it should set isLoading property to false", () => {
      const expectedUiState: UiState = {
        isError: false,
        isLoading: false,
        modal: "",
      };

      const currentUiState: UiState = {
        isError: false,
        isLoading: true,
        modal: "",
      };

      const newUiState = uiReducer(
        currentUiState,
        unSetIsLoadingActionCreator()
      );

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });

  describe("When its resetModal action creator is invoked", () => {
    test("Then it should set isError property to false and set the modal property to ''", () => {
      const expectedUiState: UiState = {
        isError: false,
        isLoading: false,
        modal: "",
      };

      const newModalState = uiReducer(initialState, closeModalActionCreator());

      expect(newModalState).toStrictEqual(expectedUiState);
    });
  });

  describe("When its displayModal action creator is invoked, with the text 'Exercise successfully created' and its property isError false", () => {
    test("Then it should set to modal the text 'Exercise successfully created' and set property isError to false", () => {
      const modal: ModalPayload = {
        modal: "Exercise successfully created.",
        isError: false,
      };

      const expectedUiState: UiState = {
        modal: modal.modal,
        isError: modal.isError,
        isLoading: false,
      };

      const displayModal = displayModalActionCreator(modal);
      const newModalState = uiReducer(initialState, displayModal);

      expect(newModalState).toStrictEqual(expectedUiState);
    });
  });
});
