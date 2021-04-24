import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/register">
            <h1>ok</h1>
          </Route>
          <Route path="/" exact>
            <Header />
            <Body />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
