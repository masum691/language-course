import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="footer-link">
                    <div>
                        <h4>10 Languages</h4>
                    </div>
                    <div>
                        <h5>Quick Links</h5>
                        <ul>
                            <li>About us</li>
                            <li>Courses</li>
                            <li>Teacher</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <h5>Useful Links</h5>
                        <ul>
                            <li>Privacy policy</li>
                            <li>Terms And Condition</li>
                            <li>Support</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                    <div>
                        <h5>Contact</h5>
                        <input className="mb-3" type="email" placeholder="Your email"/>
                        <input type="password" placeholder="your password" /> <br /><br /><button className="btn btn-warning">Submit</button>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;