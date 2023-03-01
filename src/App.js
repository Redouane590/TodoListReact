import React, { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
function App() {
  const [todoList, setTodoList] = useState([]);
  function addTodo(content) {
    const todo = {
      id: crypto.randomUUID(),
      content,
      done: false,
      edit: false
    }
    setTodoList([...todoList, todo])
  }
  return (
    <div className="d-flex justify-content-center align-items-center p-20">
      <div className="card container p-20">
        <h1 className="mb-20">Liste de tâches</h1>
        <AddTodo addTodo={ addTodo }/>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
