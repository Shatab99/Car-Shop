import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserFeedback = () => {
    const feedBacks = useLoaderData()
    return (
        <div className='mb-12'>
            <h1 className='my-12 text-3xl text-center font-semibold'>Customer's FeedBacks</h1>
            <div className='max-w-4xl mx-auto grid-cols-1 px-5 md:px-0 '>
                {
                    feedBacks.map(feedBack => <>
                        <div className='p-8 rounded-2xl my-8 border-2 shadow-2xl '>
                            <div className='flex items-center gap-4'>
                                <img src={feedBack.photo} alt="" className='w-12 h-12 rounded-full' />
                                <div>
                                    <p className='text-sm font-semibold'>{feedBack.name}</p>
                                    <p className='text-xs font-light'>{feedBack.email}</p>
                                </div>
                            </div>
                            <p className='mt-4'>{feedBack.feedback}</p>
                        </div>

                    </>)
                }
            </div>
        </div>
    );
};

export default UserFeedback;