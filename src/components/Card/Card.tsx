import { faHeart, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useExercises from "../../hooks/useExercises/useExercises";
import { ExerciseDataStructure } from "../../store/features/exercises/types";
import { useAppSelector } from "../../store/hooks";
import Button from "../Button/Button";
import CardStyled from "./CardStyled";

interface ExerciseCardProps {
  exercise: ExerciseDataStructure;
}

const Card = ({ exercise }: ExerciseCardProps): JSX.Element => {
  const { deleteExercise } = useExercises();
  const { id } = useAppSelector((state) => state.user);
  const isMyExercises = exercise.createdBy === id;
  const deleteIcon = (
    <FontAwesomeIcon icon={faTrashCan} className="heading__bin" />
  );

  return (
    <>
      <CardStyled className="exercise">
        <img
          className="exercise__image"
          src={exercise.image.toString()}
          alt={exercise.name}
          width={350}
          height={225}
        />
        <div className="exercise__container">
          <div className="exercise__heading heading">
            <h2 className="heading__title">{exercise.name}</h2>
            <div className="heading__icons">
              {isMyExercises && (
                <Button
                  className="heading__bin-container"
                  action={() => deleteExercise(exercise)}
                  children={deleteIcon}
                  ariaLabel={"delete"}
                ></Button>
              )}
              <FontAwesomeIcon icon={faHeart} className="heading__heart" />
            </div>
          </div>
          <div className="exercise__data data">
            <div className="data-container">
              <span className="data__title">Type: </span>
              <span className="data__value">{exercise.type}</span>
            </div>
            <div className="data-container">
              <span className="data__title">Muscles: </span>
              <span className="data__value">{exercise.muscles}</span>
            </div>

            <div className="data-container">
              <span className="data__title">Difficulty: </span>
              <span className="data__value">{exercise.difficulty}</span>
            </div>
          </div>
        </div>
      </CardStyled>
    </>
  );
};

export default Card;
