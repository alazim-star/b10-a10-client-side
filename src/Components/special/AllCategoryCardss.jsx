import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

import VisaCard from '../VisaCard';


const AllCategoryCardss = () => {
    const data=useLoaderData()
    const {visaType} =useParams()


    
const [visas,setVisas]=useState([])
    console.log(data);
  
useEffect(()=>{
    if(visaType){
        const filteredByCategory=[...data].filter(visa=>visa.visaType===visaType

        ) 
        setVisas( filteredByCategory)
    }else{
        setVisas(data)
    }

},[visaType,data])




    return (
        <div>
      
            <div className='grid grid-cols-3'>
               {
             visas.map(visa=><VisaCard key={visa.id} visa={visa}></VisaCard>

             
                ) }

            </div>
        </div>
    );
};

export default AllCategoryCardss;