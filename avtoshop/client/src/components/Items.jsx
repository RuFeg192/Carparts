import React from 'react';
import { Link } from 'react-router-dom'; 

const Items = ({ items, onAdd }) => {
  return (
    <div className="items">
      {items.map(item => (
        <div key={item.id} className="item">
          <img src={"./img/" + item.img} alt={item.title} />
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
          <b>{item.price}$</b>
          <div className="add-to-cart" onClick={() => onAdd(item)}>
            Добавить в корзину
          </div>
       
          <Link to={`/product/${item.id}`}>Подробнее</Link>
        </div>
      ))}
    </div>
  );
};

export default Items;