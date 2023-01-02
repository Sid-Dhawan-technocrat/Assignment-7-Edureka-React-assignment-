import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter,RouterProvider,Route,} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Home from './componets/Home/Home';
import Filter from './componets/Filter/Filter';
import RestaurantDetails from './componets/Details/RestaurantDetails';
import ErrorPage from './componets/Common/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage/>
  },
  {
    path:'/filter',
    element:<Filter/>
  },
  {
    path:'/details/:rName',
    element:<RestaurantDetails/>
  }
]);
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
