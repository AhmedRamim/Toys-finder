import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../sharedPages/Navbar';
import Footer from '../sharedPages/Footer';

const Main = () => {
    return (
        <div>
            <div  className='max-w-7xl mx-auto'>

            <Navbar></Navbar>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;