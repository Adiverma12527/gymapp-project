import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Register from './pages/Register/Register';
import App from './App';
import Login from './pages/Login/Login';

import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
},{
  path: "/Login", element:<Login/>
},
{
  path:"/register", element:<Register/>
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


