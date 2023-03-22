interface Routes {
  login: string;
  myExercises: string;
  create: string;
  detail: string;
}

const endpoints: Routes = {
  login: "/login",
  myExercises: "/my-exercises",
  create: "/create",
  detail: "/detail/:id",
};

export default endpoints;
