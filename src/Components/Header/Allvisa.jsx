import { useLoaderData } from "react-router-dom";
import VisaCard from "../VisaCard";
import { useState } from "react";




const Allvisa = () => {

    const loadedVisas = useLoaderData(); 
    const [visas, setVisas] = useState(loadedVisas); 

    return (
        <div>
                  
          <div className="">
            <h2 className='text-center text-3xl font-bold mt-10 mb-10'>All Visa</h2>

            {/* Visa Cards Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mx-auto container gap-5'>
                {visas.map((visa) => (
                    <VisaCard key={visa._id} visa={visa} visas={visas} setVisas={setVisas} />
                ))}
            </div>
        </div>
        </div>
    );
};

export default Allvisa;