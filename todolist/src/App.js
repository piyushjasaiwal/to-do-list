import React, {useEffect, useState} from "react"
import './App.css';

//importing the components 

import Form from './components/Form.js'
import ToDoList from "./components/ToDoList"
function App() {
  //use effect

  // useEffect

  const [inputText,setInputText] = useState("");
  const [todos,setTodos] = useState([]); 
  const [status, setStatus] = useState("all");
  const [filterTodos, setFilterToDos] = useState([]);
//functions

const filterHandler = () => {
  switch(status){
    case 'completed':
      setFilterToDos(todos.filter(todo => todo.completed === true));
      break;

    case 'uncompleted':
      setFilterToDos(todos.filter(todo => todo.completed === false));
      break;

    default :
      setFilterToDos(todos);
      break;
  }
}

  return (
    <div className="App">
      <header>
          <h1>To - Do List</h1>
      </header>
      <Form inputText = {inputText} todos = {todos} setTodos = {setTodos} setInputText = {setInputText}/>
      <ToDoList setTodos = {setTodos} todos = {todos} setStatus = {setStatus} />
    </div>
  );
}

export default App;
