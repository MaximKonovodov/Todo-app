let COUNT = 0;

export type Action =
  | { type: "ADD_TODO"; text: string }
  | { type: "REMOVE_TODO"; id: number }
  | { type: "TOGGLE_TODO"; id: number };


export type Todo = {
  id: number,
  text: string,
  completed: boolean
}

export type AppState = {
  todos: Todo[]
};


function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false,
            id: COUNT++
          }
        ]
      };
    case "REMOVE_TODO":
      return {
        todos: state.todos.filter(todo => todo.id !== action.id)
      }
    case "TOGGLE_TODO":
      return {
        todos: [...state.todos.map(todo => {
          return (todo.id === action.id)
            ? { ...todo, completed: !todo.completed }
            : todo
        })]
      };
    default:
      return state;
  }
}

export default reducer;