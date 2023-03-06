import React from 'react';


function TodoItem({todo, deleteTodo, toggleTodo, toggleTodoEdit, selectTodo}) {
  return (
    <li onClick={selectTodo} className={` mb-10 d-flex flex-row p-10 justify-content-center align-item-center ${todo.selected ? 'selected' : ''}`}>
      <span className='flex-fill mr-15'>{todo.content} {todo.done && '✅'}</span>
      <button onClick={e => {
        e.stopPropagation();
        toggleTodo()
      }} className='btn btn-primary mr-15'>Valider</button>
      <button onClick={ e => {
        e.stopPropagation();
        toggleTodoEdit()} }
        className='btn btn-primary mr-15'>Modifier</button>
      <button onClick={(e) => {
        e.stopPropagation();
        deleteTodo(todo.id)}} className='btn btn-reverse-primary mr-15'>supprimer</button>
    </li>
  )
}

export default TodoItem;
