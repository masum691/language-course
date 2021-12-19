import React from 'react';
import './AboutUs.css'
import man1 from '../../images/man1.png'
import man2 from '../../images/man2.png'
import man3 from '../../images/man3.png'

const AboutUs = () => {
    return (
        <div>
            <h2 className='text-center mt-5 mb-5'>About Us</h2>
            <div className="about container">
                <div className="about-img">
                    <img className='rounded shadow' src="https://cdn.newsapi.com.au/image/v1/a71ffa2a1a03b16f8a38a36282c016e3" alt="" />
                </div>
                <div>
                    <h3>Know About Best Online Learning Platform With Verbalize</h3>
                    <p className="fw-normal fs-5 mt-4">Would you like to ‘parlez-vouz Francais’? Or perhaps you’d like ‘sprechen Deutsch’? Whether it’s French, German, Spanish, Italian or Japanese you’d like to learn, our free language courses have you covered. At Alison, we believe in education for all so all our language tutorials are completely free - all you need to do is register and begin learning. As more and more people work remotely.</p>
                    
                </div>
            </div>

            {/* teachers */}
            <h2 className="text-center mt-5 mb-4">Out Teachers</h2>
            <div class="row row-cols-1 row-cols-md-4 g-4 container mx-auto">
                <div class="col">
                    <div class="card h-100 border-0 shadow">
                        <img src={man1} class="p-2 card-img-top card-img" alt="..."/>
                        <div class ="card-body">
                        <h5 class ="card-title">John Smith</h5>
                        <p class ="card-text">The word ‘education’ comes from the root e from ex, out, and duco, I lead. It means a leading out. To me education is a leading...</p>
                        <div className='text-center teacher-social-link'>
                                <i class="fab fa-linkedin fs-4 me-2"></i>
                                <i class="fab fa-twitter-square fs-4 me-2"></i>
                                <i class="fab fa-facebook-square fs-4 me-2"></i>
                                <i class="fab fa-instagram-square fs-4 me-2"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 border-0 shadow">
                        <img src={man2} class="p-2 card-img-top card-img" alt="..."/>
                        <div class ="card-body">
                        <h5 class ="card-title">Maxwel</h5>
                        <p class ="card-text">A great teacher can teach Calculus with a paper clip and literature in an empty field. Technology is just another tool, not a destination.</p>
                        <div className='text-center teacher-social-link'>
                                <i class="fab fa-linkedin fs-4 me-2"></i>
                                <i class="fab fa-twitter-square fs-4 me-2"></i>
                                <i class="fab fa-facebook-square fs-4 me-2"></i>
                                <i class="fab fa-instagram-square fs-4 me-2"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 border-0 shadow">
                        <img src={man3} class="p-2 card-img-top card-img" alt="..."/>
                        <div class ="card-body">
                        <h5 class ="card-title">Robin Son</h5>
                        <p class ="card-text">Proper teaching is recognized with ease. You can know it without fail because it awakens within you that sensation...</p>
                        <div className='text-center teacher-social-link'>
                                <i class="fab fa-linkedin fs-4 me-2"></i>
                                <i class="fab fa-twitter-square fs-4 me-2"></i>
                                <i class="fab fa-facebook-square fs-4 me-2"></i>
                                <i class="fab fa-instagram-square fs-4 me-2"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 border-0 shadow">
                        <img src={man3} class="p-2 card-img-top card-img" alt="..."/>
                        <div class ="card-body">
                        <h5 class ="card-title">Robin Son</h5>
                        <p class ="card-text">Proper teaching is recognized with ease. You can know it without fail because it awakens within you that sensation which tells you...</p>
                        <div className='text-center teacher-social-link'>
                                <i class="fab fa-linkedin fs-4 me-2"></i>
                                <i class="fab fa-twitter-square fs-4 me-2"></i>
                                <i class="fab fa-facebook-square fs-4 me-2"></i>
                                <i class="fab fa-instagram-square fs-4 me-2"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;