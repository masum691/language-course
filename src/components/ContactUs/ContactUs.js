import React from 'react';

const ContactUs = () => {
    return (
        <div className="w-75 mx-auto">
            <div className="fw-bold p-5 rounded mb-5">
                <h4 className="text-danger">Contact Us</h4>
                <h2>Get In Touch With Us</h2>
                <hr />
                <p>Location: Bangladesh</p>
                <p>Phone: 0232345</p>
                <p>Mail: coursea@gmail.com</p>
                <p>Web: www.coursea@gmail.com</p>

            </div>
            <div className="shadow-lg p-5 rounded">
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" class ="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class ="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;