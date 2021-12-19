import React, { useEffect, useState } from 'react';
import ServiceCart from '../ServiceCart/ServiceCart';

// services 
const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h2 className='text-center mt-4 mb-4'>Our Courses</h2>
        <div className="course container">
            {
                services.map(service => <ServiceCart serv={service}></ServiceCart>)
            }
        </div>
        </div>
    );
};

export default Services;