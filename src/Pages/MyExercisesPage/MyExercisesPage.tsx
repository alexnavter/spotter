import CardList from "../../components/CardList/CardList";
import { useEffect } from "react";
import useExercises from "../../hooks/useExercises/useExercises";
const MyExercisesPage = (): JSX.Element => {
  const { getUserExercises } = useExercises();

  useEffect(() => {
    getUserExercises();
  }, [getUserExercises]);

  return (
    <>
      <h2>My exercises</h2>
      <CardList />
    </>
  );
};

export default MyExercisesPage;
