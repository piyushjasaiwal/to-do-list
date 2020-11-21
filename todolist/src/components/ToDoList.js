import React from "react";
//import components
import Todo from "./Todo"
const ToDoList = ({setTodos, todos}) => {
    return(
        <div className = "todo-container">
            <ul className = "todo-list">
                {todos.map(todo => (
                    <Todo setTodos = {setTodos} todos = {todos}  key = {todo.id} text = {todo.text} todo = {todo} />
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;