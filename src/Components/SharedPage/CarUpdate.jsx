import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const CarUpdate = () => {

    const carloader = useLoaderData()
    const { _id, photoUrl, name, type, price, rating, description, brand } = carloader

    const handleUpdateCars = e => {
        e.preventDefault();
        const form = e.target;
        const photoUrl = form.photoUrl.value;
        const name = form.name.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const brand = form.brand.value;
        const description = form.description.value;
        const updateCar = { photoUrl, name, type, price, rating, description, brand }
        console.log(updateCar)
        fetch(`https://cars-server-tan.vercel.app/update/${_id}`,{
            method:'PUT',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(updateCar)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Congo !!',
                        text: 'Successfully Car Updated !!',
                    })
                    form.reset();
                }
            })
    }

    return (
        <div className='my-12 bg-slate-200 max-w-4xl mx-auto p-12 rounded-lg'>
            <Helmet><title>Update Cars Forms</title></Helmet>
            <h1 className='text-2xl font-semibold mb-7 text-center'>Update <span className='text-red-900'>{name}</span></h1>
            <form onSubmit={handleUpdateCars} className='flex flex-col items-center gap-y-5'>
                <div className='flex gap-12 justify-center'>
                    <div className="form-control w-full max-w-lg ">
                        <label className="label">
                            <span className="label-text">Enter Photo URL </span>
                        </label>
                        <input type="text" defaultValue={photoUrl} name='photoUrl' placeholder="Without Quotation" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full max-w-lg mx-auto">
                        <label className="label">
                            <span className="label-text">Brand Name </span>
                        </label>
                        <input type="text" defaultValue={brand} name='brand' placeholder="Don't give any space " className="input input-bordered w-full " />
                    </div>
                </div>
                <div className='flex gap-12 justify-center  '>
                    <div>
                        <div className="form-control w-full max-w-lg mx-auto">
                            <label className="label">
                                <span className="label-text">Name </span>
                            </label>
                            <input type="text" defaultValue={name} name='name' placeholder="Enter Name" className="input input-bordered w-full " />
                        </div>
                    </div>
                    <div>
                        <div className="form-control w-full max-w-lg mx-auto">
                            <label className="label">
                                <span className="label-text">Type Of Car </span>
                            </label>
                            <input type="text" defaultValue={type} name='type' placeholder="Type " className="input input-bordered w-full " />
                        </div>
                    </div>
                </div>
                <div className='flex gap-12 justify-center  '>
                    <div>
                        <div className="form-control w-full max-w-lg mx-auto">
                            <label className="label">
                                <span className="label-text">Price </span>
                            </label>
                            <input type="text" defaultValue={price} name='price' placeholder="Price" className="input input-bordered w-full " />
                        </div>
                    </div>
                    <div>
                        <div className="form-control w-full max-w-lg mx-auto">
                            <label className="label">
                                <span className="label-text">Rating </span>
                            </label>
                            <input type="text" defaultValue={rating} name='rating' placeholder="Rating" className="input input-bordered w-full " />
                        </div>
                    </div>
                </div>
                <label className="label">
                    <span className="label-text">Enter Short Description</span>

                </label>
                <textarea name='description' defaultValue={description} className="textarea textarea-bordered w-3/4 " placeholder="Enter Description "></textarea>
                <button className='btn btn-wide bg-green-800 text-white hover:text-black'>Update</button>
            </form>
        </div>
    );
};

export default CarUpdate;