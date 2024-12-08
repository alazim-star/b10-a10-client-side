import React from 'react';
import { useNavigate } from 'react-router-dom';

const AllCategoryCards = ({ categories }) => {
    const navigate = useNavigate();

   
    const handleSelect = (event) => {
        const selectedCategory = event.target.value;
        if (selectedCategory !== "default") {
            navigate(`/allCategory/${selectedCategory}`);
        }
    };

    return (
        <div>
            <h2 className="text-3xl text-center font-bold mb-4">All Visa</h2>

         
            <div className="flex justify-center  mb-5">
                <select
                    className="select select-ghost w-full max-w-xs"
                    onChange={handleSelect}
                    defaultValue="default"
                >
                    <option disabled value="default">
                        Select Visa Type
                    </option>
                   
               
                 {categories.map((category) => (
                        <option key={category.visaType} value={category.visaType}>
                            {category.visaType}
                        </option>
                    ))}
                
                </select>
            </div>
        </div>
    );
};

export default AllCategoryCards;
