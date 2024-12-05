import React, { useState } from 'react';
import MyAddedVisa from '../Header/MyAddedVisa';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';

const MyAddedVisaCard = () => {
    const loadedVisas = useLoaderData(); 
    const [visas, setVisas] = useState(loadedVisas); 
    return (
        <div>
            <div>
          <div className="">
            <h2 className='text-center text-3xl font-bold mt-10 mb-10'>My Added Visas</h2>

            {/* Visa Cards Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mx-auto container gap-5'>
                {visas.map((visa) => (
                    <Card key={visa._id} visa={visa} visas={visas} setVisas={setVisas} />
                ))}
            </div>
        </div>
        </div>

        </div>
    );
};

export default MyAddedVisaCard;