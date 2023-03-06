import React from 'react';
import Button from './Button';


function TodoItem({todo, deleteTodo, toggleTodo, toggleTodoEdit, selectTodo}) {
  return (
    <li onClick={selectTodo} className={` mb-10 d-flex flex-row p-10 justify-content-center align-item-center ${todo.selected ? 'selected' : ''}`}>
      <span className='flex-fill mr-15'>{todo.content} {todo.done && '✅'}</span>
      <Button className='mr-15' text="Valider" onClick={e => {
        e.stopPropagation();
        toggleTodo()
      }} />
      <Button className='mr-15' text="Modifier" onClick={ e => {
        e.stopPropagation();
        toggleTodoEdit()} }/>
      <Button text="Supprimer" onClick={(e) => {
        e.stopPropagation();
        deleteTodo(todo.id)}} />

    </li>
  )
}

export default TodoItem;
