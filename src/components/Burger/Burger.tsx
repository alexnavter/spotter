import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import BurgerStyled from "./BurgerStyled";

const Burger = (): JSX.Element => {
  return (
    <>
      <BurgerStyled>
        <Menu right>
          <div className="container">
            <div className="list">
              <Link className="menu-item" to={"/"}>
                Home
              </Link>
              <Link className="menu-item" to={"/my-exercises"}>
                My exercises
              </Link>
              <Link className="menu-item" to={"/"}>
                Create
              </Link>
              <div className="button">
                <Button className={"logout"} text={"Log out"} />
              </div>
            </div>
          </div>
        </Menu>
      </BurgerStyled>
    </>
  );
};

export default Burger;
