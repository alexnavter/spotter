import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Loader from "../components/Loader/Loader";
import { displayErrorToast, displaySuccessToast } from "../modals/modals";
import { useAppSelector } from "../store/hooks";
import { ToastContainer } from "react-toastify";

const Layout = (): JSX.Element => {
  const { isLoading } = useAppSelector((state) => state.ui);
  const { isLogged } = useAppSelector((state) => state.user);
  const { modal } = useAppSelector((state) => state.ui);
  const { isError } = useAppSelector((state) => state.ui);

  useEffect(() => {
    if (modal) {
      isError ? displayErrorToast(modal) : displaySuccessToast(modal);
    }
  }, [isError, modal]);

  return (
    <>
      {isLogged && <Header />}
      <main>
        {isLoading && <Loader />}
        <Outlet />
        <ToastContainer />
      </main>
    </>
  );
};

export default Layout;
