import "./form.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  cleanActualElement,
  createNewItem,
  editItem,
} from "../../redux/actions/actionList";

const Form = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { actualElement } = useSelector((state) => state.reducerList);

  const [newItem, setNewItem] = useState(
    actualElement
      ? {
          title: actualElement.title,
          id: actualElement.id,
        }
      : {
          title: "",
          id: Date.now(),
          completed: false,
        }
  );

  const { title } = newItem;

  const handleOnchange = (e) => {
    setNewItem({
      ...newItem,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (actualElement) {
      console.log(newItem);
      dispatch(editItem(newItem));
    } else {
      dispatch(createNewItem(newItem));
    }
    history.push("/list");
  };

  return (
    <>
      <form className="formContainer" onSubmit={handleOnSubmit}>
        <input
          type="text"
          name="title"
          onChange={handleOnchange}
          value={title}
        />
        <div className="buttonsForm">
          <div
            onClick={() => {
              dispatch(cleanActualElement());
              history.push("/list");
            }}
          >
            VOLVER
          </div>
          <button className="buttonSubmit" type="submit">
            {actualElement ? "EDITAR" : "GUARDAR"}
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
