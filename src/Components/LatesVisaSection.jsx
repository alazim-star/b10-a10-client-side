import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import VisaCard from './VisaCard';

const LatestVisaSection = () => {
    const loadedVisas = useLoaderData(); // Assuming this data is loaded properly
    const [visas, setVisas] = useState(loadedVisas); // Storing loaded visa data

    // Slice the visas array to show only the first 6 cards
    const visasToShow = visas.slice(0, 6); // Limit to 6 cards

    return (
        <div>
            <h2 className='text-center text-3xl font-bold mt-10 mb-10'>Latest Visa Section:</h2>

            {/* Visa Cards Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mx-auto container gap-5'>
                {visasToShow.map((visa) => (
                    <VisaCard key={visa._id} visa={visa} visas={visas} setVisas={setVisas} />
                ))}
            </div>
        </div>
    );
};

export default LatestVisaSection;
