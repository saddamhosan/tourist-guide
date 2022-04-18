import React from 'react';
import notFound from '../../images/not found.jpg';
const NotFound = () => {
    return (
        <div className='flex justify-center items-center h-[80vh]'>
            <img src={notFound} alt="" />
        </div>
    );
};

export default NotFound;