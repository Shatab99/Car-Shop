import React from 'react';
import error from './assets/images/error.jpg'

const ErrorPage = () => {
    return (
        <div>
            <div>
                <img src={error} alt="" className='w-1/2 mx-auto animate-pulse' />
            </div>
        </div>
    );
};

export default ErrorPage;