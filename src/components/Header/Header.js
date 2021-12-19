import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
import TopHeader from './TopHeader/TopHeader';

const Header = () => {
    const linkStyle = {
        fontWeight: "bold",
        color: "rgb(0, 145, 202)",
        textDecoration: "none"
    }
    return (
        <div>
            <TopHeader></TopHeader>
            <nav class="navbar navbar-expand-lg navbar-light navbar-color">
                <div class="container-fluid">
                    <a class="ancor navbar-brand fs-4 fw-bold coursea" href="#">COURSEA</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <NavLink className="link"
                                    to="/home"
                                    activeStyle={linkStyle}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="link"
                                    to="/courses"
                                    activeStyle={linkStyle}
                                >
                                    Courses
                                </NavLink>
                            </li>

                            <li class="nav-item">
                                <NavLink className="link"
                                    to="/about"
                                    activeStyle={linkStyle}
                                >
                                    About Us
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="link"
                                    to="/contact"
                                    activeStyle={linkStyle}
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                        </ul>
                        <div>
                            <i class="fas fa-search fs-6 me-5"></i>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default Header;