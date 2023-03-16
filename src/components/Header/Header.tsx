import Burger from "../Burger/Burger";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled>
      <header className="header">
        <h1 className="logo">Spotter</h1>
      </header>
      <Burger />
    </HeaderStyled>
  );
};

export default Header;
