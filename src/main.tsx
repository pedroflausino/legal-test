import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './containers/Home/index'
import GlobalStyles from './styles/globalStyles'
import Cart from './containers/Cart'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartProvider } from './contexts/CartContext';

const router = createBrowserRouter([
  {
    path: "cart",
    element: <Cart />
  },
  {
    path: "/",
    element: <Home />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ToastContainer />
    <GlobalStyles />
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>,
)
