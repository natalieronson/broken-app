import React from 'react';

const NewItemForm = ({ onSubmit, titleFormValue, descriptionFormValue, handleChange }) => {
  return (
    <form onSubmit={onSubmit}>
      <label>Title</label>
      <input name="title" type="text" value={titleFormValue} onChange={handleChange} />
      <label>Description</label>
      <input name="description" type="text" value={descriptionFormValue} onChange={handleChange} />
      <button>Add</button>
    </form>
  )
}

export default NewItemForm;
