import styled from "styled-components";

const CardStyled = styled.div`
  display: flex;
  background: ${(props) => props.theme.colors.white};

  border-radius: 15px;
  flex-direction: column;
  .exercise {
    &__container {
      padding: 10px 10px 15px;
    }

    &__image {
      border-radius: 15px 15px 0 0;
      width: 100%;
      object-fit: cover;
    }

    &__heading {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__data {
      display: flex;
      flex-direction: column;
    }
  }

  .heading {
    &__title {
      font-family: ${(props) => props.theme.fonts.secondary};
      color: ${(props) => props.theme.colors.black};
      font-weight: 800;
      font-size: 1.5rem;
    }

    &__icons {
      display: flex;
      gap: 1rem;
    }

    &__heart {
      color: ${(props) => props.theme.colors.app};
      font-size: 2.1rem;
    }

    &__bin-container {
      background: transparent;
    }

    &__bin {
      color: ${(props) => props.theme.colors.grey};
      font-size: 2.1rem;
    }
  }

  .data {
    display: flex;
    padding: 15px 0 0 0;
    gap: 15px;
    font-size: 16px;

    &__title {
      color: ${(props) => props.theme.colors.black};
      font-weight: 600;
    }

    &__value {
      color: ${(props) => props.theme.colors.grey};
    }
  }
`;

export default CardStyled;
