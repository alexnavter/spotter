import { useAppSelector } from "../../store/hooks";
import ProtectedRoute from "./ProtectedRoute";
import { screen } from "@testing-library/react";
import * as ReactRouterDom from "react-router-dom";
import renderRouterWithProviders from "../../utils/testUtils/renderRouterWithProviders";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Navigate: jest.fn(),
}));

jest.mock("../../store/hooks", () => ({
  useAppSelector: jest.fn(),
}));

describe("Given a ProtectedRoute component", () => {
  describe("When it is rendered and a token exists", () => {
    test("Then it should show the component that it is receiving with props", () => {
      (useAppSelector as jest.Mock).mockReturnValueOnce({
        token: "a123l456e789x",
      });

      const component = <div>Login page</div>;

      renderRouterWithProviders(<ProtectedRoute element={component} />);

      const expectedComponent = screen.getByText("Login page");

      expect(expectedComponent).toBeInTheDocument();
    });
  });

  describe("When it is rendered and a token does not exist", () => {
    test("Then it should show the component that it is receiving with props", () => {
      const component = <div>Login page</div>;

      renderRouterWithProviders(<ProtectedRoute element={component} />);

      expect(ReactRouterDom.Navigate).toHaveBeenCalled();
    });
  });
});
