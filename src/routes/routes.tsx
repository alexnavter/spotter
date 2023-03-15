import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../components/App/App";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import HomePage from "../Pages/HomePage/HomePage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import MyExercisesPage from "../Pages/MyExercisesPage/MyExercisesPage";
import endpoints from "./types";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: endpoints.login, element: <LoginPage /> },
      { path: "/", element: <ProtectedRoute element={<HomePage />} /> },
      {
        path: endpoints.myExercises,
        element: <ProtectedRoute element={<MyExercisesPage />} />,
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
