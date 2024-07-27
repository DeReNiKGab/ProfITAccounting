import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import classNames from 'classnames';
import { debounce } from 'lodash';

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/#service', isHashLink: true },
    { name: 'About Us', path: '/AboutUs' },
    { name: 'Contact', path: '/Contacts' },
    { name: 'History of Accounting', path: '/Accounting-History' }
];

const Navigation = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const [navClasses, setNavClasses] = useState('default-nav-class');
    const location = useLocation();
    const navigate = useNavigate();

    const handleScroll = useCallback(() => {
        const shouldFixNav = window.scrollY > 50;
        const isSpecialPage = ['/Contacts', '/AboutUs', '/Accounting-History', '/Service-Items'].includes(location.pathname);

        setNavClasses(classNames({
            'sb-nav--fixed': shouldFixNav  && !isSpecialPage,
            'NavOnAbout': isSpecialPage,
            'default-nav-class': !shouldFixNav
        }));
    }, [location.pathname, isNavExpanded]);

    useEffect(() => {
        // Define debounce inside useEffect to avoid re-creating it on each render
        const handleScrollDebounced = debounce(handleScroll, 100);

        // Call the debounced handleScroll function immediately
        handleScroll();

        // Add and clean up event listener
        window.addEventListener('scroll', handleScrollDebounced);
        return () => window.removeEventListener('scroll', handleScrollDebounced);
    }, [handleScroll]);

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location.hash]);

    const toggleNav = () => {
        setIsNavExpanded(prevState => !prevState);
    };

    const handleLinkClick = (path, isHashLink) => {
        if (isHashLink) {
            navigate(path);
            // Remove timeout, HashLink handles smooth scroll automatically
        } else {
            toggleNav();
        }
    };

    return (
        <div id="sb-navigation" className={navClasses}>
            <section className="sb-section sb-section-opt-light option-section-background-image-fixed option-nav-fixed option-nav-links-display-right option-nav-overlay option-nav-shadow option-logo-size-sm option-nav-link-hover-minimal option-nav-mobile-static option-logo-size-mobile-sm option-logo-brand-name-show">
                <div className="container-fluid sb-container-fluid sb-container">
                    <div className="row sb-row sb-row-opt-padding-top-none sb-row-opt-padding-bottom-none sb-row-opt-center">
                        <div className={`sb-column col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 sb-component-simple-top-nav ${isNavExpanded ? "sb-nav--expanded" : ""}`}>
                            <div className="sb-column-content">
                                <div className="wrapper sb-top-header items-can-collapse">
                                    <Link className="sb-top-header__brand brand" to="/">
                                        <div className="brand__wrapper">
                                            <img
                                                alt="Prof IT Accounting Logo"
                                                className="logo"
                                                src="https://cdn.b12.io/client_media/RXJufhPa/07c3d432-fc1e-11ee-a52f-0242ac110002-png-regular_image.png"
                                            />
                                            <span className="brand__text">Prof IT Accounting</span>
                                        </div>
                                    </Link>
                                    <button
                                        aria-label="Toggle navigation"
                                        className={`sb-mobile-nav-btn ${isNavExpanded ? 'is-active' : ''}`}
                                        onClick={toggleNav}
                                    >
                                        <span className="sb-mobile-nav-btn__line"></span>
                                    </button>
                                    <nav
                                        aria-label="Main"
                                        className={`sb-top-header__nav sb-nav ${isNavExpanded ? "sb-nav--expanded" : ""}`}
                                    >
                                        <button
                                            aria-label="Hide navigation"
                                            className="sb-nav__close"
                                            onClick={toggleNav}
                                        ></button>
                                        <ul className="sb-nav__list">
                                            {navItems.map((item) => (
                                                <li key={item.name} className="sb-nav__item">
                                                    {item.isHashLink ? (
                                                        <HashLink
                                                            className="sb-link sb-nav__link"
                                                            smooth
                                                            to={item.path}
                                                            onClick={() => handleLinkClick(item.path, item.isHashLink)}
                                                        >
                                                            {item.name}
                                                        </HashLink>
                                                    ) : (
                                                        <Link
                                                            className="sb-link sb-nav__link"
                                                            to={item.path}
                                                            onClick={() => handleLinkClick(item.path, item.isHashLink)}
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Navigation;
