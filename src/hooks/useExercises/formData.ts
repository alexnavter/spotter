import { ExerciseCreationStructure } from "../../store/features/exercises/types";

const formData = (event: ExerciseCreationStructure) => {
  const data = new FormData();
  data.append("name", event.name);
  data.append("type", event.type);
  data.append("equipment", event.equipment);
  data.append("difficulty", event.difficulty);
  data.append("muscles", event.muscles);
  data.append("description", event.description);
  data.append("sets", event.sets);
  data.append("reps", event.reps);
  data.append("rest", event.rest);
  data.append("duration", event.duration);
  data.append("image", event.image);

  return data;
};

export default formData;
