import React from 'react';
import Navbar from '../Components/Navbar';

import Footer from '../Components/Footer/Footer';
import Banner from '../Components/Header/Banner';
import { Outlet } from 'react-router-dom';


const Home = () => {
    return (
        <div>
         <Navbar></Navbar>
    <Banner></Banner>
    <Outlet></Outlet>
        <div className='mt-[500px]'>
        <Footer></Footer>
        </div>
            
        </div>
    );
};

export default Home;