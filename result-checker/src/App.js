import "./App.css";
import Login from "./components/Login";
import Result from "./components/Result";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/result" component={Result} />
        <Route component={Login} />
      </Switch>
    </div>
  );
}

export default App;
