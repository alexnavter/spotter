import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ExerciseDetail from "../../components/ExerciseDetail/ExerciseDetail";
import useExercises from "../../hooks/useExercises/useExercises";
import { useAppSelector } from "../../store/hooks";
import DetailPageStyled from "./DetailPageStyled";

const DetailPage = (): JSX.Element => {
  const { findExerciseById } = useExercises();
  const { exercise } = useAppSelector((state) => state.exercise);
  const { id } = useParams();

  useEffect(() => {
    findExerciseById(id!);
  }, [id, findExerciseById]);

  return (
    <DetailPageStyled>
      <ExerciseDetail exercise={exercise} />
    </DetailPageStyled>
  );
};

export default DetailPage;
