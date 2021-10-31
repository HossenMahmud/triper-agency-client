import React, { useEffect, useState } from 'react';
import './AllOrders.css';
const AllOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);
    console.log(orders);
    return (
        <div>
            <div className="container my-5">
                <div className="orders-title">
                    <h2 className='fw-bold'>ALL ORDER PACKAGE</h2>
                </div>
                <div className="row">
                    <div className=" table-responsive table-responsive-sm table-responsive-md">
                        <table className="table table-success table-striped">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Tour-Country</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders.map((order, index) => (
                                        <tr>
                                            <td>{index}</td>
                                            <td>{order.name}</td>
                                            <td>{order.email}</td>
                                            <td>{order.phone}</td>
                                            <td>{order.tourCountry}</td>
                                            <td>{order.address}</td>
                                            <td>{order.date}</td>
                                            {/* <td>
                                        <Link to={`/student/update/${student._id}`}> <i className="fas fa-edit icon1 me-2"></i></Link>
                                        <i className="fas fa-trash-alt icon2" onClick={() => handleDelete(student._id)}></i>
                                    </td> */}
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllOrders;