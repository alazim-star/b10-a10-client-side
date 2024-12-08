
import { Outlet, useLoaderData } from 'react-router-dom';
import Banner from '../Components/Header/Banner';
import ReviewsSection from '../Components/ReviewsSection';
import TopTravelDestinations from '../Components/TopTravelDestinations';
import VisaNavigator from '../Components/VisaNavigator';
import CountryPic from '../Components/CountryPic';



const Home = () => {
   
 
    return (
        <div>
  
    <Banner></Banner>
    <CountryPic></CountryPic>

<Outlet></Outlet>
   

<VisaNavigator></VisaNavigator>

    <TopTravelDestinations></TopTravelDestinations>
    <ReviewsSection></ReviewsSection>
    <></>
    
       
            
        </div>
    );
};

export default Home;