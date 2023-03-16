import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Loader from "../components/Loader/Loader";
import { useAppSelector } from "../store/hooks";

const Layout = (): JSX.Element => {
  const { isLoading } = useAppSelector((state) => state.ui);
  const { isLogged } = useAppSelector((state) => state.user);

  return (
    <>
      {isLogged && <Header />}
      <main>
        {isLoading && <Loader />}
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
