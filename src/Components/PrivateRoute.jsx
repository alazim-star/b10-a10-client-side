import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";


import Load from "./Load";
import { AuthContext } from "./AuthProvider";



const PrivateRoute = ({children}) => {
const {user,loading}=useContext(AuthContext) 
const location=useLocation()
// console.log(location);


if(loading){
    return <Load></Load>
}


if (user && user?.email) {
    return children
    
}


    return (
        
        <>
        <Navigate state={location.pathname} to={'/login'}></Navigate>
        
        </>    
        
    );
};

export default PrivateRoute;