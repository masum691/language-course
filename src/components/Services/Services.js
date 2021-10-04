import React, { useEffect, useState } from 'react';
import ServiceCart from '../ServiceCart/ServiceCart';

// services 
const Services = () => {
    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch('./services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div className="course container">
            {
                services.map(service => <ServiceCart serv = {service}></ServiceCart>)
            }
        </div>
    );
};

export default Services;