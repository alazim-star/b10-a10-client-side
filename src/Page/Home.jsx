
import { Outlet } from 'react-router-dom';
import Banner from '../Components/Header/Banner';





const Home = () => {
    return (
        <div>
        
    <Banner></Banner>
   
    <Outlet></Outlet>
    
       
            
        </div>
    );
};

export default Home;