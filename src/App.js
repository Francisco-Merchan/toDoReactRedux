import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Login from "./pages/login";
import List from "./pages/list";
import Edit from "./pages/edit";
import NewTarea from "./pages/newTarea";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/list" exact component={List} />
          <Route path="/edit/:id" exact component={Edit} />
          <Route path="/new" exact component={NewTarea} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
