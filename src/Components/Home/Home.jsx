import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
import CarCards from './CarCards';
import GoogleMap from './GoogleMap';
import AboutUs from './AboutUs';
import WhyChose from './WhyChose';
import FeedBack from './FeedBack';

const Home = () => {
    return (
        <div>
            <Helmet><title>Home</title></Helmet>
            <Banner/>
            <CarCards/>
            <AboutUs/>
            <WhyChose/>
            <FeedBack/>
        </div>
    );
};

export default Home;