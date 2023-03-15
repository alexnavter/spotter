import { rest } from "msw";
import { mockExercises } from "./mocks";

const routes = {
  users: "/users",
  login: "/login",

  exercises: "/exercises",
  getExercises: "/exercises",
};

const apiUrl = process.env.REACT_APP_URL_API!;

export const handlers = [
  rest.get(`${apiUrl}${routes.exercises}`, async (req, res, ctx) => {
    return res(
      ctx.status(200),

      ctx.json(mockExercises)
    );
  }),

  rest.post(`${apiUrl}${routes.users}${routes.login}`, async (req, res, ctx) =>
    res(ctx.status(200), ctx.json({ token: "sda123-asd1!23.da?34" }))
  ),
];

export const errorHandlers = [
  rest.get(`${apiUrl}${routes.exercises}`, (req, res, ctx) => {
    return res(ctx.status(500));
  }),

  rest.post(`${apiUrl}${routes.users}${routes.login}`, (req, rest, ctx) => {
    return rest(ctx.status(401));
  }),
];
