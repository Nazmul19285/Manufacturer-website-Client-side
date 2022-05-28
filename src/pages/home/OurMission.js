import React from 'react';
import misssion from '../../images/mission.jpg';

const OurMission = () => {
    return (
        <div className='bg-gray-700 mt-20'>
            <div className='text-center text-white mt-3 lg:w-8/12 lg:mx-auto mx-4'>
                <h1 className='font-medium text-2xl pt-12 mb-8'><span className='mr-4'>O U R</span>  M I S S I O N</h1>
                <p className='mb-8 text-gray-200 lg:text-lg'>Padaler started in a small Wisconsin barn in 1980, but our founders always saw something bigger. Forty-four years later, we're on a mission to make our world a better place to live and ride.</p>
                <p className='mb-12 text-gray-200 lg:text-lg'>We build only products we love, provide incredible hospitality to our customers, and change the world by getting more people on bikes.</p>
            </div>
            <div>
                <img src={misssion} alt="" />
            </div>

        </div>
    );
};

export default OurMission;