import styled from "styled-components";

const NotFoundPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;

  .notfound {
    &__number {
      color: ${(props) => props.theme.colors.app};
      font-size: 140px;
      font-family: ${(props) => props.theme.fonts.primary};
    }

    &__text {
      padding: 0 40px 20px;
      text-align: center;
      font-size: 20px;
      color: ${(props) => props.theme.colors.white};
      font-family: ${(props) => props.theme.fonts.secondary};
    }

    &__link {
      padding: 80px 0 0;
      font-weight: 200;
      font-size: 20px;
      color: ${(props) => props.theme.colors.white};
      font-family: ${(props) => props.theme.fonts.primary};

      &--app {
        font-weight: bold;
        color: ${(props) => props.theme.colors.app};
      }
    }
  }
`;

export default NotFoundPageStyled;
