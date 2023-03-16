import { renderHook } from "@testing-library/react";
import { useAppDispatch } from "../../store/hooks";
import { CustomTokenPayload } from "../../types/types";
import Wrapper from "../../utils/Wrapper";
import useToken from "./useToken";
import decodeToken from "jwt-decode";

jest.mock("../../store/hooks");

jest.mock("jwt-decode", () => jest.fn());

beforeAll(() => {
  jest.clearAllMocks();
});

const mockTokenPayload: CustomTokenPayload = {
  email: "alex@gmail.com",
  sub: "1234",
};

describe("Given a useToken custom hook", () => {
  describe("When a token exists", () => {
    test("Then it should call the dispatch", () => {
      const mockToken = "a123l456e789x";
      localStorage.setItem("token", mockToken);

      const mockDispatch = jest.fn();

      (useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);

      (decodeToken as jest.MockedFunction<typeof decodeToken>).mockReturnValue(
        mockTokenPayload
      );

      const {
        result: {
          current: { getToken },
        },
      } = renderHook(() => useToken(), {
        wrapper: Wrapper,
      });

      getToken();

      expect(mockDispatch).toHaveBeenCalled();

      localStorage.clear();
    });

    test("Then the token should be removed from the local storage", () => {
      const {
        result: {
          current: { removeToken },
        },
      } = renderHook(() => useToken(), {
        wrapper: Wrapper,
      });

      removeToken();

      expect(localStorage.getItem("token")).toBeNull();
    });
  });

  describe("When getToken function is called, but no token is found", () => {
    test("Then it loginUser action creator should not be called", () => {
      const mockDispatch = jest.fn();

      (useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);

      const {
        result: {
          current: { getToken },
        },
      } = renderHook(() => useToken(), {
        wrapper: Wrapper,
      });

      getToken();

      expect(mockDispatch).not.toHaveBeenCalled();
    });
  });
});
