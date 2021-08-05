import React from "react";

import { Task } from "./Task";
import "./ToDoList.css";

class ToDoList extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   tasks:[],
   val:""
  }
 }

 handleInput = (event) => {
  this.setState({
   val:event.target.value
  })
 }

 addTask = () => {
  var val = this.state.val;
  var tasks = this.state.tasks;
  if (val.length == 0) return;

  var newTasks = tasks.concat(val);

  this.setState({
   tasks:newTasks,
   val:""
  });
 }

 handleCheckmark = (event) => {
  var v = event.target.value;
  const newTasks = this.state.tasks.filter((t,i)=>i!=v);
  this.setState({
   tasks:newTasks,
  });
 }

 render() {
  const val = this.state.val;
  const tasks = this.state.tasks.map((text,index)=>{
   return <Task 
    t={text}
    i={index}
    handler={this.handleCheckmark}
   />
  });
  
  return (
   <div className="ToDoList">
    <h1>To-Do List:</h1>
    <div className="header">
     <input 
      name="newTaskInput"
      type="text"
      placeholder="ex. Pick up mail"
      value={val}
      onChange={this.handleInput}
     />
     <button 
       className="taskSubmit"
       onClick={this.addTask}
      >
      +
     </button>
    </div>
    <ul>
     {tasks}
    </ul>
   </div>
  );
 }
}

export default ToDoList;