import { Navigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useAppSelector } from "../../store/hooks";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = (): JSX.Element => {
  const { isLogged } = useAppSelector((state) => state.user);

  return isLogged ? (
    <Navigate to={"/"} replace={true} />
  ) : (
    <>
      <LoginPageStyled>
        <img
          className="spotter"
          src="../img/spotter.svg"
          alt="App logo"
          width={307}
          height={74}
        />
        <LoginForm />
      </LoginPageStyled>
    </>
  );
};

export default LoginPage;
