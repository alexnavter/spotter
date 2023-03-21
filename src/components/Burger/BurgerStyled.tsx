import styled from "styled-components";

const BurgerStyled = styled.div`
  .container {
    display: flex;
    justify-content: space-between;
  }

  .logout {
    display: flex;
    background: ${(props) => props.theme.colors.app};
    opacity: 0.8;
    font-size: 2rem;
    font-family: ${(props) => props.theme.fonts.secondary};
    justify-content: center;
    align-items: center;
    height: 65px;

    border-radius: 10px;
    padding: 0.8rem;
    width: 100%;
    color: black;

    :disabled {
      :disabled {
        opacity: 70%;
      }
    }
  }

  /* Wrapper for item list */
  .list {
    display: flex;
    flex-direction: column;
    color: ${(props) => props.theme.colors.app};
    font-family: ${(props) => props.theme.fonts.secondary};
    font-size: 2rem;
    padding: 0.8em;
    gap: 30px;
    margin-top: 30px;
  }

  .bm-item-list {
    max-height: 95%;
  }

  /* Position and sizing of burger button */
  .bm-burger-button {
    position: relative;
    width: 42px;
    height: 30px;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: ${(props) => props.theme.colors.app};
    border-radius: 50px;
    width: 42px;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 40px;
    min-width: 40px;
    left: 10px;
    margin-top: 10px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    display: flex;
    text-align: center;
    min-height: 32px;
    background: ${(props) => props.theme.colors.app};
  }

  /*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
  .bm-menu-wrap {
    position: fixed !important;
    height: 100% !important;
    right: 0 !important;
    top: 0 !important;
  }

  /* General sidebar styles */
  .bm-menu {
    background: ${(props) => props.theme.colors.black};
    border-left: solid 2px ${(props) => props.theme.colors.app};
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: ${(props) => props.theme.colors.app};
  }
`;

export default BurgerStyled;
