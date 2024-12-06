import { useLoaderData} from "react-router-dom";
import VisaCard from "../VisaCard";
import { useState } from "react";



const Allvisa = () => {
  const loadedVisas = useLoaderData();
  const [visas, setVisas] = useState(loadedVisas); 
 

  return (
    <div>

       
      <div className="container mx-auto p-4">
        <h2 className="text-center text-3xl font-bold mt-10 mb-6">All Visas</h2>


        {/* Visa Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {visas.length > 0 ? (
            visas.map((visa) => <VisaCard key={visa._id} visa={visa} />)
          ) : (
            <p className="text-center text-lg">No visas found for this category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Allvisa;
