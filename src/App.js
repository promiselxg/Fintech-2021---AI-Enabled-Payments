import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./components/Register";
import Face from "./components/Face";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/register">
            <Register />
          </Route>

          <Route path="/capture">
            <Face />
          </Route>
          <Route path="/" exact>
            <Body />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
