import React, { useContext } from 'react';
import { AuthContext } from '../ProviderAndPrivateRoute/AuthProvider';



const Profile = () => {
    const { user,logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log("Logged out !")
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className='max-w-xl p-12 rounded-lg mx-auto bg-slate-200 text-center space-y-5 my-12'>
            <h1 className='text-3xl font-semibold
            '>{user.displayName}</h1>
            <img src={user.photoURL} alt="" className='w-32 h-32 rounded-full mx-auto' />
            <p className='text-green-700 font-semibold'>{user.email}</p>
            <button onClick={handleLogOut} className='btn bg-red-800 text-white hover:text-black'>log out</button>
        </div>
    );
};

export default Profile;     