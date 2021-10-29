import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className='banner-bg'>
            <div className="container">
                <div className="row mx-auto">
                    <div className="col-lg-9 text-start col-12 col-sm-12 col-md-7">
                        <div className="banner-info">
                            <h1>GET A TOUR</h1>
                            <h1>WE PROVIDE BEST</h1>
                            <h1><span>TOUR </span>PACAKAGE IN</h1>
                            <h1>YOUR <span>BUDGET</span></h1>
                        </div>
                    </div>
                    <div className="col-lg-3 col-8 col-sm-8 col-md-5 mx-auto">
                        <div className="offer">
                            <h2 className='text-white fw-bold'><span className='text-danger'>15%</span> OFF</h2>
                            <h3 className='text-warning'>ON All PACAKAGE</h3>
                            <button className='mt-3 offer-btn'>Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;