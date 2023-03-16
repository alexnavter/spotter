import { useAppSelector } from "../../store/hooks";
import Card from "../Card/Card";
import CardListStyled from "./CardListStyled";

const CardList = (): JSX.Element => {
  const exercises = useAppSelector((state) => state.exercise.exercises);

  return (
    <CardListStyled>
      {exercises?.map((exercise) => (
        <li key={exercise.id}>
          <Card exercise={exercise} />
        </li>
      ))}
    </CardListStyled>
  );
};

export default CardList;
