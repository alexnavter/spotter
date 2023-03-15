import { PreloadedState } from "@reduxjs/toolkit";
import { RouterProvider } from "react-router-dom";
import { getRouter, router } from "../../routes/routes";
import { RootState } from "../../store/store";
import renderWithProviders from "./renderWithProviders";

const renderRouterWithProviders = (
  ui?: React.ReactElement,
  preloadedState?: PreloadedState<RootState>
) => {
  const routerWithProvider = ui ? getRouter(ui) : router;

  return renderWithProviders(
    <RouterProvider router={routerWithProvider}></RouterProvider>,
    preloadedState
  );
};

export default renderRouterWithProviders;
