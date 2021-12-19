import React from 'react';
import './RealTeacher.css'
import alisha from '../../../images/alisha.png'

const RealTeacher = () => {
    return (
        <div>
            <div className='listen-container my-5 pt-4'>
                <div className='row container mx-auto align-items-center'>
                    <div className='col-lg-6 col-sm-12'>
                        <img className='img-fluid' src={alisha} alt="" />
                    </div>
                    <div className='col-lg-6 col-sm-12'>
                        <h2 className='mb-3'>
                        Real Lessons from Real Teachers
                        </h2>
                        <p className='paragraph'>
                        Your teachers are waiting for you. Learn directly from native speakers and start speaking in minutes. Lessons are like personal classes, except you learn at your own pace.
                        </p>
                        <button className='try-it-free mt-3'>Try it free</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RealTeacher;