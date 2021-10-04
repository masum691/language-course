import React from 'react';
import './CourseCart.css'

const CourseCart = (props) => {
    const { name, img, price, duration } = props.course;
    return (
        <div>
            {/* row row-cols-1 row-cols-md-3 g-4 */}
            <div className="course-cart">
                <div class="col">
                    <div class="card h-100">
                        <img src={img} className="card-img-top mb-3" alt="..."/>
                        <h3 className="text-danger ms-3">${price}/ <small className="fs-6 text-dark">Lifetime</small> </h3>
                        <div class ="card-body">
                        <h5 class ="card-title">{name}</h5>
                        <p class ="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.This card has even longer content than the first to show that equal height action.</p>
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

export default CourseCart;