import styled from "styled-components";

const ExerciseDetailStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0 0 0;
  height: 100%;

  .detail {
    &__image {
      border-radius: 15px 15px 0 0;
      width: 100%;
      object-fit: cover;
    }
  }

  .details-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    border-radius: 0 0 15px 15px;
    color: ${(props) => props.theme.colors.app};
    gap: 28px;
    padding: 30px 0 0;

    &__heading {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .heading {
      &__title {
        font-family: ${(props) => props.theme.fonts.secondary};
        font-size: 2.2rem;
      }
      &__duration {
        color: ${(props) => props.theme.colors.lightGrey};
        font-family: ${(props) => props.theme.fonts.secondary};
        font-size: 1.8rem;
      }
    }

    &__details {
      display: flex;
      justify-content: space-between;
    }

    .details {
      &__title {
        color: ${(props) => props.theme.colors.app};
        font-family: ${(props) => props.theme.fonts.secondary};
        font-weight: 600;
        font-size: 1.4rem;
      }

      &__value {
        color: ${(props) => props.theme.colors.lightGrey};
        font-family: ${(props) => props.theme.fonts.secondary};
        font-size: 1.3rem;
      }
    }

    &__line {
      display: flex;
      width: 100%;
      height: 1px;
      background: ${(props) => props.theme.colors.app};
      background: radial-gradient(
        circle,
        ${(props) => props.theme.colors.app} 50%,
        rgba(0, 0, 0, 0) 100%
      );
      border-radius: 2px;
      align-self: center;
    }
  }
`;

export default ExerciseDetailStyled;
