import { useState } from "react";
import useExercises from "../../hooks/useExercises/useExercises";
import { ExerciseCreationStructure } from "../../store/features/exercises/types";
import Button from "../Button/Button";
import CreateFormStyled from "./CreateFormStyled";

const CreateForm = (): JSX.Element => {
  const { createExercise } = useExercises();

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [equipment, setEquipment] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [muscles, setMuscles] = useState("");
  const [description, setDescription] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [rest, setRest] = useState("");
  const [duration, setDuration] = useState("");
  const [image, setImage] = useState<File | string>("");

  const handleName = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setName(value);
  };

  const handleType = ({
    target: { value },
  }: React.ChangeEvent<HTMLSelectElement>) => {
    setType(value);
  };

  const handleEquipment = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setEquipment(value);
  };

  const handleDifficulty = ({
    target: { value },
  }: React.ChangeEvent<HTMLSelectElement>) => {
    setDifficulty(value);
  };

  const handleMuscles = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setMuscles(value);
  };

  const handleDescription = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(value);
  };

  const handleSets = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setSets(value);
  };

  const handleReps = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setReps(value);
  };

  const handleRest = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setRest(value);
  };

  const handleDuration = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setDuration(value);
  };

  const handleImage = ({
    target: { files },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setImage(files?.[0]!);
  };

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newExercise: ExerciseCreationStructure = {
      name,
      type,
      equipment,
      difficulty,
      muscles,
      description,
      sets,
      reps,
      rest,
      duration,
      image,
    };
    await createExercise(newExercise);
  };

  const isDisabled =
    name === "" ||
    type === "" ||
    equipment === "" ||
    difficulty === "" ||
    muscles === "" ||
    description === "" ||
    sets === "" ||
    reps === "" ||
    rest === "" ||
    duration === "" ||
    image === "";

  return (
    <CreateFormStyled
      className="create-form"
      onSubmit={onSubmitHandler}
      autoComplete="off"
    >
      <div className="heading">
        <h2 className="heading__title">Create new exercise</h2>
        <span className="heading__line"></span>
      </div>
      <div className="create-form__container container">
        <label className="container__label" aria-label="name">
          Exercise name
        </label>
        <input
          id="name"
          className="container__input"
          placeholder="Exercise name..."
          type="text"
          required
          onChange={handleName}
        ></input>
      </div>

      <div className="container-form__pair pair">
        <div className="container-form__container container">
          <label className="pair__label" aria-label="type">
            Type
          </label>
          <select
            className="pair__input"
            name="type"
            placeholder="Type..."
            required
            onChange={handleType}
          >
            <option value="select">Type</option>
            <option value="upper body">Upper body</option>
            <option value="lower body">Lower body</option>
          </select>
        </div>

        <div className="container-form__container container">
          <label className="pair__label">Difficulty</label>
          <select
            className="pair__input"
            placeholder="Difficulty..."
            name="difficulty"
            aria-label="difficutly"
            required
            onChange={handleDifficulty}
          >
            <option value="select">Difficulty</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>

      <div className="create-form__container container">
        <label className="container__label">Equipment</label>
        <input
          className="container__input"
          placeholder="Equipment..."
          type="text"
          id="equipment"
          aria-label="equipment"
          required
          onChange={handleEquipment}
        ></input>
      </div>
      <div className="create-form__container container">
        <label className="container__label">Muscles involved</label>
        <input
          className="container__input"
          placeholder="Muscles..."
          type="text"
          id="muscles"
          aria-label="muscles"
          required
          onChange={handleMuscles}
        ></input>
      </div>
      <div className="create-form__container container">
        <label className="container__label">Description</label>
        <input
          className="container__input"
          placeholder="Description..."
          type="text"
          id="description"
          aria-label="description"
          required
          onChange={handleDescription}
        ></input>
      </div>
      <div className="container-form__pair pair">
        <div className="create-form__container container">
          <label className="pair__label">Sets</label>
          <input
            className="pair__input"
            placeholder="1 - 6"
            type="text"
            id="sets"
            aria-label="sets"
            required
            onChange={handleSets}
          ></input>
        </div>
        <div className="create-form__container container">
          <label className="pair__label">Reps</label>
          <input
            className="pair__input"
            placeholder="1 - 20"
            type="text"
            id="reps"
            aria-label="reps"
            required
            onChange={handleReps}
          ></input>
        </div>
      </div>
      <div className="container-form__pair pair">
        <div className="create-form__container container">
          <label className="pair__label">Rest</label>
          <input
            className="pair__input"
            placeholder="Seconds..."
            type="text"
            id="rest"
            aria-label="rest"
            required
            onChange={handleRest}
          ></input>
        </div>
        <div className="create-form__container container">
          <label className="pair__label">Duration</label>
          <input
            className="pair__input"
            placeholder="Minutes..."
            type="text"
            id="duration"
            aria-label="duration"
            required
            onChange={handleDuration}
          ></input>
        </div>
      </div>
      <div className="create-form__container container">
        <label className="container__label" aria-label="image">
          Image
        </label>
        <input
          className="container__input container_input--select"
          placeholder="Image..."
          type="file"
          id="image"
          aria-label="image"
          required
          onChange={handleImage}
        ></input>
      </div>

      <Button
        className="create-button"
        isDisabled={isDisabled}
        text={"Create exercise"}
        type="submit"
      />
    </CreateFormStyled>
  );
};

export default CreateForm;
