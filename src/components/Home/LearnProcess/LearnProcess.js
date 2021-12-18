import React from 'react';
import './LearnProcess.css'

const LearnProcess = () => {
    return (
        <div>
            <h2 className='text-center mt-5'>What do you learn?</h2>
            <div class="row row-cols-1 row-cols-md-4 g-4 container mx-auto mt-3">
                <div class="col">
                    <div class="card h-100 text-center border-0 learn-process-card">
                        <div className='text-center py-2'>
                            <i class="fab fa-teamspeak fs-1 "></i>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Speak</h5>
                            <p class="card-text">Speak with native speakers on any topic you want (not just about the weather). Make friends in different parts of the Earth!</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 text-center border-0 learn-process-card">
                        <div className='text-center py-2'>
                            <i class="fas fa-book fs-1 "></i>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Read</h5>
                            <p class="card-text">Read literature in the original language. Grow your vocabulary, master the language’s grammar, and broaden your horizons!</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 text-center border-0 learn-process-card">
                        <div className='text-center py-2'>
                            <i class="far fa-snowflake fs-1 "></i>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Understand</h5>
                            <p class="card-text">Understand new things about the foreign country, its culture and traditions. Feel yourself like a piece of something global!</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 text-center border-0 learn-process-card">
                        <div className='text-center py-2'>
                            <i class="fas fa-feather-alt fs-1 "></i>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Write</h5>
                            <p class="card-text">Write to your foreign friends or conduct business correspondence with people from other countries and even continents!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LearnProcess;