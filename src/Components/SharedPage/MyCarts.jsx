import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai';
import Swal from 'sweetalert2';
import { useState } from 'react';

const MyCarts = () => {

    const cartsloader = useLoaderData()

    const [carts, setCarts] = useState(cartsloader)

    const handleDelete = (_id) => {
        console.log(typeof (_id))
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://cars-server-tan.vercel.app/mycarts/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                            let newCartList = carts.filter(cart => cart._id !== _id);
                            setCarts(newCartList)

                        }
                    })

            }
        })

    }


    return (
        <>
            <h1 className='text-3xl font-bold text-center mb-3'>Your Carts</h1> <hr />
            <div className='max-w-2xl my-12 mx-auto grid grid-cols-1 px-5 md:px-0 gap-y-5'>
                {
                    carts.map(cart => <>
                        <div className='flex flex-col md:flex-row items-center p-4 justify-around bg-slate-200 border-2 rounded-lg'>
                            <img src={cart.photoUrl} alt="" className='w-42 h-32' />
                            <div className='flex items-center gap-5 mt-4  justify-center md:mt-0'>
                                <div className='space-y-1'>
                                    <div className='flex items-center gap-3'>
                                        <img src={cart.userPhoto} alt="" className='w-12 h-12 rounded-full' />
                                        <div className='text-black'>
                                            <h1 className='text-sm font-bold '>{cart.userName}</h1>
                                            <p className='text-xs '>{cart.email}</p>
                                        </div>
                                    </div>
                                    <div className='text-sm space-y-1'>
                                        <h5 className='text-green-900 font-semibold'>Name : {cart.name}</h5>
                                        <p className='text-blue-900 font-semibold'>Brand : {cart.brand}</p>
                                        <p className='text-red-900 font-semibold'>Price : ${cart.price}</p>
                                    </div>
                                </div>
                                <div onClick={() => handleDelete(cart._id)} className='text-4xl hover:text-red-600 hover:cursor-pointer'>
                                    <AiFillDelete />
                                </div>
                            </div>
                        </div>
                    </>)
                }
            </div>
        </>
    );
};

export default MyCarts;