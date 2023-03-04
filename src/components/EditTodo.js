import React from 'react';
import { useState } from 'react';

function EditTodo({todo, editTodo, cancelEditTodo}) {

  const [value, setValue] = useState(todo.content)
  function handleChange(e) {
    const inputValue = e.target.value;
    setValue(inputValue);
  }

  function handleClick() {
    if (value.length) {
      editTodo(value);
      setValue('');
    }
  }
  function handleKeyDown(e) {
    // console.log(e);
    if (e.code === "Enter" && value.length) {
      editTodo(value);
      setValue('');
    }
  }

  return (
    <div className='d-flex justify-content-center align-item-center mb-20'>

      <input onKeyDown={ handleKeyDown} onChange={ handleChange} value={ value } className='flex-fill mr-15' type="text" placeholder='Ecrivez la tache' />
      <button onClick={ handleClick } className='btn btn-primary' >Modifier</button>
      <button onClick={ cancelEditTodo } className='btn btn-primary' >Annuler la modif</button>
    </div>
  )
}

export default EditTodo;
