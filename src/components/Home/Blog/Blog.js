import React from 'react';
import './Blog.css'
import blog1 from '../../../images/proc1.jpg'
import blog2 from '../../../images/proc2.jpg'
import blog3 from '../../../images/proc3.jpg'
import blog4 from '../../../images/proc4.jpg'

const Blog = () => {
    return (
        <div>
            <h2 className='text-center mt-5 mb-4'>Blog</h2>
            <div class="row row-cols-1 row-cols-md-4 g-4 container mx-auto">
                <div class="col">
                    <div class="card h-100 border-0">
                        <img src={blog1} class="card-img-top" alt="..." />
                            <div class="card-body">
                            <small>July 22th, 2018</small>
                                <h5>Best Way to Learn a Foreign Language</h5>
                            </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 border-0">
                        <img src={blog2} class="card-img-top" alt="..." />
                            <div class="card-body">
                            <small>July 22th, 2018</small>
                                <h5>How Long Does it Take to Learn a New Language</h5>
                            </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 border-0">
                        <img src={blog3} class="card-img-top" alt="..." />
                            <div class="card-body">
                            <small>July 22th, 2018</small>
                                <h5>How to Improve Your Memory</h5>
                            </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 border-0">
                        <img src={blog4} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <small>July 22th, 2018</small>
                                <h5>How to Turn Motivation into Celebration</h5>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;