import { createBrowserRouter } from "react-router-dom";
import App from './App';
import FullItemPage from './components/FullItemPage';
import CartPage from './components/CartPage';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "product/:id", 
        element: <FullItemPage />,
      },
      {
        path: "cart", 
        element: <CartPage />,
      },
     {
            path: '*',
            element: <NotFoundPage />, 
        }
    ],
  },
]);

