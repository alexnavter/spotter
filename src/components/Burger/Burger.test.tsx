import Burger from "./Burger";
import { act, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderRouterWithProviders from "../../utils/testUtils/renderRouterWithProviders";
import React from "react";
import {
  preloadedStateExercises,
  preloadedStateLoggedIn,
} from "../../utils/testUtils/preloadedStates";

beforeAll(() => {
  jest.clearAllMocks();
  jest.clearAllTimers();
});

afterEach(() => {
  jest.clearAllMocks();
});
const mockLogoutUser = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => () => ({
  logoutUser: mockLogoutUser,
}));

describe("Given a Burger component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with 3 lines", () => {
      renderRouterWithProviders({}, <Burger />);

      const burgerButton = screen.getByRole("button", { name: "Open Menu" });
      expect(burgerButton).toBeInTheDocument();
    });
  });

  describe("When the burger menu is clicked", () => {
    test("Then it should show a side menu with the link Explore Schemas", async () => {
      renderRouterWithProviders(preloadedStateLoggedIn, <Burger />);

      const burgerButton = screen.getByRole("button", { name: "Open Menu" });
      await act(async () => await userEvent.click(burgerButton));
      await act(async () => await userEvent.click(burgerButton));

      const brugerMenuTitle = screen.getByRole("link", {
        name: "Home",
      });

      expect(brugerMenuTitle).toBeInTheDocument();
    });

    test("Then the setIsOpen should be called with true", async () => {
      const setIsOpen = jest.fn();
      jest
        .spyOn(React, "useState")
        .mockImplementation(() => [false, setIsOpen]);

      renderRouterWithProviders(preloadedStateLoggedIn, <Burger />);

      const burgerButton = screen.getByRole("button", { name: "Open Menu" });
      await act(async () => await userEvent.click(burgerButton));

      expect(setIsOpen).toHaveBeenCalledWith(true);
    });
  });

  describe("When the burger menus is opened and the user clicks on the close button", () => {
    test("Then the setIsOpen should be called with false", async () => {
      const setIsOpen = jest.fn();
      jest.spyOn(React, "useState").mockImplementation(() => [true, setIsOpen]);

      renderRouterWithProviders(preloadedStateLoggedIn, <Burger />);

      const burgerButton = screen.getByRole("button", { name: "Open Menu" });
      await act(async () => await userEvent.click(burgerButton));
      const closButton = screen.getByRole("button", { name: "Close Menu" });
      await act(async () => await userEvent.click(closButton));

      expect(setIsOpen).toHaveBeenCalledWith(false);
    });
  });

  describe("When the burger menus is opened and the user clicks on the link Home", () => {
    test("Then the setIsOpen should be called with false", async () => {
      const setIsOpen = jest.fn();

      jest.spyOn(React, "useState").mockImplementation(() => [true, setIsOpen]);

      renderRouterWithProviders(preloadedStateLoggedIn, <Burger />);

      const burgerButton = screen.getByRole("button", { name: "Open Menu" });
      await act(async () => await userEvent.click(burgerButton));

      const linkExploreSchemas = screen.getByRole("link", {
        name: "Home",
      });

      await act(async () => await userEvent.click(linkExploreSchemas));

      expect(setIsOpen).toHaveBeenCalledWith(false);
    });
  });

  describe("When the burger is opened and the user logs out by clicking the sign out button", () => {
    test.only("Then the logoutUser function should be invoked", async () => {
      const setIsOpen = jest.fn();
      jest.spyOn(React, "useState").mockImplementation(() => [true, setIsOpen]);

      renderRouterWithProviders(
        {
          user: {
            email: "alex@gmail.com",
            id: "",
            isLogged: true,
            token: "a123l456e789x",
          },
        },
        <Burger />
      );

      const burgerButton = screen.getByRole("button", { name: "Open Menu" });
      await act(async () => await userEvent.click(burgerButton));

      const signoutButton = screen.getByRole("button", { name: "Log out" });
      await act(async () => await userEvent.click(signoutButton));

      expect(mockLogoutUser).toHaveBeenCalled();
    });
  });
});
