import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import MainLayout from './Page/MainLayout.jsx';
import Home from './Page/Home.jsx';
import ErrorPage from './ErrorPage/ErrorPage.jsx';
import Allvisa from './Components/Header/Allvisa.jsx';
import AddVisa from './Components/Header/AddVisa.jsx';
import MyAddedVisa from './Components/Header/MyAddedVisa.jsx';
import LatesVisaSection from './Components/LatesVisaSection.jsx';
import ViewDetails from './Components/ViewDetails.jsx';
import Register from './Components/Register.jsx';
import AuthProvider from './Components/AuthProvider.jsx';
import Login from './Components/Login.jsx';
import MyAddedVisaCard from './Components/visaCard/MyAddedVisaCard.jsx';

import PrivateRoute from './Components/PrivateRoute.jsx';
import MyVisaApplications from './Components/Header/MyVisaApplications.jsx';
import CardProducts from './Components/CardProduct.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader:()=>fetch("/category.json"),
        children:[
          {
            path: "/",
            element: <LatesVisaSection></LatesVisaSection>,
            loader:()=>fetch('http://localhost:5000/visa'),
        
            },
        ]
    
        },
        {
          path: "/allVisas",
          element: <Allvisa></Allvisa>,
          loader:()=>fetch('http://localhost:5000/visa'),
      
          },
          
            {
              path: "/addVisa",
              element: (
                <PrivateRoute>
                  <AddVisa></AddVisa>,
                </PrivateRoute>

              )
          
              },
              {
                path: "/clients",
                element: <MyAddedVisa></MyAddedVisa>,
                loader:()=>fetch('http://localhost:5000/clients'),
            
            
                },

                {
                  path: "/visaCard",
                  element: (
                    <PrivateRoute>
                      <MyAddedVisaCard></MyAddedVisaCard>,
                     
                    </PrivateRoute>

                  ),
                  loader:()=>fetch('http://localhost:5000/visa'),
                  },
                {
                  path: "/visaApplication",
                  element:(<PrivateRoute>
                     <MyVisaApplications></MyVisaApplications>,
                  </PrivateRoute>

                  ),
                  // loader:()=>fetch(`http://localhost:5000/applications/:email${email}`),
              
                  },
                  {
                    path: "/viewDetails/:id", 
                    element: <ViewDetails />,
                    loader: async ({ params }) => {
                      const res = await fetch(`http://localhost:5000/visa`);
                      const data = await res.json();
                      const singleData = data.find(d => d._id === params.id);
                      return singleData; 
                    }
                  },
                  {
                    path: "/register",
                    element: <Register></Register>,
                
                    },
                    {
                      path: "/login",
                      element: <Login></Login>,
                  
                      },
                     
                     
 
    ],
    },
 
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  </StrictMode>,
)
