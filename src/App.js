import { Component } from "react";

import './App.css';
import ToDoList from "./to-do-list/ToDoList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      page: 2
    }
    this.pages = [
      {
        title:"Photo App",
        content:null
      },
      {
        title:"Stopwatch",
        content:null
      },
      {
        title:"To-Do List",
        content:(<ToDoList />)
      },
      {
        title:"Minesweeper",
        content:null
      }
    ]
  }

  render() {
    var page = this.pages[this.state.page];
    var content = (page) ? page.content : null;
    var c = (page) ? "selected" : ""
    return (
      <div className={`App ${c}`}>
        {content}
      </div>
    );
  }
}



export default App;
