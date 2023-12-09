import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CarCards = () => {

    const [cars, setCars] = useState([])

    useEffect(() => {
        fetch('https://cars-server-tan.vercel.app/carcards')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])


    return (
        <div className='grid grid-cols-1 px-8 md:px-0 md:grid-cols-3 max-w-4xl mx-auto my-12 gap-6'>
            {
                cars.map(car =>  <>
                    <div  className='border-dashed border-2 flex flex-col items-center p-4 rounded-lg hover:shadow-2xl'>
                        <Link to={`carcards/${car.brand_name}`}>
                            <img src={car.brand_img} alt="" className='w-40 h-40' />
                            <h1 className='text-lg font-semibold my-4'>{car.brand_name}</h1>
                        </Link>
                    </div>

                </>)
            }
        </div>
    );
};

export default CarCards;