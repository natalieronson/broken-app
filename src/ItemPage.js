import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const ItemPage = ({ items }) => {
  const location = useLocation();
  const id = new URLSearchParams(location.search).get('id');
  const item = items.filter(i => i.id === id)
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Link>Back to main page</Link>
      Item information
      <div>{item.title}</div>
      <div>{item.description}</div>
    </div>
  )
}

export default ItemPage;
