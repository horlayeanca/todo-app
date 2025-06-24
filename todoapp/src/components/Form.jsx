import React from 'react'
import styles from './form.module.css'
import { useState } from 'react';

export default function Form({ setTodos, todos,}) {
  const [todo, setTodo] = useState({name: "", completed: false});
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({name: "", completed: false});
      }
  return (
    <div><form className={styles.todoform} action="" onSubmit={handleSubmit}>
            <input
            className={styles.modernInput}
              onChange={(e) => setTodo({ name: e.target.value, completed: false })}
              value={todo.name}
              type="text"
              placeholder='Add some texts...'
            />
            <button className={styles.modernButton} type="submit">Add Todo</button>
          </form></div>
  )
}
