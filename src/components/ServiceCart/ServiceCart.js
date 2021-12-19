import React from 'react';
import './ServiceCart.css'
const ServiceCart = (props) => {
    console.log(props)
    const { name, img, price, duration, details } = props.serv;
    return (
        <div>
            <div className="service-cart">
                <div class="col">
                    <div class="card h-100 border-0 shadow">
                        <img src={img} className="card-img-top mb-3 img-fluid p-3" alt="..."/>
                        <h5 className="course-price ms-3">${price}/ <small className="fs-6 text-dark">Lifetime</small> </h5>
                        <div class ="card-body">
                        <h5 class ="card-title">{name}</h5>
                        <p class ="card-text">{details}</p>
                        </div>
                        <div class =" d-flex justify-content-around align-items-center pb-3">
                        <small className="fw-bold duration">Duration: {duration}</small>
                        <button className="enroll-btn">Enroll now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCart;