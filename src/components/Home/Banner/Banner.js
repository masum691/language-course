import React from 'react';
import './Banner.css'
import bannerOne from '../../../images/banner1.png'

const Banner = () => {
    return (
        <div className='banner-container'>
            <div className='container'>
                <div className='row align-items-center justify-content-around'>
                    <div className='col-lg-6 col-sm-12'>
                        <img className='img-fluid w-75' src={bannerOne} alt="" />
                    </div>
                    <div className='col-lg-6 col-sm-12'>
                        <h3>Learn a Language</h3>
                        <h6 className='mt-3'>Learn a language right here with hundreds of free language-learning lessons, games and activities. Join us and have some fun.</h6>
                        <h6 className='mt-3 create-free'>Create Your Free Account</h6>
                        <div className=''>
                            <select className='select-option'>
                                <option value="select">Select a Language</option>
                                <option value="english">English</option>
                                <option className='lang' value="bangla">Bangla</option>
                                <option value="urdu">Urdu</option>
                                <option value="hindi">Hindi</option>
                                <option value="franch">Franch</option>
                                <option value="chinease">Chinease</option>
                                <option value="germany">Germany</option>
                                <option value="spanish">Spanish</option>
                                <option value="tamil">Tamil</option>
                                <option value="tagalog">Tagalog</option>
                            </select>
                            <br />
                            <form action="">
                                <input placeholder='Enter your email' className='lang-email mt-3' type="email" />
                                <br />
                                <div className='mt-3'>
                                    <i class="fas fa-lock lock-awesome fs-5 me-2"></i>
                                    <small className='fw-bold stay-safe'>Safe & Secure.
                                        We respect your privacy.</small>
                                </div>
                                <input className='mt-3 get-started' type="submit" value="Get Started" />

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;