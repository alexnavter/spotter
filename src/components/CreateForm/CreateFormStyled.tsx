import styled from "styled-components";

const CreateFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  gap: 25px;
  padding: 20px 0 20px;

  .pair {
    display: flex;
    justify-content: space-between;
    width: auto;

    &__label {
      display: flex;
      flex-direction: column;
      font-family: ${(props) => props.theme.fonts.primary};
      font-size: 1.1rem;
      font-weight: 600;
      color: ${(props) => props.theme.colors.white};
    }

    &__input {
      height: 50px;
      width: 130px;
      border-radius: 10px;
      border: solid 2px ${(props) => props.theme.colors.grey};
      padding: 0.5rem;
      font-size: 1rem;
      background-color: ${(props) => props.theme.colors.black};
      color: ${(props) => props.theme.colors.white};

      :focus {
        border: solid 2px ${(props) => props.theme.colors.app};
      }
    }
  }

  .container-form {
    display: flex;
    width: 100%;
  }

  .container {
    display: flex;
    flex-direction: column;

    gap: 10px;

    &__label {
      display: flex;
      flex-direction: column;
      font-family: ${(props) => props.theme.fonts.primary};
      font-size: 1.1rem;
      font-weight: 600;
      color: ${(props) => props.theme.colors.white};
    }

    &__input {
      height: 50px;
      border-radius: 10px;
      border: solid 2px ${(props) => props.theme.colors.grey};
      padding: 0.8rem;
      background-color: ${(props) => props.theme.colors.black};
      color: ${(props) => props.theme.colors.white};

      ::placeholder {
        font-family: ${(props) => props.theme.fonts.secondary};
        color: ${(props) => props.theme.colors.grey};
        font-size: 1.1rem;
      }

      :focus {
        border: solid 2px ${(props) => props.theme.colors.app};
      }

      &--select {
        margin-right: 10px;
      }
    }
  }

  .create-button {
    display: flex;
    background: ${(props) => props.theme.colors.app};
    opacity: 0.8;
    font-size: 2rem;
    font-family: ${(props) => props.theme.fonts.secondary};
    justify-content: center;

    border-radius: 10px;
    border: solid 2px red;
    padding: 0.8rem;
    width: 100%;
    color: black;

    margin-top: 20px;

    :disabled {
      :disabled {
        opacity: 70%;
      }
    }
  }

  .heading {
    display: flex;
    flex-direction: column;

    &__title {
      display: flex;
      align-self: center;
      font-size: 1.6rem;
      color: ${(props) => props.theme.colors.app};
      font-family: ${(props) => props.theme.fonts.secondary};
      padding: 40px 0 10px;
      font-weight: 400;
      text-transform: uppercase;
    }

    &__line {
      display: flex;
      width: 100%;
      height: 2px;
      background: ${(props) => props.theme.colors.app};
      background: radial-gradient(
        circle,
        ${(props) => props.theme.colors.app} 31%,
        rgba(0, 0, 0, 0) 87%
      );
      border-radius: 2px;
      align-self: center;
    }
  }
`;

export default CreateFormStyled;
