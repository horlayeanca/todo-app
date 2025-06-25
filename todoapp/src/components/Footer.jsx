import React from "react";
import styles from "./footer.module.css";

export default function Footer({ completedTodos, todos }) {
  return (
    <div className={styles.footer}>
        <span className={styles.container} >
      <span className={styles.item}>Completed Todos: {completedTodos}</span>
      <span className={styles.item}>Total Todos: {todos.length}</span>
      </span>
    </div>
  );
}
