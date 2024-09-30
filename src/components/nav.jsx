import { useState } from 'react';
import { DownArrow } from './downArrow';
import '../css/hamburgers.css'
import '../css/nav.css';
import logo from '/logo.webp';

export const Nav = () => {
    const [activeLink, setActiveLink] = useState(null)
    const [hamburger, setHamburger] = useState(false)

    const handleHamburgerClick = () => {
        setHamburger(prevState => !prevState); 
    };

    const handleLinkClick = (link) => {
        setActiveLink(link)
    }
    return (
        <nav className="navbar mx-lg-5">
            <div className="container-fluid flex-nowrap">
                <a className="navbar-brand border- border-custom" href="#"><img src={logo} alt="logo" className='w-50'/></a>
                <button 
                className={`navbar-toggler d-lg-none menu-btn hamburger hamburger--collapse pe-0 ${hamburger? "is-active" : ""}`} 
                type="button" 
                data-bs-toggle="offcanvas" 
                data-bs-target="#offCanvasNavbar" 
                aria-controls="offCanvasNavbar" 
                aria-label="Toggle navigation" 
                onClick={handleHamburgerClick}>
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                </button>
                <div className="offcanvas offcanvas-end custom-offcanvas" tabIndex="-1" id="offCanvasNavbar" aria-labelledby="offcanvasNavbarLabel" data-bs-backdrop="false">
                    <div className="offcanvas-body">
                        <ul className="navbar nav d-flex flex-column align-items-start">
                            <li className="nav-item p-2">
                                    <a href="#" className="nav-link-active">Home</a>
                            </li>
                            <li className="nav-item p-2">
                                    <a href="#" className="nav-link-active">About</a>
                            </li>
                            <li className="nav-item dropdown p-2">
                                    <a href="#" className="nav-link-active dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" role='button'>Pages <DownArrow/></a>
                                    <ul className="dropdown-menu dropdown-nav position-relative">
                                        <li><a className="dropdown-item fw-semibold" href="#">Page 1</a></li>
                                        <li><a className="dropdown-item fw-semibold" href="#">Page 2</a></li>
                                        <li><a className="dropdown-item fw-semibold" href="#">Page 3</a></li>
                                    </ul>
                            </li>
                            <li className="nav-item p-2">
                                    <a href="#" className="nav-link-active">Packages</a>
                                </li>
                                <li className="nav-item p-2">
                                    <a href="#" className="nav-link-active">Contact</a>
                                </li>
                            <li className="nav-item p-2">
                                    <a href="#" className="nav-link-active">Cart[0]</a>
                                </li>
                        </ul>
                    </div>
                </div>
                <div className="d-none d-lg-flex justify-content-between align-items-center w-100">
                    <ul className="navbar nav pe-3 justify-content-start">
                        <li className="nav-link">
                                <a href="#" 
                                className={`nav-link-active ${activeLink === 'home' ? 'link-change' : ''}`}  
                                onClick={() => handleLinkClick('home')}>Home</a>
                        </li>
                        <li className="nav-link">
                                <a href="#" 
                                className={`nav-link-active ${activeLink === 'about' ? 'link-change' : ''}`}  
                                onClick={() => handleLinkClick('about')}>About</a>
                        </li>
                        <li className="nav-link">
                            <div className="dropdown">
                                <a href="#" className="nav-link-active pe-2 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Pages <DownArrow/></a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item fw-semibold" href="#">Page 1</a></li>
                                    <li><a className="dropdown-item fw-semibold" href="#">Page 2</a></li>
                                    <li><a className="dropdown-item fw-semibold" href="#">Page 3</a></li>
                                </ul>
                            </div>

                        </li>
                        <li className="nav-link">
                                <a href="#" 
                                className={`nav-link-active ${activeLink === 'packages' ? 'link-change' : ''}`}  
                                onClick={() => handleLinkClick('packages')}>Packages</a>
                            </li>
                            <li className="nav-link">
                                <a href="#" 
                                className={`nav-link-active ${activeLink === 'contact' ? 'link-change' : ''}`} 
                                onClick={() => handleLinkClick('contact')}>Contact</a>
                            </li>
                        <li className="nav-link">
                                <a href="#" 
                                className={`nav-link-active ${activeLink === 'cart' ? 'link-change' : ''}`} 
                                onClick={() => handleLinkClick('cart')}>Cart[0]</a>
                            </li>
                    </ul>
                        <div>
                            <button className="btn-consultation rounded-pill px-4 fw-bold bg-white"><span>Free Consultation</span></button>
                        </div>
                </div>
            </div>
        </nav>
    );
};
