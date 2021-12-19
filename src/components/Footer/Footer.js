import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='container-fluid'>
                <div class="row row-cols-1 row-cols-md-4 g-4">
                    <div class="col">
                        <h3 className='mt-4 footer-content'>Coursea</h3>
                        <p>&copy; 2021 U.S. Institute of Coursea. All rights reserved</p>
                    </div>
                    <div class="col">
                        <h6 className='text-left ms-4 footer-content'>Learn Language Online</h6>
                        <div className='d-lg-flex'>
                            <div>
                                <ul>
                                    <li>English</li>
                                    <li>Bangla</li>
                                    <li>Hindi</li>
                                    <li>Tamil</li>
                                    <li>Spanish</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li>Tagalog</li>
                                    <li>Housa</li>
                                    <li>Franch</li>
                                    <li>Japanease</li>
                                    <li>Chinease</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div class="col">
                        <div className='text-left '>
                            <h6 className='ms-4 footer-content'>Quick Links</h6>
                            <ul>
                                <li>About Us</li>
                                <li>Contact Us</li>
                                <li>Privacy</li>
                                <li>Terms</li>
                                <li>Demo Courses</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col">
                        <div>
                            <h6 className='footer-content'>Contact us by email:</h6>
                            <p>coursea@gmail.com</p>
                            <h6>Contact with us:</h6>
                            <div className='footer-social'>
                                <i class="fab fa-linkedin fs-4 me-2"></i>
                                <i class="fab fa-twitter-square fs-4 me-2"></i>
                                <i class="fab fa-facebook-square fs-4 me-2"></i>
                                <i class="fab fa-instagram-square fs-4 me-2"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;