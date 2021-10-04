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
                        <img src={img} class="card-img-top" alt="..."/>
                        <h3>${price} <small>/Lifetime</small> </h3>
                        <div class ="card-body">
                        <h5 class ="card-title">{name}</h5>
                        <p class ="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.This card has even longer content than the first to show that equal height action.</p>
                        </div>
                        <div class ="card-footer">
                        <small>Duration: {duration}</small>
                        <button>Enrol now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCart;