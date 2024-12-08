import { Typewriter } from 'react-simple-typewriter'

import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import VisaCard from './VisaCard';

const LatestVisaSection = () => {
    const loadedVisas = useLoaderData(); 
    const [visas, setVisas] = useState(loadedVisas); 

  
    const visasToShow = visas.slice(0, 6);

    return (
        <div>
             <div>
      <h2 className="text-center text-5xl font-bold mt-5 mb-5">
        Our <span className='text-green-600'>Latest</span> Visa
      </h2>
      <h3 className="text-center text-xl  font-bold text-red-600  mb-20">
        <Typewriter
          words={[
            "Fast Processing Times!",
            "Hassle-Free Applications!",
            "Affordable Fees!",
            "Global Visa Solutions!",
          ]}
          loop={5} 
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h3>
    </div>

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
