import "./formLogin.css";
import { React, useState } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  userLoginError,
  userLoginSuccess,
} from "../../redux/actions/actionUser";

const FormLogin = () => {
  const { message } = useSelector((state) => state.reducerUser);
  const dispatch = useDispatch();
  const history = useHistory();

  const [userLogin] = useState({
    user: "franciscomerchan",
    password: "gettchallenge",
  });

  const [formLogin, setFormLogin] = useState({
    user: "",
    password: "",
  });

  const { user, password } = formLogin;

  const handleOnChange = (e) => {
    setFormLogin({
      ...formLogin,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (password === userLogin.password && user === userLogin.user) {
      dispatch(userLoginSuccess());
      history.push("/list");
    } else {
      dispatch(userLoginError());
    }
  };

  return (
    <>
      <div className="form-container">
        <form className="form" onSubmit={handleOnSubmit}>
          <h1>Iniciar Sesion</h1>
          <h3>Usuario: franciscomerchan, Contraseña: gettchallenge</h3>
          <label>Usuario</label>
          <input
            type="user"
            name="user"
            onChange={handleOnChange}
            value={user}
          />
          <label>Contraseña</label>
          <input
            type="password"
            name="password"
            onChange={handleOnChange}
            value={password}
          />
          {message && <h3>Ingrese el usuario y contraseña correctos</h3>}
          <input className="button" type="submit" value="INICIAR SESION" />
        </form>
      </div>
    </>
  );
};
export default FormLogin;
