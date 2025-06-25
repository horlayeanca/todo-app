import React, { useState } from "react";
import TodoItem from "./TodoItem";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo() {
  
  const [todos, setTodos] = useState([]);

  // calculate the number of completed todos
  const completedTodos = todos.filter(todo => todo.completed).length;
  
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos}/>
      <div>
        <Footer completedTodos={completedTodos} todos={todos} />
        
        </div>
    </div>
  );
}
