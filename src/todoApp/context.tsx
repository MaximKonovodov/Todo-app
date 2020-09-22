import React from "react";

import reducer, { Action, Todo } from "./reducer";

interface ContextState {
  dispatch: React.Dispatch<Action>,
  todos: Todo[],
}

const InitialContextState: ContextState = {
  dispatch: () => null,
  todos: [],
}

export const Context = React.createContext(InitialContextState);

export const ContextProvider: React.FC = (props) => {
  const [state, dispatch] = React.useReducer(reducer, {
    todos: []
  });

  return (
    <Context.Provider value={{
      dispatch,
      todos: state.todos,
    }}>
      {props.children}
    </Context.Provider>
  )
}