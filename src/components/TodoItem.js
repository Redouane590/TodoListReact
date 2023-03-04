import React from 'react';


function TodoItem({todo, deleteTodo, toggleTodo, toggleTodoEdit}) {
  return (
    <li className='mb-10 d-flex flex-row p-10 justify-content-center align-item-center'>
      <span className='flex-fill mr-15'>{todo.content} {todo.done && '✓'}</span>
      <button onClick={toggleTodo} className='btn btn-primary mr-15'>Valider</button>
      <button onClick={toggleTodoEdit} className='btn btn-primary mr-15'>Modifier</button>
      <button onClick={() => deleteTodo(todo.id)} className='btn btn-reverse-primary mr-15'>supprimer</button>
    </li>
  )
}

export default TodoItem;
