import React from 'react'
import ReactDOM from 'react-dom/client'
import "@fontsource/montserrat"; 
import './index.scss'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Homepage } from './pages/Homepage';
import { Login } from './pages/Login';
import { Product } from './pages/Product';
import "@fontsource/montserrat/400.css"; // Weight 400.
import "@fontsource/montserrat/700.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/product",
    element: <Product />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
