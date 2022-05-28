import React from 'react';
import customer from '../../images/business/customer-insight.gif';
import tools from '../../images/business/tricycle-50.png';
import review from '../../images/business/good-quality.gif';
import revenue from '../../images/business/combo-chart.gif';

const BusinessSummery = () => {
    return (
        <div className='mx-8 lg:mx-28 lg:flex justify-between'>
            <div className='mb-12'>
                <img className='w-[60px]' src={customer} alt="" />
                <div className='w-[320px] h-[320px] bg-green-100 flex items-center justify-center rounded-xl drop-shadow-lg '>
                    <div className='text-center'>
                        <h1 className='text-xl mb-2'><span className='mr-2'>W E</span> <span>S E R V E D</span></h1>
                        <h1 className='text-3xl font-bold text-yellow-900'>100+ customers</h1>
                    </div>
                </div>
            </div>
            <div className='mb-12'>
                <div className='w-[320px] h-[320px] bg-gray-50 flex items-center justify-center rounded-xl drop-shadow-lg '>
                    <div className='text-center'>
                        <h1 className='text-3xl font-bold text-zinc-900'>50+</h1>
                        <h1 className='text-xl mt-2'><span className='mr-2'>T O O L S</span></h1>
                    </div>
                </div>
                <img className='w-[60px]' src={tools} alt="" />
            </div>
            <div className='mb-12'>
                <img className='w-[60px]' src={revenue} alt="" />
                <div className='w-[320px] h-[320px] bg-yellow-50 flex items-center justify-center rounded-xl drop-shadow-lg '>
                    <div className='text-center'>
                        <h1 className='text-3xl font-bold text-blue-900'>120M+</h1>
                        <h1 className='text-xl mt-2'><span className='mr-2'>A N N U A L</span> <span>R E V E N U E</span></h1>
                    </div>
                </div>
            </div>
            <div className='mb-12'>
                <div className='w-[320px] h-[320px] bg-purple-50 flex items-center justify-center rounded-xl drop-shadow-lg '>
                    <div className='text-center'>
                        <h1 className='text-xl mb-2'><span className='mr-2'>R E V I E W S</span></h1>
                        <h1 className='text-3xl font-bold text-zinc-900'>50+</h1>
                    </div>
                </div>
                <img className='w-[60px]' src={review} alt="" />
            </div>
        </div>
    );
};

export default BusinessSummery;