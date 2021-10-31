import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../../images/logo.png'
import useAuth from '../../../Hooks/useAuth';
const Header = () => {
    const { handleLogout, user } = useAuth();
    return (
        <div className='header-bg'>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="d-flex text-white">
                            <img className='img-fluid logo' src={logo} alt="" />
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav ms-auto">
                                <Link to="/home" className="nav-link text-black">Home</Link>

                                {
                                    user?.email && <Link to="/addpackage" className="nav-link text-black">Add-Package</Link>
                                }
                                {
                                    user?.email && <Link to="/allOrders" className="nav-link text-black">All-Orders</Link>
                                }

                                {
                                    user ? <span className='mt-2 text-warning'> {user.displayName} </span> : (<span></span>)
                                }
                                {
                                    user?.displayName ? (<button className='logoutBtn' onClick={handleLogout}>LogOut</button>) :
                                        <Link to="/login" className="nav-link text-black">login</Link>
                                }
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;