import "./pagesStyles/list.css";
import Card from "../components/Card/card";
import { useEffect } from "react";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import store from "../redux/store";
import { cleanActualElement } from "../redux/actions/actionList";
import { createItemList } from "../redux/actions/actionList";
import { userLogout } from "../redux/actions/actionUser";

const List = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { list } = useSelector((state) => state.reducerList);
  const slopes = list.filter((item) => item.completed === false);
  console.log(store.getState());

  useEffect(() => {
    dispatch(createItemList());
  }, []);

  return (
    <>
      <div className="container">
        <div className="titleList">
          <h1>Bienvenido!</h1>
          <h3>Tienes {slopes.length} tareas pendientes</h3>
        </div>
        <div className="buttonList">
          <div
            onClick={() => {
              dispatch(cleanActualElement());
              history.push("/new");
            }}
          >
            Nueva Tarea
          </div>
          <div
            onClick={() => {
              dispatch(userLogout());
              history.push("/");
            }}
          >
            Cerrar Sesion
          </div>
        </div>
        <ul className="listCards">
          {list.map((listItem) => (
            <li key={list.id}>
              <Card listItem={listItem} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default List;
