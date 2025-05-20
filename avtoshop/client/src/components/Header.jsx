import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { ShowOrders } from './ShowOrders'; 
import { ShowNothing } from './ShowNothing'; 

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);
  return (
    <header>
      <div>
        <span className="logo">Car parts</span>
        <ul className='nav'>
          <li><a href="https://t.me/randomazerer">Контакты</a></li>
          <li>Кабинет</li>
        </ul>
        <FaShoppingCart 
          onClick={() => setCartOpen(cartOpen = !cartOpen)} 
          className={`cart-button ${cartOpen && 'active'}`}
        />
        {cartOpen && (
          <div className='shop-cart'>
            {props.orders.length > 0 ? 
              <ShowOrders orders={props.orders} onDelete={props.onDelete}/> : 
              <ShowNothing />}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
}