import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import SmoothScroll from "smooth-scroll";
export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
});

const HomePage = React.lazy(() => import("./components/HomePage"));
const AboutUsPage = React.lazy(() => import("./components/AboutUsPage"));
const ContactPage = React.lazy(() => import("./components/ContactPage"));
const AccountingHistoryPage = React.lazy(() => import("./components/AccountingHistoryPage"));
const ServicesSectionItems = React.lazy(() => import("./components/services/services-items"));

export const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<React.Suspense fallback={<div>Loading...</div>}><HomePage /></React.Suspense>} />
                <Route path="/AboutUs" element={<React.Suspense fallback={<div>Loading...</div>}><AboutUsPage /></React.Suspense>} />
                <Route path="/Contacts" element={<React.Suspense fallback={<div>Loading...</div>}><ContactPage /></React.Suspense>} />
                <Route path="/Accounting-History" element={<React.Suspense fallback={<div>Loading...</div>}><AccountingHistoryPage /></React.Suspense>} />
                <Route path="/Service-Items" element={<React.Suspense fallback={<div>Loading...</div>}><ServicesSectionItems /></React.Suspense>} />
            </Routes>
        </Router>
    );
};

export default App;
