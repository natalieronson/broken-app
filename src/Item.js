import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item, onDelete }) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <button onClick={onDelete}>Delete</button>
      <div>{item.title}</div>
      <div>{item.description}</div>
      <Link to={`/item?id=${item.id}`}>Go to item</Link>
    </div>
  )
}

export default Item;
