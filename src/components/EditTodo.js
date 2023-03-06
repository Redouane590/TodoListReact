import React from 'react';
import { useState } from 'react';
import Button from './Button';

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

      <Button text="Sauvegarder" onClick={ handleClick } className="mr-15"/>
      <Button text="Annuler la modif" onClick={ cancelEditTodo } />
    </div>
  )
}

export default EditTodo;
