import React, {useEffect, useState} from 'react';
import "../App.css";
import Header from "./header/header";
import JsonData from "../data/data.json";
import Footer from "./Footer/Footer";
import AboutUs from "./AboutUs/AboutUs";
import '../style/css/Bootstrap/bootstrap.min.css';
import '../style/css/font-awesome/css/font-awesome.min.css';
import '../style/css/style.css';
import 'aos/dist/aos.css';
import {useLocation} from "react-router-dom";
export const AboutUsPage = () => {
    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);
    const locationally = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        if (locationally?.state?.scroll) {
            window.scrollTo(0, 1600);
        }
    }, [locationally?.state?.scroll]);

    return (
        <div >
            <Header/>
            <AboutUs/>
            <Footer/>
        </div>
    );
};

export default AboutUsPage;