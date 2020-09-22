import React from 'react';

import { } from "module";

type HeaderProps = {
  todoText: string,
  setText: React.Dispatch<React.SetStateAction<string>>,
  addTodo: () => void,
  isFilter: boolean,
  setFilter: React.Dispatch<React.SetStateAction<boolean>>,
}

const Header = ({
  todoText,
  setText,
  addTodo,
  isFilter,
  setFilter
}: HeaderProps) => {

  return <>
    <input type="text" value={todoText} onChange={e => {
      setText(e.target.value)
    }}></input>

    <button onClick={addTodo} type="submit" >Add Todo</button>

    <input
      type="checkbox"
      checked={isFilter}
      onChange={() => setFilter(!isFilter)}
    ></input>
  </>
}

export default Header;