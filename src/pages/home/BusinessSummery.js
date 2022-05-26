import React from 'react';

const BusinessSummery = () => {
    return (
        <div className='mx-8 lg:mx-28 lg:flex justify-between'>
            <div className='w-[320px] h-[320px] bg-green-100 mb-12 flex items-center justify-center rounded-xl drop-shadow-lg '>
                <div className='text-center'>
                    <h1 className='text-xl mb-2'><span className='mr-2'>W E</span> <span>S E R V E D</span></h1>
                    <h1 className='text-3xl font-bold text-yellow-900'>100+ customers</h1>
                </div>
            </div>
            <div className='w-[320px] h-[320px] bg-gray-50 mb-12 flex items-center justify-center rounded-xl drop-shadow-lg '>
                <div className='text-center'>
                <h1 className='text-3xl font-bold text-zinc-900'>50+</h1>
                    <h1 className='text-xl mt-2'><span className='mr-2'>T O O L S</span></h1>
                </div>
            </div>
            <div className='w-[320px] h-[320px] bg-yellow-50 mb-12 flex items-center justify-center rounded-xl drop-shadow-lg '>
                <div className='text-center'>
                <h1 className='text-3xl font-bold text-blue-900'>120M+</h1>
                    <h1 className='text-xl mt-2'><span className='mr-2'>A N N U A L</span> <span>R E V E N U E</span></h1>
                </div>
            </div>
            <div className='w-[320px] h-[320px] bg-purple-50 mb-12 flex items-center justify-center rounded-xl drop-shadow-lg '>
                <div className='text-center'>
                    <h1 className='text-xl mb-2'><span className='mr-2'>R E V I E W S</span></h1>
                    <h1 className='text-3xl font-bold text-zinc-900'>50+</h1>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummery;