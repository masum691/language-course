import React, { useEffect, useState } from 'react';
import CourseCart from '../CourseCart/CourseCart';
import './Home.css'

const Home = () => {
    const [home, setHome] = useState([]);
    useEffect( () => {
        fetch('./output.json')
        .then(res => res.json())
        .then(data => setHome(data))
    }, [])
    
    return (
        <div className="course container ">
            {
                home.map(courses => <CourseCart course={courses}></CourseCart>)
            }
        </div>
    );
};

export default Home;