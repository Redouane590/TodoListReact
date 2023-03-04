import React from 'react';
import EditTodo from './EditTodo';
import TodoItem  from './TodoItem'

function TodoList({ todoList, deleteTodo, toggleTodo, toggleTodoEdit, editTodo }) {
  return todoList.length ? (
    <ul>
      {todoList.map((todo) => todo.edit ? (
        <EditTodo key={todo.id} todo={todo} editTodo={ (content) => editTodo(todo.id, content)} cancelEditTodo={() => toggleTodoEdit(todo.id)}/>
      ) :
      <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={() => toggleTodo(todo.id)} toggleTodoEdit={() => toggleTodoEdit(todo.id)}/> )}
    </ul>
  ) : <strong>Aucune Todo pour le moment</strong>
}

export default TodoList;
