import React from 'react';
import './ChooseUs.css';
import chooseUs from '../../../images/why-choose-us.png';
const ChooseUs = () => {
    return (
        <div>
            <div className="container my-5">
                <div className="choose-us-title mb-5">
                    <h5>Why Choose us?</h5>
                    <h1>Every Time We Provide Best Service</h1>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-sm-12 col-12 col-md-12">
                        <div className="choose-us-img">
                            <img className='img-fluid' src={chooseUs} alt="" />
                        </div>
                    </div>
                    <div className="chooseUs-info col-lg-6 col-sm-12 col-12 col-md-12">
                        <div className="row">
                            <div className="col-lg-6 mb-4 col-sm-6">
                                <div className="chooseUs-item">
                                    <div className="choose-icon mb-3">
                                        <i className="fas fa-archive"></i>
                                    </div>
                                    <h3>Exclusive Packages</h3>
                                    <p>Our misson is to provide the best traveling services for our beloved customers</p>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-3  col-sm-6">
                                <div className="chooseUs-item">
                                    <div className="choose-icon mb-3">
                                        <i className="fas fa-globe-americas"></i>
                                    </div>
                                    <h3>World Class Service</h3>
                                    <p>Our misson is to provide the best traveling services for our beloved customers</p>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-3  col-sm-6">
                                <div className="chooseUs-item">
                                    <div className="choose-icon mb-3">
                                        <i className="fas fa-user-tie"></i>
                                    </div>
                                    <h3>Best Travel Guide</h3>
                                    <p>Our misson is to provide the best traveling services for our beloved customers</p>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-3  col-sm-6">
                                <div className="chooseUs-item">
                                    <div className="choose-icon mb-3">
                                        <i className="fas fa-lock"></i>
                                    </div>
                                    <h3>100% Secure</h3>
                                    <p>Our misson is to provide the best traveling services for our beloved customers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;