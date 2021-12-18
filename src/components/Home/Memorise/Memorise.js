import React from 'react';
import './Memorise.css'
import svg1 from '../../../images/img1.svg'
import svg2 from '../../../images/img2.svg'
import svg3 from '../../../images/img3.svg'
import svg4 from '../../../images/img4.svg'

const Memorise = () => {
    return (
        <div>
            <h2 className='text-center mt-5'>Why Memorise?</h2>
            <div class="row row-cols-1 row-cols-md-4 g-4 container mx-auto">
                <div class="col">
                    <div class="card h-100 border-0 svg-card">
                        <div className='text-center svg-one'>
                            <img src={svg1} class="w-50 card-img-top" alt="..." />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Proven memory techniques rooted in science</h5>
                            <p class="card-text para">Learn more, faster, with a learning algorithm developed with the best cognitive science.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 border-0 svg-card">
                        <div className='text-center py-4 svg-two'>
                            <img src={svg2} class="w-50 card-img-top" alt="..." />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Twice as fast as learning than in a regular classroom setting</h5>
                            <p class="card-text para">Train your long term memory with a method thats faster and better than traditional rote learning.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 border-0 svg-card">
                        <div className='text-center py-4 svg-three'>
                            <img src={svg3} class="w-50 card-img-top" alt="..." />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Immersive learning. Learn like you live there.</h5>
                            <p class="card-text para">Dont waste time with phrases people dont actually say. Learn the language people really use.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 border-0 svg-card">
                        <div className='text-center py-4 svg-four'>
                            <img src={svg4} class="w-50 card-img-top" alt="..." />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Cover everything from holiday essentials to longer-term goals</h5>
                            <p class="card-text para">Find the content topics to match what you need: from holiday small talk to meeting your partners family.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Memorise;