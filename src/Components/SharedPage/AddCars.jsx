import React from 'react';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const AddCars = () => {

    const handleAddCars = e => {
        e.preventDefault()
        const form = e.target;
        const photoUrl = form.photoUrl.value;
        const name = form.name.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const brand = form.brand.value;
        const description = form.description.value;

        const cars = { photoUrl, name, type, price, rating, description, brand }
        console.log(cars)
        fetch('https://cars-server-tan.vercel.app/addedcars',{
            method : 'POST',
            headers:{
                "Content-Type" : "application/json",
            },
            body : JSON.stringify(cars)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire({
                    icon: 'success',
                    title: 'Congo !!',
                    text: 'Successfully Car Added !!',
                })
                form.reset();
            })


    }



    return (
        <div className='my-12 bg-slate-200 max-w-4xl mx-auto p-12 rounded-lg'>
            <Helmet><title>Add Cars Forms</title></Helmet>
            <h1 className='text-2xl font-semibold mb-7 text-center'>ADD Cars</h1>
            <form onSubmit={handleAddCars} className='flex flex-col items-center gap-y-5'>
                <div className='flex gap-12 justify-center'>
                    <div className="form-control w-full max-w-lg ">
                        <label className="label">
                            <span className="label-text">Enter Photo URL </span>
                        </label>
                        <input type="text" name='photoUrl' placeholder="Without Quotation" className="input input-bordered w-full " required/>
                    </div>
                    <div className="form-control w-full max-w-lg mx-auto">
                        <label className="label">
                            <span className="label-text">Brand Name </span>
                        </label>
                        <input type="text" name='brand' placeholder="Don't give any space " className="input input-bordered w-full " required/>
                    </div>
                </div>
                <div className='flex gap-12 justify-center  '>
                    <div>
                        <div className="form-control w-full max-w-lg mx-auto">
                            <label className="label">
                                <span className="label-text">Name </span>
                            </label>
                            <input type="text" name='name' placeholder="Enter Name" className="input input-bordered w-full " required/>
                        </div>
                    </div>
                    <div>
                        <div className="form-control w-full max-w-lg mx-auto">
                            <label className="label">
                                <span className="label-text">Type Of Car </span>
                            </label>
                            <input type="text" name='type' placeholder="Type " className="input input-bordered w-full " required/>
                        </div>
                    </div>
                </div>
                <div className='flex gap-12 justify-center  '>
                    <div>
                        <div className="form-control w-full max-w-lg mx-auto">
                            <label className="label">
                                <span className="label-text">Price </span>
                            </label>
                            <input type="text" name='price' placeholder="Price" className="input input-bordered w-full " required />
                        </div>
                    </div>
                    <div>
                        <div className="form-control w-full max-w-lg mx-auto">
                            <label className="label">
                                <span className="label-text">Rating </span>
                            </label>
                            <input type="text" name='rating' placeholder="Rating" className="input input-bordered w-full " required/>
                        </div>
                    </div>
                </div>
                <label className="label">
                    <span className="label-text">Enter Short Description</span>

                </label>
                <textarea name='description' className="textarea textarea-bordered w-3/4 " placeholder="Enter Description " required></textarea>
                <button className='btn btn-wide bg-green-800 text-white hover:text-black'>Add car</button>
            </form>
        </div>
    );
};

export default AddCars;