import styled from "styled-components";

const LoginFormStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;

  width: 100%;

  .form {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;

    &__label {
      display: flex;
      flex-direction: column;
      gap: 9px;
      font-family: ${(props) => props.theme.fonts.primary};
      font-size: 1.18 rem;
      font-weight: 700;
      color: ${(props) => props.theme.colors.white};
    }

    &__input {
      height: 40px;
      border-radius: 10px;
      border: solid 2px ${(props) => props.theme.colors.app};
      padding: 0.8rem;
      background-color: ${(props) => props.theme.colors.black};
      color: ${(props) => props.theme.colors.white};

      ::placeholder {
        font-family: ${(props) => props.theme.fonts.secondary};
        color: ${(props) => props.theme.colors.grey};
      }
    }

    .form-button {
      background-color: ${(props) => props.theme.colors.app};
      color: ${(props) => props.theme.colors.white};
      font-size: 20px;
      font-weight: 700;
      margin-top: 10px;

      border-radius: 10px;
      padding: 0.8rem;
      width: 100%;
      height: 50px;

      :disabled {
        :disabled {
          opacity: 70%;
        }
      }
    }

    .register {
      display: flex;
      align-self: center;

      &__text {
        color: ${(props) => props.theme.colors.white};
      }
      &__link {
        color: ${(props) => props.theme.colors.app};
        font-weight: 700;
      }
    }
  }
`;

export default LoginFormStyled;
