import React from 'react';
import listeningImg from '../../../images/listening.png'
import './Listen.css'

const Listen = () => {
    return (
        <div className='listen-container my-5 pt-4'>
            <div className='row container mx-auto align-items-center'>
                <div className='col-lg-6 col-sm-12'>
                    <h2>
                        Powerful Study Tools to Help
                        You <span className='memorize-listening'>Memorize Fast</span>
                    </h2>
                    <h5>
                        Spend less time studying, more time speaking.
                        Our study tools help you learn faster, speak
                        better and understand language naturally.
                    </h5>
                </div>
                <div className='col-lg-6 col-sm-12'>
                    <img className='img-fluid' src={listeningImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Listen;