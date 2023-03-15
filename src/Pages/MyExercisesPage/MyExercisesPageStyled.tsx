import styled from "styled-components";

const MyExercisesPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .line {
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

  .title {
    display: flex;
    align-self: center;
    font-size: 1.6rem;
    color: ${(props) => props.theme.colors.app};
    font-family: ${(props) => props.theme.fonts.secondary};
    padding: 40px 0 10px;
    font-weight: 400;
    text-transform: uppercase;
  }
`;

export default MyExercisesPageStyled;
