import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../components/App/App";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import CreatePage from "../Pages/CreatePage/CreatePage";
import DetailPage from "../Pages/DetailPage/DetailPage";
import HomePage from "../Pages/HomePage/HomePage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import MyExercisesPage from "../Pages/MyExercisesPage/MyExercisesPage";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import endpoints from "./types";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,

    children: [
      { path: "/", element: <ProtectedRoute element={<HomePage />} /> },
      { path: endpoints.login, element: <LoginPage /> },
      { path: "*", element: <NotFoundPage /> },
      {
        path: endpoints.myExercises,
        element: <ProtectedRoute element={<MyExercisesPage />} />,
      },
      {
        path: endpoints.create,
        element: <ProtectedRoute element={<CreatePage />} />,
      },
      {
        path: endpoints.detail,
        element: <ProtectedRoute element={<DetailPage />} />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

export const getRouter = (ui: React.ReactElement) =>
  createBrowserRouter([
    {
      path: "/",
      element: ui,
    },
  ]);
