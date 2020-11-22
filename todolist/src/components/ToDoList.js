import React from "react";
//import components
import Todo from "./Todo"
const ToDoList = ({setTodos, todos,filterTodos}) => {
    return(
        <div className = "todo-container">
            <ul className = "todo-list">
                {filterTodos.map(todo => (
                    <Todo setTodos = {setTodos} todos = {todos}  key = {todo.id} text = {todo.text} todo = {todo} />
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;