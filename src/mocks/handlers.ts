import { rest } from "msw";
import { mockExercises } from "./mocks";

const routes = {
  users: "/users",
  login: "/login",

  exercises: "/exercises",
  myExercises: "/my-exercises",
  delete: "/delete/",
  id: "marcelino1234",
};

export const apiUrl = process.env.REACT_APP_URL_API!;

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

export const errorGetUserExercisesHandler = [
  rest.get(`${apiUrl}/exercises/my-exercises`, (req, rest, ctx) => {
    rest(ctx.status(400));
  }),
];

export const errorCreateExerciseHandler = [
  rest.post(`${apiUrl}/exercises/create`, (req, rest, ctx) => {
    return rest(ctx.status(400));
  }),
];

export const errorHandlers = [
  rest.post(`${apiUrl}${routes.users}${routes.login}`, (req, rest, ctx) => {
    return rest(ctx.status(401));
  }),
];

export const successDeleteHandler = [
  rest.delete(
    `${apiUrl}/exercises/delete/marcelino1234`,
    async (req, res, ctx) => {
      return res(ctx.status(200));
    }
  ),
];

export const errorDeleteHandler = [
  rest.delete(
    `${apiUrl}/exercises/delete/marcelino1234`,
    async (req, res, ctx) => {
      return res(
        ctx.status(500),
        ctx.json({ error: "The exercise couldn't be deleted" })
      );
    }
  ),
];
