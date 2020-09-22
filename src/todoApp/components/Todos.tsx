import React from "react";
import { Action, Todo } from "../reducer";

type ItemProps = {
  todo: Todo,
  dispatch: React.Dispatch<Action>,
  completed: boolean
}

const TodoItem = ({ todo, dispatch, completed }: ItemProps) => {
  return (
    <div
      key={todo.id}
    >

      <button
        className="todo-item__button"
        onClick={() => {
          dispatch({ type: "REMOVE_TODO", id: todo.id })
        }}>-</button>

      <span id={`${todo.id}`} onClick={() => {
        dispatch({ type: "TOGGLE_TODO", id: todo.id })
        document.getElementById(`${todo.id}`)?.classList.toggle("completed")
      }}>{todo.text}</span>

      <br />
    </div>
  )
}

export default TodoItem