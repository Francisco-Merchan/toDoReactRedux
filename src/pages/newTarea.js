import "./pagesStyles/newTarea.css";
import Form from "../components/Form/form";

const NewTarea = () => {
  return (
    <>
      <div className="newTareaContainer">
        <h1>Añade una nueva tarea</h1>
        <Form />
      </div>
    </>
  );
};

export default NewTarea;
