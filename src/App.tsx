import React from 'react';

import TodoApp from './todoApp';

import { ContextProvider } from './todoApp/context';

function App() {
  return (
    <ContextProvider>
      <div>
        <header>
          Todo App
      </header>
      <br />
        <div>
          <TodoApp />
        </div>
      </div>
    </ContextProvider>
  );
}

export default App;
