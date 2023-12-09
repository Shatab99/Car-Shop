import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

import { AuthContext } from '../ProviderAndPrivateRoute/AuthProvider';

const EachCardDetails = () => {

    const carcard = useLoaderData()
    const { brand, photoUrl, name, description, price } = carcard
    const {user} = useContext(AuthContext)

    const handleAddToCart = () => {
        console.log(carcard)
        console.log(user.email)
        const email = user.email;
        const userName = user.displayName ;
        const userPhoto = user.photoURL

        const newCard = {email, userName , userPhoto,brand, photoUrl, name, description, price }
        fetch('https://cars-server-tan.vercel.app/mycarts', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(newCard)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire({
                    icon: 'success',
                    title: 'Congo !!',
                    text: 'Successfully Added To My Carts !!',
                })
            })
    }

    return (
        <div className='mt-4 mb-10'>
            <h1 className='text-2xl font-semibold text-center mb-4'>{brand}</h1>
            <section
                className={`relative  bg-cover bg-center bg-no-repeat`}
                style={{ backgroundImage: `url(${photoUrl})` }}
            >
                <div
                    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                ></div>

                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                        <h1 className="text-3xl stroke md:text-white  font-extrabold sm:text-5xl">
                            {name}

                        </h1>

                        <p className="mt-4 md:text-white stroke-black font-semibold max-w-lg rounded-lg  md:glass sm:text-xl/relaxed">
                            {description}
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <Link
                                onClick={handleAddToCart}
                                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                            >
                                Add To Cart ${price}
                            </Link>


                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EachCardDetails;