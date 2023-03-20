import CreateForm from "../../components/CreateForm/CreateForm";
import CreatePageStyled from "./CreatePageStyled";

const CreatePage = (): JSX.Element => {
  return (
    <>
      <CreatePageStyled>
        <CreateForm />
      </CreatePageStyled>
    </>
  );
};

export default CreatePage;
