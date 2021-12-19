// import React, { useEffect, useState } from 'react';
// import CourseCart from '../CourseCart/CourseCart';
import Banner from './Banner/Banner';
import Blog from './Blog/Blog';
// import Services from '../Services/Services';
import './Home.css'
import LearnProcess from './LearnProcess/LearnProcess';
import Listen from './Listen/Listen';
import Memorise from './Memorise/Memorise';

const Home = (props) => {
    // const [home, setHome] = useState([]);
    // useEffect(() => {
    //     fetch('./output.json')
    //         .then(res => res.json())
    //         .then(data => setHome(data.slice(0, 4)))
    // }, [])

    return (
        <div>
            {/* <div className="text-center mb-5">
                <h4>Our Courses</h4>
                <h1>Choose Your Language</h1>
            </div>

            <div className="course container ">
                {
                    home.map(courses => <CourseCart course={courses}></CourseCart>)
                }
            </div> */}
            <Banner></Banner>
            <Memorise></Memorise>
            <Listen></Listen>
            <LearnProcess></LearnProcess>
            <Blog></Blog>
        </div>
    );
};

export default Home;