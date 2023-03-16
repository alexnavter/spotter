import { useEffect } from "react";
import CardList from "../../components/CardList/CardList";
import useExercises from "../../hooks/useExercises/useExercises";

const HomePage = (): JSX.Element => {
  const { getExercises } = useExercises();

  useEffect(() => {
    getExercises();
  }, [getExercises]);

  return <CardList />;
};

export default HomePage;
