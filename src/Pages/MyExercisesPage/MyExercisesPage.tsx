import CardList from "../../components/CardList/CardList";
import { useEffect } from "react";
import useExercises from "../../hooks/useExercises/useExercises";
import MyExercisesPageStyled from "./MyExercisesPageStyled";
const MyExercisesPage = (): JSX.Element => {
  const { getUserExercises } = useExercises();

  useEffect(() => {
    getUserExercises();
  }, [getUserExercises]);

  return (
    <>
      <MyExercisesPageStyled>
        <h2 className="title">My exercises</h2>
        <span className="line"></span>
        <CardList />
      </MyExercisesPageStyled>
    </>
  );
};

export default MyExercisesPage;
