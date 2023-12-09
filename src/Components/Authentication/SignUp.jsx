import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../ProviderAndPrivateRoute/AuthProvider';
import { updateProfile } from 'firebase/auth';

const SignUp = () => {
    const { createUser } = useContext(AuthContext)

    const handleSignUP = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, photo, email, password)
        if (password.length < 6) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `Password is less than 6 characters`
            })
            return
        }

        createUser(email, password)
            .then(result => {
                updateProfile(result.user, {
                    displayName: name, photoURL: photo
                })
                Swal.fire({
                    icon: 'success',
                    title: 'Congo !!',
                    text: 'Successfully Registered !!',
                })

            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.message}`
                })
            })


        e.target.reset();
    }

    return (
        <div className='my-12 '>
            <Helmet><title>Sign Up</title></Helmet>
            <div className='max-w-lg mx-auto bg-slate-100 p-12 rounded-lg'>
                <form onSubmit={handleSignUP} >
                    <h1 className="text-center font-semibold text-2xl">Feel Free To Sign Up </h1>
                    <div className='flex flex-col items-center gap-y-3 my-6'>
                        <input type="text" name='name' placeholder="Enter username" className="input input-bordered w-full max-w-xs" required />
                        <input type="text" name='photo' placeholder="Enter Photo url . don't give quotation .. " className="input input-bordered w-full max-w-xs" required />
                        <input type="email" name='email' placeholder="Enter Email" className="input input-bordered w-full max-w-xs" required />
                        <input type="password" name='password' placeholder="Enter Password" className="input input-bordered w-full max-w-xs" required />

                        <button className='btn btn-wide text-white hover:text-black mt-5 bg-green-700'>Sing up</button>
                    </div>
                    <p className='text-center mb-6'>Already Have Account ? <Link to={'/login'} className='text-blue-700 font-semibold '>Sign in</Link></p>
                </form>

            </div>

        </div>
    );
};

export default SignUp;