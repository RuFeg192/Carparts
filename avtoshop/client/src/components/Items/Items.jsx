import React from 'react';
import { Link } from 'react-router-dom';
import './items.css';

const Items = ({ items, onAdd }) => {
  return (
    <div className="items">
      {items.map(item => (
        <div key={item.id} className="item">
          <img src={"./img/" + item.img} alt={item.title} />
          <h3 className="item-title">{item.title}</h3>
          <p className="item-desc">{item.desc}</p>
          <b className="item-price">{item.price}$</b>
          <div className="add-to-cart" onClick={() => onAdd(item)}>
            Добавить в корзину
          </div>
        </div>
      ))}
    </div>
  );
};

export default Items;