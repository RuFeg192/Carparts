import React from 'react';
import { useDispatch } from 'react-redux';  
import { addItemToCart } from '../store/CartSlice';  

const FullItem = ({ item }) => {
  const dispatch = useDispatch(); 

  const handleAddToCart = () => {
    dispatch(addItemToCart(item));
  };

  return (
    <div className='full-item'>
      <div>
        <img 
          src={"./img/" + item.img} 
          alt={item.title}
          onClick={() => console.log("Item clicked:", item)}  
        />
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
        <b>{item.price}$</b>
        <div className='add' onClick={handleAddToCart}>+</div> 
      </div>
    </div>
  );
};

export default FullItem;