import { Link } from "react-router-dom";
import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = (): JSX.Element => {
  return (
    <>
      <NotFoundPageStyled className="notfound">
        <h2 className="notfound__number">404</h2>
        <h3 className="notfound__text">
          Sorry, we were unable to find that page
        </h3>
        <h3 className="notfound__link">
          Back to{" "}
          <Link to={"/"} className="notfound__link notfound__link--app">
            home
          </Link>
        </h3>
      </NotFoundPageStyled>
    </>
  );
};

export default NotFoundPage;
