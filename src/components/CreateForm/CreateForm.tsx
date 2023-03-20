import { useState } from "react";
import useExercises from "../../hooks/useExercises/useExercises";
import { useAppSelector } from "../../store/hooks";
import Button from "../Button/Button";
import CreateFormStyled from "./CreateFormStyled";

const CreateForm = (): JSX.Element => {
  const { id } = useAppSelector((state) => state.user);
  const { createExercise } = useExercises();
  const [createData, setCreateData] = useState({
    name: "",
    type: "",
    equipment: "",
    difficulty: 0,
    muscles: "",
    description: "",
    sets: 0,
    reps: 0,
    rest: 0,
    duration: 0,
    image: "",
    createdBy: id,
  });

  const handleCreateDataChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setCreateData({
      ...createData,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await createExercise(createData);
  };

  const isDisabled =
    createData.name === "" ||
    createData.type === "" ||
    createData.equipment === "" ||
    createData.difficulty === 0 ||
    createData.muscles === "" ||
    createData.description === "" ||
    createData.sets === 0 ||
    createData.reps === 0 ||
    createData.rest === 0 ||
    createData.duration === 0 ||
    createData.image === "";

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
        <label className="container__label">Exercise name</label>
        <input
          className="container__input"
          placeholder="Exercise name..."
          type="text"
          name="name"
          aria-label="name"
          required
          onChange={handleCreateDataChange}
        ></input>
      </div>

      <div className="container-form__pair pair">
        <div className="container-form__container container">
          <label className="pair__label">Type</label>
          <select
            className="pair__input"
            name="type"
            aria-label="type"
            required
            onChange={handleCreateDataChange}
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
            onChange={handleCreateDataChange}
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
          name="equipment"
          aria-label="equipment"
          required
          onChange={handleCreateDataChange}
        ></input>
      </div>
      <div className="create-form__container container">
        <label className="container__label">Muscles involved</label>
        <input
          className="container__input"
          placeholder="Muscles..."
          type="text"
          name="muscles"
          aria-label="muscles"
          required
          onChange={handleCreateDataChange}
        ></input>
      </div>
      <div className="create-form__container container">
        <label className="container__label">Description</label>
        <input
          className="container__input"
          placeholder="Description..."
          type="text"
          name="description"
          aria-label="description"
          required
          onChange={handleCreateDataChange}
        ></input>
      </div>
      <div className="container-form__pair pair">
        <div className="create-form__container container">
          <label className="pair__label">Sets</label>
          <input
            className="pair__input"
            placeholder="1 - 6"
            type="text"
            name="sets"
            aria-label="sets"
            required
            onChange={handleCreateDataChange}
          ></input>
        </div>
        <div className="create-form__container container">
          <label className="pair__label">Reps</label>
          <input
            className="pair__input"
            placeholder="1 - 20"
            type="text"
            name="reps"
            aria-label="reps"
            required
            onChange={handleCreateDataChange}
          ></input>
        </div>
      </div>
      <div className="container-form__pair pair">
        <div className="create-form__container container">
          <label className="pair__label">Rest</label>
          <input
            className="pair__input"
            placeholder="Seconds ..."
            type="text"
            name="rest"
            aria-label="rest"
            required
            onChange={handleCreateDataChange}
          ></input>
        </div>
        <div className="create-form__container container">
          <label className="pair__label">Duration</label>
          <input
            className="pair__input"
            placeholder="Minutes ..."
            type="text"
            name="duration"
            aria-label="duration"
            required
            onChange={handleCreateDataChange}
          ></input>
        </div>
      </div>
      <div className="create-form__container container">
        <label className="container__label">Image</label>
        <input
          className="container__input container_input--select"
          placeholder="Image..."
          type="file"
          name="image"
          aria-label="image"
          required
          onChange={handleCreateDataChange}
        ></input>
      </div>

      <Button
        className="create-button"
        isDisabled={isDisabled}
        text={"Create exercise"}
      />
    </CreateFormStyled>
  );
};

export default CreateForm;
