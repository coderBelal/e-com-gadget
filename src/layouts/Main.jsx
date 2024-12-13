import React from 'react';
import TopNavbar from '../components/Navbar/TopNavbar';
import BottomNav from '../components/Navbar/BottomNavbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const Main = () => {
    return (
        <div>
            <TopNavbar/>
            <BottomNav/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;