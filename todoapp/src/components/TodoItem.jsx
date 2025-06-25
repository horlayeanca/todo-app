import React from "react";
import styles from "./todoItem.module.css";

export default function TodoItem({ item, todo, todos, setTodos }) {
  // Function to handle the delete button click
  const handleDelete = (todo) => {
    // Logic to delete the todo item can be added here

    // setTodos(todos.filter((todo) => todo !== item));

    // Alternatively, you can use the index to delete the item
    setTodos(todos.filter((todo, index) => index !== item));
    console.log("Deleted item:", todo);
  };
  const handleComplete = (name) => {
    console.log("Completed item:", todo);
    // Logic to mark the todo item as completed
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newArray);
    console.log("Updated todos:", newArray);
  };

  const newStyle = todo.completed ? styles.completed : "";

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span onClick={() => handleComplete(todo.name)} className={newStyle}>
          {todo.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(todo.name)}
            className={styles.deleteButton}
          >
            X
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
