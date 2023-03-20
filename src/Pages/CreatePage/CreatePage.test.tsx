import renderRouterWithProviders from "../../utils/testUtils/renderRouterWithProviders";
import CreatePage from "./CreatePage";
import { screen } from "@testing-library/react";

describe("Given a HomePage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with the text 'create event'", () => {
      const expectedButtonText = "Create exercise";
      renderRouterWithProviders(
        {
          user: { id: "asdasdasdads", email: "", isLogged: true, token: "" },
        },
        <CreatePage />
      );

      const expectedButton = screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
