import React from 'react';

const Footer = () => {
    const date=new Date()
    const year =date.getFullYear()
    return (
        <div>
            <p className='text-center'><small>copy right &#169; {year}</small></p>
        </div>
    );
};

export default Footer;