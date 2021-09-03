import React, { useState } from 'react';
import Item from './Item';
import NewItemForm from './NewItemForm';

const MainPage = ({ items, setItems }) => {
  const [itemForm, setItemForm] = useState({})

  const onDelete = (id) => {
    const newItems = items.filter(i => i.id !== id)
    setItems(newItems)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setItemForm({...itemForm, [name]: value})
  }

  const onSubmit = () => {
    const newItem = { ...itemForm, id: items.length }
    const newItems = [newItem]
    setItems(newItems)
  }

  return (
    <div>
      TODO list
      {items.map(i => {
        return (
          <Item item={i} onDelete={onDelete} />
        )
      })}
    <NewItemForm
      onSubmit={onSubmit}
      handleChange={handleChange}
      titleFormValue={itemForm.title}
      descriptionFormValue={itemForm.description}
    />
    </div>
  )
}

export default MainPage;
