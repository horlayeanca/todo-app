import React from "react";
import TodoItem from "./TodoItem";
import styles from "./todoList.module.css";

export default function TodoList({ todos, item, setTodos }) {
  return (
    <div className={styles.list}>
      {todos.map((todo, item) => (
        <TodoItem key={item.name} item={item} todo={todo} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
}
