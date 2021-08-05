import { Component } from "react";
import {
  BrowserRouter as Router,
  withRouter,
  Switch,
  Link,
  Route,
} from "react-router-dom";
import './App.css';

import PhotoApp from "./photo-app/PhotoApp";
import Stopwatch from "./stopwatch/Stopwatch";
import ToDoList from "./to-do-list/ToDoList";
import MineSweeper from "./minesweeper/MineSweeper"

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/photo" component={withRouter(PhotoAppContainer)} />
          <Route exact path="/stopwatch" component={withRouter(StopwatchContainer)} />
          <Route exact path="/todo" component={withRouter(ToDoListContainer)} />
          <Route exact path="/minesweeper" component={withRouter(MinesweeperContainer)} />
          <Route path="/" component={withRouter(Home)} />
        </Switch>
      </Router>
    </div>
  );
}

const Home = () => {
  return (
    <div className="AppMenu">
      <h1>Menu</h1>
      <p className="marginBottom4px">Students using M1M0 to learn React had to complete four projects that focused on concepts and skills taught on the M1M0 platform. The project code has been emulated here in their complete forms.</p>
      <nav>
        <ul>
          <li>
            <Link to="/photo">
              <h3>Photo App</h3>
              <p>Skills #1-3: JSX and Functional Components</p>
            </Link>
          </li>
          <li>
            <Link to="/stopwatch">
              <h3>Stopwatch</h3>
              <p>Skills #4-5: Class Components and State</p>
            </Link>
          </li>
          <li>
            <Link to="/todo">
              <h3>To-Do App</h3>
              <p>Skills #6-8: Update Methods, Multiple Components, Styling</p>
            </Link>
          </li>
          <li>
            <Link to="/minesweeper">
              <h3>Minesweeper (Unused)</h3>
              <p>Unused due to being too complicated for beginners</p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

const PhotoAppContainer = () => {
  return (
    <>
      <Header />
      <div className="AppContainer">
        <PhotoApp />
      </div>
    </>
  );
}

const StopwatchContainer = () => {
  return (
    <>
      <Header />
      <div className="AppContainer">
        <Stopwatch />
      </div>
    </>
  );
}

const ToDoListContainer = () => {
  return (
    <>
      <Header />
      <div className="AppContainer">
        <ToDoList />
      </div>
    </>
  );
}

const MinesweeperContainer = () => {
  return (
    <>
      <Header />
      <div className="AppContainer">
        <MineSweeper />
      </div>
    </>
  );
}

const Header = () => {
  return ( 
    <div className="AppHeader">
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
}

export default App;
