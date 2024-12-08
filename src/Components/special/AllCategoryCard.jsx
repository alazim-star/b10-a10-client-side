import { Link, Outlet, useLoaderData } from "react-router-dom";
import AllCategoryCards from "./AllCategoryCards";


const AllCategoryCard = () => {
    const categories=useLoaderData()
    // console.log(categories);
    return (
        <div>
         
       <AllCategoryCards categories={categories} ></AllCategoryCards>
       <Outlet></Outlet>
        </div>
    );
};

export default AllCategoryCard;