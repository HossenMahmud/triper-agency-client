import React from 'react';
import './Services.css';
const Services = () => {
    return (
        <div>
            <div className="container my-5">
                <div className="row py-5">
                    <div className="col-lg-3 mb-3 col-12 col-sm-12 col-md-6">
                        <div className="service-item">
                            <div className="icon">
                                <span >
                                    <i className="fas fa-bed"></i>
                                </span>
                            </div>
                            <h3 className='mt-3'>Hotel Booking</h3>
                            <p className='px-3'>There is a popular belief that you book flights in advance, your air tickets will be cheaper. However, contrary to the popular belief</p>
                        </div>
                    </div>
                    <div className="col-lg-3 mb-3 col-12 col-sm-12 col-md-6">
                        <div className="service-item">
                            <div className="icon ic2">
                                <span >
                                    <i className="fas fa-fighter-jet"></i>
                                </span>
                            </div>
                            <h3 className='mt-3'>Flight Booking</h3>
                            <p className='px-3'>There is a popular belief that you book flights in advance, your air tickets will be cheaper. However, contrary to the popular belief</p>
                        </div>
                    </div>
                    <div className="col-lg-3 mb-3 col-12 col-sm-12 col-md-6">
                        <div className="service-item">
                            <div className="icon ic3">
                                <span >
                                    <i className="fas fa-ticket-alt"></i>
                                </span>
                            </div>
                            <h3 className='mt-3'>Ticket Booking</h3>
                            <p className='px-3'>There is a popular belief that you book flights in advance, your air tickets will be cheaper. However, contrary to the popular belief</p>
                        </div>
                    </div>
                    <div className="col-lg-3 mb-3 col-12 col-sm-12 col-md-6">
                        <div className="service-item">
                            <div className="icon ic4">
                                <span >
                                    <i className="fas fa-users"></i>
                                </span>
                            </div>
                            <h3 className='mt-3'>Amazing Tour</h3>
                            <p className='px-3'>There is a popular belief that you book flights in advance, your air tickets will be cheaper. However, contrary to the popular belief</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;