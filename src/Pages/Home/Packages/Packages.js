import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Packages.css';
const Packages = () => {
    const [tourPackage, setTourPackage] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/packages')
            .then(res => res.json())
            .then(data => setTourPackage(data))
    }, []);
    return (
        <div className='my-5'>
            <div className="container">
                <div className="packages-title">
                    <h5>Popular Tour Package</h5>
                    <h1>The Best Of Our All Tour Packages</h1>
                </div>
                <div className="row">
                    {
                        tourPackage.map(tour => (
                            <div key={tour.id} className="col-lg-4 mt-5">
                                <div className="package-item">
                                    <div className="package-img">
                                        <img className='img-fluid' src={tour.image} alt="" />
                                    </div>
                                    <div className="package-info px-3 text-start mt-3">
                                        <div className="d-flex justify-content-between">
                                            <h5>{tour.country}</h5>
                                            <h5 className='package-price'>${tour.price}</h5>
                                        </div>
                                        <div className='package-icon'>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <span><i className="far fa-clock"></i> {tour.duration}</span>
                                        <p>{tour.description.slice(0, 80)}</p>
                                        <Link to={`/package/${tour._id}`}>
                                            <button className='package-button'>Book Now</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Packages;