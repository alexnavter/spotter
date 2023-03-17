import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LoginForm from "../../components/LoginForm/LoginForm";
import { displayToast } from "../../modals/modals";
import { useAppSelector } from "../../store/hooks";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = (): JSX.Element => {
  const { isLogged } = useAppSelector((state) => state.user);
  const { message: modal } = useAppSelector((state) => state.ui);

  useEffect(() => {
    if (modal) {
      displayToast(modal);
    }
  }, [modal]);

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
        <ToastContainer />
      </LoginPageStyled>
    </>
  );
};

export default LoginPage;
