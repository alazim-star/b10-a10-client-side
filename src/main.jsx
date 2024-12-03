import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import MainLayout from './Page/MainLayout.jsx';
import Home from './Page/Home.jsx';
import ErrorPage from './ErrorPage/ErrorPage.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout>Hello world!</MainLayout>,
    errorElement:<ErrorPage></ErrorPage>
 
  },
  {
    path: "/",
    element: <Home></Home>,
 
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
