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
import VisaApplication from './Components/Header/VisaApplication.jsx';
import LatesVisaSection from './Components/LatesVisaSection.jsx';
import ViewDetails from './Components/ViewDetails.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
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
      
          },
          {
            path: "/addVisa",
            element: <AddVisa></AddVisa>,
        
            },
            {
              path: "/addVisa",
              element: <AddVisa></AddVisa>,
          
              },
              {
                path: "/myAddedVisas",
                element: <MyAddedVisa></MyAddedVisa>,
            
                },
                {
                  path: "/visaApplication",
                  element: <VisaApplication></VisaApplication>,
              
                  },
                  {
                    path: "/viewDetails/:id", // Correctly capture the 'id' from the URL
                    element: <ViewDetails />,
                    loader: async ({ params }) => {
                      // Correctly fetch using the 'id' parameter
                      const res = await fetch(`http://localhost:5000/visa`);
                      const data = await res.json();
                      console.log(data, params.id);
                  
                      // Find the specific visa from the data
                      const singleData = data.find(d => d._id === params.id);
                      return singleData; // Return the specific visa data
                    }
                  }
                  
                  
      
    

  





    ],
    },
 

 

]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
