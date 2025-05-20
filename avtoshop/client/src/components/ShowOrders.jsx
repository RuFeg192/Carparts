import React from 'react';
import { Order } from './Order';

export const ShowOrders = (props) => {
  return (
    <div>
      {props.orders.map(el => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}
    </div>
  );
};
