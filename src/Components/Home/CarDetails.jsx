import React, { useEffect, useState } from 'react';
import { Link, json, useLoaderData, useParams } from 'react-router-dom';
import Slider from './Slider';
import { Helmet } from 'react-helmet-async';

const CarDetails = () => {

    const carcard = useLoaderData()
    const { brand_name } = carcard
    console.log(typeof (brand_name))
    const [cars, setCars] = useState([])

    useEffect(() => {
        fetch('https://cars-server-tan.vercel.app/addedcars')
            .then(res => res.json())
            .then(data => {
                let newcars = data.filter(car => car.brand.toUpperCase() === brand_name.toUpperCase())
                setCars(newcars)
            })
    }, [])


    


    return (
        <>
            <Slider />
            <Helmet><title>Purchase {brand_name}</title></Helmet>
            <h1 className='text-3xl text-center font-semibold my-8'>{brand_name}</h1>
            <div className='grid grid-cols-1 gap-4 px-10 md:px-0 md:grid-cols-3 max-w-5xl mx-auto my-12'>
                {
                    cars.map(car => <>
                        <div className='border-dashed border-2 p-4 rounded-xl flex flex-col hover:shadow-lg'>
                            <h1 className='text-center font-semibold mb-2'>{car.brand}</h1>
                            <img src={car.photoUrl} alt="" className='w-full h-40' />
                            <div className='flex justify-between gap-6 my-3 text-sm'>
                                <p className='font-semibold'>Name: <span className='text-gray-400'>{car.name}</span></p>
                                <p className='font-semibold'>Price : <span className='text-gray-400'>${car.price}</span></p>
                            </div>
                            <div className='flex justify-between gap-6 my-3 text-sm flex-grow'>
                                <p className='font-semibold'>Type: <span className='text-gray-400'>{car.type}</span></p>
                                <p className='font-semibold'>Rating : <span className='text-gray-400'>{car.rating}</span></p>
                            </div>
                            <div className='flex flex-col md:flex-row gap-2 justify-center '>
                                <Link to={`/addedcars/${car._id}`} className='btn px-12 bg-red-800 text-white hover:text-black'>details</Link>
                                <Link to={`/update/${car._id}`} className='btn bg-green-800  text-white hover:text-black px-12'>Update</Link>
                            </div>
                        </div>
                    </>)
                }
            </div>
        </>

    );
};

export default CarDetails;