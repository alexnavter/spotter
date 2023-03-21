export interface ModalPayload {
  modal: string;
  isError: boolean;
}

export interface UiState extends ModalPayload {
  isLoading: boolean;
}
