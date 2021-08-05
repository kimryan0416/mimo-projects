import { Component } from "react";
import {
  BrowserRouter as Router,
  withRouter,
  Switch,
  Link,
  Route
} from "react-router-dom";
import './App.css';

import ToDoList from "./to-do-list/ToDoList";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <Router>
          <header>
            <Link to="/">Back</Link>
          </header>
          <Switch>
            <Route exact path="/photo" component={withRouter(Photo)} />
            <Route exact path="/stopwatch" component={withRouter(Stopwatch)} />
            <Route exact path="/todo" component={withRouter(ToDoList)} />
            <Route exact path="/minesweeper" component={withRouter(Minesweeper)} />
            <Route path="/" component={withRouter(Home)} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const Home = () => {
  return (
    <>
      <h1>Menu</h1>
      <Link to="/photo">Photo App</Link>
      <Link to="/stopwatch">Stopwatch</Link>
      <Link to="/todo">To-Do App</Link>
      <Link to="/minesweeper">Minesweeper</Link>
    </>
  );
}

const Photo = () => {
  return (
    <h1>Photo App</h1>
  );
}

const Stopwatch = () => {
  return (
    <h1>Stopwatch</h1>
  );
}

const Minesweeper = () => {
  return (
    <h1>Minesweeper</h1>
  );
}

export default App;
