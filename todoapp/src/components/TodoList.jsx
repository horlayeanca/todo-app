import React from "react";
import TodoItem from "./TodoItem";
import styles from "./todoList.module.css";

export default function TodoList({ todos, item, setTodos }) {
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.completed) - Number(b.completed));
  return (
    <div className={styles.list}>
      {sortedTodos.map((todo, item) => (
        <TodoItem
          className={styles.item}
          key={item.name}
          item={item}
          todo={todo}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
