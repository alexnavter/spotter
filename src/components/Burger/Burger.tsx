import { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import BurgerStyled from "./BurgerStyled";

const Burger = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <BurgerStyled>
        <Menu
          right
          isOpen={isOpen}
          onOpen={() => setIsOpen(true)}
          onClose={() => setIsOpen(false)}
        >
          <div className="container">
            <div className="list">
              <Link className="menu-item" onClick={closeMenu} to={"/"}>
                Home
              </Link>
              <Link
                className="menu-item"
                onClick={closeMenu}
                to={"/my-exercises"}
              >
                My exercises
              </Link>
              <Link className="menu-item" onClick={closeMenu} to={"/"}>
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
