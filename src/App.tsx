import './App.css';
import {createBrowserRouter,RouterProvider,Link,Outlet,BrowserRouter,} from "react-router-dom";
import { SimpleNavbar } from './components/SimpleNavbar/SimpleNavbar';
import { Characters } from './components/Characters/Characters';
import { Episodes } from './components/Episodes/Episodes';
import { Home } from './components/Home/Home';
import Layout from './components/Layout/Layout';
import { DetailsPage } from './components/DetailsPage/DetailsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
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
        path: 'details',
        element: <DetailsPage />
      }

    ]
  }
]);


function App() {
  return <RouterProvider router={router} />;
}

export default App;
