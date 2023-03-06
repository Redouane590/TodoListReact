import React, { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import themeContext from './context/theme';
function App() {
  const [todoList, setTodoList] = useState([]);
  function addTodo(content) {
    const todo = {
      id: crypto.randomUUID(),
      content,
      done: false,
      edit: false,
      selected: false
    }
    setTodoList([...todoList, todo])
  }
  function selectTodo(id) {
    setTodoList(todoList.map(todo => todo.id === id ? ({
      ...todo,
      selected: true
    }): {...todo,
    selected: false}))
  }

  function deleteTodo(id) {
    setTodoList(todoList.filter(todo => todo.id !== id))
  }

  function toggleTodo(id) {
    setTodoList(todoList.map(todo => todo.id === id ? ({
      ...todo,
      done: !todo.done
    }) : todo))
  }

  function toggleTodoEdit(id) {
    setTodoList(todoList.map(todo => todo.id === id ? ({
      ...todo,
      edit: !todo.edit
    }) : todo))
  }
  function editTodo(id, content) {
    setTodoList(todoList.map(todo => todo.id === id ? ({
      ...todo,
      edit: false,
      content
    }) : todo
    ))
  }
  const [theme, setTheme] = useState('primary');

  function handleChange(e) {
    setTheme(e.target.value);
  }

  return (
    <themeContext.Provider value={theme}>
      <div className="d-flex justify-content-center align-items-center p-20">
        <div className="card container p-20">
          <h1 className="mb-20 d-flex flex-row justify-content-center align-items-center">
            <span className='flex-fill'>Liste de tâches</span>
            <select value={theme} onChange={handleChange}>
              <option value="primary">Thème Bleu</option>
              <option value="secondary">Thème violet</option>
            </select>
          </h1>
          <AddTodo addTodo={ addTodo }/>
          <TodoList editTodo={editTodo} todoList={ todoList } deleteTodo={ deleteTodo } toggleTodo={toggleTodo} toggleTodoEdit={toggleTodoEdit} selectTodo={selectTodo}/>
        </div>
      </div>
    </themeContext.Provider>
  );
}

export default App;
