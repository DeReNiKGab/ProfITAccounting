import React, {useEffect, useState} from 'react';
import "../App.css";
import Header from "./header/header";
import JsonData from "../data/data.json";
import Footer from "./Footer/Footer";
import HeroSection from "./hero/Hero";
import ServicesSection from "./services/services";
import AboutUsSection from "./AboutUs/Introduction";
import '../style/css/Bootstrap/bootstrap.min.css';
import '../style/css/font-awesome/css/font-awesome.min.css';
import '../style/css/style.css';
import 'aos/dist/aos.css';
export const HomePage = () => {
    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);

    return (
        <div >
            <Header/>
            <HeroSection/>
            <AboutUsSection/>
            <ServicesSection/>
            <Footer/>
        </div>
    );
};

export default HomePage;