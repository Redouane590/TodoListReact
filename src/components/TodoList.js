import React from 'react';
import TodoItem  from './TodoItem'

function TodoList({ todoList, deleteTodo }) {
  return todoList.length ? (
    <ul>
      {todoList.map((todo) => <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} /> )}
    </ul>
  ) : <strong>Aucune Todo pour le moment</strong>
}

export default TodoList;
