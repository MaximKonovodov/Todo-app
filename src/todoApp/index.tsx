import React, { useContext, useState } from 'react';

import { Context } from './context';

import TodoItem from "./components/Todos";
import Header from "./components/Header";

const TodoApp: React.FC = () => {
  const { todos, dispatch } = useContext(Context);
  const [todoText, setText] = useState("");
  const [isFilter, setFilter] = useState(false);

  const addTodo = () => {
    dispatch({ type: 'ADD_TODO', text: todoText });
    setText("");
  }

  const filteredTodos = React.useMemo(() => {
    return todos.filter((todo) => todo.completed);

  }, [todos])

  return <div>
    <Header
      setText={setText}
      todoText={todoText}
      addTodo={addTodo}
      isFilter={isFilter}
      setFilter={setFilter}
    />

    {!isFilter && todos.map(todo =>
      (<TodoItem
        key={todo.id}
        todo={todo}
        dispatch={dispatch}
        completed={todo.completed}
      />)
    )}

    {isFilter && filteredTodos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        dispatch={dispatch}
        completed={todo.completed}
      />)
    )}

  </div>
}

export default TodoApp;