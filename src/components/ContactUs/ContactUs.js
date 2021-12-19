import React from 'react';
import './ContactUs.css'

const ContactUs = () => {
    return (
        <div className='contact-container'>
            <h2 className='text-center mt-5 mb-2'>Connect with us</h2>
            <hr className='w-25 mx-auto mb-5' />
            <div className='row container mx-auto justify-content-evenly contact-us'>
                <div className='col-lg-6 col-sm-12'>
                    <h3>Mailing address</h3>
                    <p>Company number: <a href="#">3532452</a></p>
                    <p>Company name: COURSEA</p>
                    <p>Address: 98 C.K. Road</p>
                    <p>City: Dhaka</p>
                    <p>Country: Bangladesh</p>
                    <p>Postal Code: D34 9DK</p>
                </div>
                <div className='col-lg-6 col-sm-12'>
                    <h3>Contact us by Email</h3>
                    <a href="#">coursea@gmail.com</a>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;