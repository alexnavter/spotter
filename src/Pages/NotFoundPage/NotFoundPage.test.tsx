import { screen } from "@testing-library/react";
import renderRouterWithProviders from "../../utils/testUtils/renderRouterWithProviders";
import NotFoundPage from "./NotFoundPage";

describe("Given a NotFoundPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image with an alt text 'page-not-foun'", async () => {
      const expectedText = "404";

      renderRouterWithProviders({}, <NotFoundPage />);

      const expected404 = screen.getByRole("heading", { name: expectedText });

      expect(expected404).toBeInTheDocument();
    });
  });
});
