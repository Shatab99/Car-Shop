import React from 'react';
import NavBar from './Components/Home/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Home/Footer';

const Root = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;