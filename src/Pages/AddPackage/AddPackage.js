import React from 'react';
import './AddPackage.css';
import { useForm } from "react-hook-form";

const AddPackage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        fetch("http://localhost:5000/addpackage", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    alert("Successfully Added Package");
                    e.target.reset();
                }
            });
    };

    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <h4>Add Package</h4>
                        <form className="form-item mt-5" onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" {...register("country", { required: true })} placeholder="Enter Country" /> <br />
                            <input type="number" {...register("price", { required: true })} placeholder="Enter Package Price" /> <br />
                            <input type="text" {...register("duration", { required: true })} placeholder="Enter Duration" /> <br />
                            <textarea type="text" {...register("description", { required: true })} placeholder="Enter Description" /> <br />
                            <input type="text" {...register("image", { required: true })} placeholder="Enter Image URL" /> <br />
                            {errors.exampleRequired && <span>This field is required</span>}
                            <input className="btn btn-success mt-3" type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddPackage;