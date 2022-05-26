import React from 'react';
const PageNotFound = () => {
    const myStyle = {
        backgroundImage:
            "url('https://i.ibb.co/FYrqsSQ/notfound.jpg')",
        height: '100vh',
        marginTop: '-70px',
        fontSize: '50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div style={myStyle} className='flex justify-center'>
            <div className='flex mt-72 lg:mt-80 glass bg-gray-50 h-28 px-4 pt-4 pb-2 fixed rounded-xl'>
                <h1 className='text-6xl text-blue-900 font-bold'>404</h1>
                <div class="divider divider-horizontal"></div>
                <div className=''>
                    <h1 className='text-6xl font-bold'>Page Not Found</h1>
                    <p className='text-lg'>Please, check the URL in the address bar and try again</p>
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;