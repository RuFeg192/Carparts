import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';  
import { RouterProvider } from 'react-router-dom'; 
import store from './store/index';
import { router } from './routing/router';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>  
      <RouterProvider router={router} />  
    </Provider>
  </React.StrictMode>
);