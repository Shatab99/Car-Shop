import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../ProviderAndPrivateRoute/AuthProvider';
import DarkLight from './DarkLight';

const NavBar = () => {
    const { user } = useContext(AuthContext)


    return (
        <div className="navbar bg-[]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/addcars'}>Add Cars</Link></li>
                        <li><Link to={'/mycarts'}>My Cart</Link></li>
                        <li><Link to={'/feedback'}>Users FeedbacK</Link></li>
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost normal-case text-xl">Car Shop</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/addcars'}>Add Cars</Link></li>
                    <li><Link to={'/mycarts'}>My Cart</Link></li>
                    <li><Link to={'/feedback'}>Users FeedbacK</Link></li>
                </ul>
            </div>
            <div className="navbar-end gap-6">
            <DarkLight/>
                {
                    user ? <>
                        <div className='flex flex-col items-center'>
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <Link to={'/profile'}> <img src={user.photoURL} /></Link>
                                </div>
                            </label>
                            <p className='text-xs'>See Profile</p>
                        </div>
                    </>

                        :
                        <Link to={'/login'} className="btn bg-red-800 text-white hover:text-black">Log in</Link>
                }
                

            </div>
        </div>
    );
};

export default NavBar;