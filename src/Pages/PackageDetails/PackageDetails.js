import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './PackageDetails.css'
import { useForm } from "react-hook-form";
import destination from '../../images/destination.jpg'
import useAuth from '../../Hooks/useAuth';


const PackageDetails = () => {
    const { user } = useAuth();
    const { register, setValue, handleSubmit, formState: { errors } } = useForm();

    const [tourPackage, setTourPackage] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/package/${id}`)
            .then(res => res.json())
            .then(data => setTourPackage(data))
    }, []);


    const onSubmit = (data, e) => {
        fetch("http://localhost:5000/orderpackage", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    alert("Successfully Order This Package");
                    e.target.reset();
                }
            });
    };

    return (
        <>
            <div className='package-details-bg'>
                <div className="container">
                    <div className="package-details-title">
                        <h1>Tour details</h1>
                    </div>
                </div>
            </div>
            <div>
                <div className="container my-5">
                    <div className="row my-5">
                        <div className="col-lg-8 col-12 col-sm-12 col-md-12">
                            <div className="packageDetail-info text-start">
                                <div className='d-flex justify-content-between'>
                                    <h1 className='fw-bold'>Super {tourPackage.country} Trip </h1>
                                    <h4 className='fw-bold'><span className='packageDetails-price'>${tourPackage.price}</span> / per person </h4>
                                </div>
                                <div className='package-icon'>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <span>(5 Reviews)</span>
                                </div>
                                <div className="packageDetail-img mb-3">
                                    <img className='img-fluid' src={tourPackage.image} alt="" />
                                </div>
                                <p>{tourPackage.description}</p>
                                <div className="gallery">
                                    <h2 className='mb-3'>Gallery</h2>
                                    <div className="row">
                                        <div className="col-4 col-lg-2 col-sm-4 col-md-2 mb-4">
                                            <img className='img-fluid' src={'https://i.ibb.co/vdXC82w/img4.jpg'} alt="" />
                                        </div>
                                        <div className="col-4 col-lg-2 col-sm-4 col-md-2 mb-4">
                                            <img className='img-fluid' src={'https://i.ibb.co/TkmCtSZ/img6.jpg'} alt="" />
                                        </div>
                                        <div className="col-4 col-lg-2 col-sm-4 col-md-2 mb-4">
                                            <img className='img-fluid' src={'https://i.ibb.co/JBFSPR0/img3.jpg'} alt="" />
                                        </div>
                                        <div className="col-4 col-lg-2 col-sm-4 col-md-2 mb-4">

                                            <img className='img-fluid' src={'https://i.ibb.co/VDc2BRM/img1.jpg'} alt="" />
                                        </div>
                                        <div className="col-4 col-lg-2 col-sm-4 col-md-2 mb-4">
                                            <img className='img-fluid' src={'https://i.ibb.co/rdpB1Mg/img5.jpg'} alt="" />
                                        </div>
                                        <div className="col-4 col-lg-2 col-sm-4 col-md-2 mb-4">

                                            <img className='img-fluid' src={'https://i.ibb.co/SwvqD8X/img2.jpg'} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Package Order Part Start */}
                        <div className="col-lg-4">
                            <div className="book-now-form">
                                <form className="form-item" onSubmit={handleSubmit(onSubmit)}>
                                    <h4>Submit To Oder</h4>
                                    <input defaultValue={user?.displayName} type="text" {...register("name", { required: true })} /> <br />
                                    <input defaultValue={user?.email} type="email" {...register("email", { required: true })} /> <br />
                                    <input defaultValue={tourPackage?.country} type="text" {...register("tourCountry", { required: true })} /> <br />
                                    <input type="number" {...register("phone", { required: true })} placeholder="Phone" /> <br />
                                    <input type="text" {...register("address", { required: true })} placeholder="Address" /> <br />
                                    <input type="date" {...register("date", { required: true })} placeholder="Date" /> <br />
                                    {errors.exampleRequired && <span>This field is required</span>}
                                    <input className="btn btn-success mt-3" type="submit" />
                                </form>
                            </div>
                            {/* Package Order Part End */}
                            <div className='info text-start mt-3'>
                                <h3>More Information</h3>
                                <table className="table table-success table-striped">
                                    <tbody>
                                        <tr>
                                            <td>Phone Number: +8801786502485 </td>
                                        </tr>
                                        <tr>
                                            <td>Office Time: 9am - 5pm </td>
                                        </tr>
                                        <tr>
                                            <td>Office Location:Mohammadpur, Dhaka </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="destination-img mt-5">
                                <img className='img-fluid' src={destination} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>

    );
};

export default PackageDetails;