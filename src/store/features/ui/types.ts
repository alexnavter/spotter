export interface ModalPayload {
  message: string;
  isError: boolean;
}

export interface UiState extends ModalPayload {
  isLoading: boolean;
}
