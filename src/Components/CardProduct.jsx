import { useLoaderData, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import VisaCard from './VisaCard';

const CardProducts = () => {
  const data = useLoaderData(); // Loaded data
  const { visa } = useParams(); // Get the visa category from URL params
  const [filteredVisas, setFilteredVisas] = useState([]); // State to store filtered visas

  useEffect(() => {
    if (visa) {
      // Filter data by the visa category from params
      const filteredByVisa = data.filter((item) => item.visa === visa);
      setFilteredVisas(filteredByVisa);
    } else {
      // If no visa category is specified, show all data
      setFilteredVisas(data);
    }
  }, [visa, data]);

  return (
    <div className="container mx-auto my-12">
      {/* Show Visa Type Heading */}
      <h2 className="text-center text-2xl font-bold mb-6">
        {visa ? `${visa} Visas` : 'All Visas'}
      </h2>

      {/* Visa Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredVisas.length > 0 ? (
          filteredVisas.map((visaItem) => (
            <VisaCard key={visaItem.id} visa={visaItem} />
          ))
        ) : (
          <p className="text-center col-span-full text-lg">No visas found.</p>
        )}
      </div>
    </div>
  );
};

export default CardProducts;
