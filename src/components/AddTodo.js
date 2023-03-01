import React, { useState } from 'react';

function AddTodo({addTodo}) {
  const [value, setValue] = useState('')
  function handleChange(e) {
    const inputValue = e.target.value;
    setValue(inputValue);
  }

  function handleClick() {
    if (value.length) {
      addTodo(value);
      setValue('');
    }
  }
  function handleKeyDown(e) {
    // console.log(e);
    if (e.code === "Enter" && value.length) {
      addTodo(value);
      setValue('');
    }
  }
  return (
    <div className='d-flex justify-content-center align-item-center mb-20'>

      <input onKeyDown={ handleKeyDown} onChange={ handleChange} value={ value } className='flex-fill mr-15' type="text" placeholder='Ecrivez la tache' />
      <button onClick={ handleClick } className='btn btn-primary' >Ajouter la tache</button>
    </div>
  )
}

export default AddTodo;
