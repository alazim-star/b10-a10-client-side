
import { Outlet } from 'react-router-dom';
import Banner from '../Components/Header/Banner';
import ReviewsSection from '../Components/ReviewsSection';
import TopTravelDestinations from '../Components/TopTravelDestinations';












const Home = () => {
    return (
        <div>
  
    <Banner></Banner>
    

    <Outlet></Outlet>

    <TopTravelDestinations></TopTravelDestinations>
    <ReviewsSection></ReviewsSection>
    <></>
    
       
            
        </div>
    );
};

export default Home;