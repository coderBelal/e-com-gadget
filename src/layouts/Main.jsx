import React from 'react';
import TopNavbar from '../components/Navbar/TopNavbar';
import BottomNav from '../components/Navbar/BottomNavbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/pages/WhatsAppButton';

const Main = () => {
    return (
        <div>
            <TopNavbar/>
            <BottomNav/>
            <Outlet/>
            <Footer/>
            <WhatsAppButton/>
        </div>
    );
};

export default Main;