import React, { useReducer } from 'react';


const initState = {
  todos: [
    {
      id: 1,
      text: 'buy a computer'
    },
    {
      id: 2,
      text: 'install vscode'
    },
    {
      id: 3,
      text: 'read bible'
    }
  ]
}

const reducer = (state, action) => {
  const { type } = action;
  switch (type) {
    default:
      return initState
  }
}

export const TodosContext = React.createContext();


function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <TodosContext.Provider value={{state, dispatch}}>
    </TodosContext.Provider>
  );
}

export default App;
