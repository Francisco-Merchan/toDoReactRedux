import FormLogin from "../components/FormLogin/formLogin";
import store from "../redux/store";

const Login = () => {
  console.log(store.getState());
  return (
    <>
      <FormLogin />
    </>
  );
};

export default Login;
