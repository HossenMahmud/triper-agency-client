import React from 'react';
import './Footer.css';
import logo from '../../../images/logo.png';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <>
            <div className='footer-bg py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-12 col-sm-12 col-md-4">
                            <div className="footer-item text-start">
                                <div className="footer-img">
                                    <img className='img-fluid w-50' src={logo} alt="" />
                                </div>
                                <div className="footer-info mt-4">
                                    <p><i className="fas fa-envelope me-3"></i>hello@traip.com</p>
                                    <p><i className="fas fa-phone-square-alt me-3"></i>+8801786502485</p>
                                    <p><i className="fas fa-address-card me-3"></i>Mohammadpur, Dhaka-1207 </p>
                                </div>
                                <div className="footer-icon mt-4">
                                    <Link to='/home'><i className="fab fa-facebook-square"></i></Link>
                                    <Link to='/home'><i className="fab fa-twitter-square"></i></Link>
                                    <Link to='/home'><i className="fab fa-instagram-square"></i></Link>
                                    <Link to='/home'><i className="fab fa-linkedin"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12 col-sm-12 col-md-4">
                            <div className="footer-item text-start">
                                <h3 className='mb-4'>Quick Links</h3>
                                <p>- <Link to='/home'>Home</Link></p>
                                <p>- <Link to='/home'>About</Link></p>
                                <p>- <Link to='/home'>Blog</Link></p>
                                <p>- <Link to='/home'>Flights</Link></p>
                                <p>- <Link to='/home'>Tour</Link></p>
                                <p>- <Link to='/home'>404</Link></p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12 col-sm-12 col-md-4">
                            <div className="footer-item text-start">
                                <h3>Gallery</h3>
                                <div className="row mt-4">
                                    <div className="col-4 mb-4">
                                        <img className='img-fluid' src={'https://i.ibb.co/VDc2BRM/img1.jpg'} alt="" />
                                    </div>
                                    <div className="col-4 mb-4">
                                        <img className='img-fluid' src={'https://i.ibb.co/SwvqD8X/img2.jpg'} alt="" />
                                    </div>
                                    <div className="col-4 mb-4">
                                        <img className='img-fluid' src={'https://i.ibb.co/JBFSPR0/img3.jpg'} alt="" />
                                    </div>
                                    <div className="col-4 mb-4">
                                        <img className='img-fluid' src={'https://i.ibb.co/vdXC82w/img4.jpg'} alt="" />
                                    </div>
                                    <div className="col-4 mb-4">
                                        <img className='img-fluid' src={'https://i.ibb.co/rdpB1Mg/img5.jpg'} alt="" />
                                    </div>
                                    <div className="col-4 mb-4">
                                        <img className='img-fluid' src={'https://i.ibb.co/TkmCtSZ/img6.jpg'} alt="" />
                                    </div>
                                    <div className="col-4">
                                        <img className='img-fluid' src={'https://i.ibb.co/QJVppQX/img7.jpg'} alt="" />
                                    </div>
                                    <div className="col-4">
                                        <img className='img-fluid' src={'https://i.ibb.co/Ln8qtLz/img8.jpg'} alt="" />
                                    </div>
                                    <div className="col-4">
                                        <img className='img-fluid' src={'https://i.ibb.co/1nnhjQg/img9.jpg'} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-end py-3'>
                <div className="container">
                    <p>© Website - 2021 | All Right Reserved. Designed By Hossen Mahmud</p>
                </div>
            </div>
        </>
    );
};

export default Footer;









