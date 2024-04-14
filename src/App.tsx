import './App.css';
import { createBrowserRouter, RouterProvider, Link, Outlet, BrowserRouter, } from "react-router-dom";
import { SimpleNavbar } from './components/SimpleNavbar/SimpleNavbar';
import { Characters } from './components/Characters/Characters';
import { Episodes } from './components/Episodes/Episodes';
import { Home } from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import { DetailsPage } from './components/DetailsPage/DetailsPage';
import { Theme } from './components/Theme/Theme';
import './components/Theme/Theme.css'
import { store } from './redux/store';
import { Provider, useSelector } from 'react-redux';
import React, { createContext, useState } from 'react';


const router = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Navbar />
      <Outlet />
    </>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'characters',
        element: <Characters />
      },
      {
        path: 'episodes',
        element: <Episodes />
        
      },
      {
        path: 'characters/details/:id',
        element: <DetailsPage />
        
      }

    ]
  }
]);


function App() {
  return (<Provider store={store}>
    <RouterProvider router={router} />
  </Provider>)
}

export default App;
