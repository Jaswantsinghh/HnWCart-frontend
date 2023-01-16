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
import { Product2 } from './pages/Product2';
import { Product1 } from './pages/Product1';
import { Product3 } from './pages/Product3';
import { Product4 } from './pages/Product4';
import { Product5 } from './pages/Product5';

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
    path: "/product/1",
    element: <Product1 />,
  },
  {
    path: "/product/2",
    element: <Product2 />,
  },
  {
    path: "/product/3",
    element: <Product3 />,
  },
  {
    path: "/product/4",
    element: <Product4 />,
  },
  {
    path: "/product/5",
    element: <Product5 />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
