import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../ProviderAndPrivateRoute/AuthProvider';
import Swal from 'sweetalert2';
import { FaGoogle } from "react-icons/fa6";
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';

const Login = () => {
    const { signUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const handleSignIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        signUser(email, password)
            .then(result => {
                Swal.fire({
                    icon: 'success',
                    title: 'Congo !!',
                    text: 'Successfully Logged In !!',
                })
                navigate(location?.state ? location.state : '/')

            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oppss !!',
                    text: `${error.message}`,
                })
                console.log(error.message)
            })

        e.target.reset();

    }

    const handleGoogle = () => {
        const provider = new GoogleAuthProvider()

        signInWithPopup(auth, provider)
            .then(result => {
                console.log('success !')
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error.message)
            })
    }


    return (
        <div className='max-w-3xl rounded-lg bg-slate-200 p-12 mx-auto my-12'>
            <Helmet><title>CarShop | Sign In</title></Helmet>
            <h1 className='text-3xl font-semibold mb-5 text-center'>Sign In</h1>
            <form onSubmit={handleSignIn} className='flex flex-col gap-y-4 items-center'>
                <input type="email" name='email' placeholder="Enter Email" className="input input-bordered w-full max-w-xs" />
                <input type="password" name='password' placeholder="Enter Password" className="input input-bordered w-full max-w-xs" />
                <button className='btn bg-green-700 hover:text-black text-white px-12 '>sign in</button>
            </form>
            <p className='text-center mt-6'>Don't have Account ?<Link to='/signup' className='text-blue-700 font-semibold '> Sign Up</Link>
                <br />
                <button onClick={handleGoogle} className="btn  btn-outline mt-8  ">
                    <FaGoogle></FaGoogle>
                    Continue with google
                </button>
            </p>


        </div>
    );
};

export default Login;