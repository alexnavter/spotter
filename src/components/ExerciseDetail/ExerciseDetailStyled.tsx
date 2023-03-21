import styled from "styled-components";

const ExerciseDetailStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  .detail {
    &__image {
      border-radius: 15px 15px 0 0;
      width: 100%;
      object-fit: cover;
    }
  }

  .details-container {
    height: 100vh;
    border: solid 2px ${(props) => props.theme.colors.app};
    border-radius: 0 0 15px 15px;
    color: ${(props) => props.theme.colors.app};
  }
`;

export default ExerciseDetailStyled;
