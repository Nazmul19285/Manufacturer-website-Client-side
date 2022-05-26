import React from 'react';

const ShowReview = ({ review }) => {
    return (
        <div className='mb-16  w-[360px] lg:w-1/2 mx-auto'>
            <div className='flex items-center ml-8 mb-4'>
                <div className='w-[80px] h-[80px] rounded-full bg-green-400 mr-4'>
                    {
                        review.userImage? <img src={review.userImage} alt="" /> : ''
                    }
                </div>
                <div>
                    <h1 className='text-xl text-gray-600 font-bold'>{review.user}</h1>
                    <h3 className='text-gray-400'>{review.reviewDate}</h3>
                </div>
            </div>
            <div className='grid bg-gray-300 min-h-[100px] relative'>
                <div className='bg-green-400 w-20 h-20 justify-self-end absolute -top-2 -right-2'></div>
                <div className='z-50'>
                    <h1 className='text-lg p-4'>{review.review}</h1>
                </div>
                <div className='bg-yellow-400 w-44 h-20 absolute -bottom-2 -left-2'></div>
                <div className='bg-gray-300 w-20 h-20 justify-self-end absolute top-0 right-0'></div>
                <div className='bg-gray-300 w-44 h-20 absolute bottom-0 left-0'></div>
            </div>
        </div>
    );
};

export default ShowReview;