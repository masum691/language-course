import React from 'react';
import './ServiceCart.css'
const ServiceCart = (props) => {
    console.log(props)
    const { name, img, price, duration, details } = props.serv;
    return (
        <div>
            {/* row row-cols-1 row-cols-md-3 g-4 */}
            <div className="service-cart">
                <div class="col">
                    <div class="card h-100">
                        <img src={img} className="card-img-top mb-3 img-fluid" alt="..."/>
                        <h3 className="text-danger ms-3">${price}/ <small className="fs-6 text-dark">Lifetime</small> </h3>
                        <div class ="card-body">
                        <h5 class ="card-title">{name}</h5>
                        <p class ="card-text">{details}</p>
                        </div>
                        <div class ="card-footer d-flex justify-content-between">
                        <small className="fw-bold">Duration: {duration}</small>
                        <button className="btn btn-primary">Enroll now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCart;