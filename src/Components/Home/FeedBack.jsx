import React, { useContext } from 'react';
import { AuthContext } from '../ProviderAndPrivateRoute/AuthProvider';
import Swal from 'sweetalert2';

const FeedBack = () => {
    const { user } = useContext(AuthContext)
    console.log(user)

    const handleFeedback = e => {
        e.preventDefault();
        const name = user.displayName;
        const email = user.email
        const photo = user.photoURL;
        const feedback = e.target.feedback.value;
        const userFeedBack = { name, email, photo, feedback }
        console.log(userFeedBack)
        fetch('https://cars-server-tan.vercel.app/feedback',{
            method:'POST',
            headers:{
                "Content-Type":'application/json'
            },
            body: JSON.stringify(userFeedBack)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire({
                    icon: 'success',
                    title: 'Thanks For Your Feedback!!',
                    text: 'Your Feedback is successfully Posted !! Please Check Your Feedback on Users Feedback ❤',
                });
                e.target.reset();
            })

    }

    return (
        <div className='px-5 md:px-0'>
            <form onSubmit={handleFeedback} className='max-w-4xl mx-auto p-12 shadow-2xl mb-12 rounded-2xl flex flex-col items-center'>
                <h1 className='text-center text-3xl font-semibold mb-8'>Give US A Feedback !</h1>
                <textarea className="textarea text-black textarea-success textarea-lg w-full max-w-md " name='feedback' placeholder="Your Feedback ....."></textarea>
                <button className='btn btn-success text-white mt-8'>Post FeedBack</button>
            </form>
        </div>
    );
};

export default FeedBack;