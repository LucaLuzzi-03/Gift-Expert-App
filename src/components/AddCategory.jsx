import React, { useState } from 'react'

function AddCategory({ onNewCategory }) {

    const [ inputValue, setInputValue ] = useState('')

    const onInputChange = (e) => {
        const value = e.target.value;
        setInputValue( value )
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const newValue = inputValue.toLowerCase().trim();
        if ( newValue.length <= 1 ) return;

        onNewCategory( newValue )
        setInputValue('')
    }

  return (
    <form onSubmit={ onSubmit } >
      <input 
        type="text"
        placeholder='Search gifts'
        value={ inputValue }
        onChange={ onInputChange }
      />
    </form>

  )
}

export default AddCategory