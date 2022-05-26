import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomLink from '../common/CustomLink';

const Dashboard = () => {
    return (
        <div className='lg:grid lg:grid-cols-6 mx-4 lg:mx-16 mt-8'>
            <div className='flex lg:flex-col justify-center lg:justify-start lg:space-y-4 lg:mr-16 mb-8'>
                <CustomLink className='text-sm lg:text-lg ml-6' to='myorders'>My Orders</CustomLink>
                <CustomLink className='text-sm lg:text-lg ml-6' to='addreview'>Add A Review</CustomLink>
                <CustomLink className='text-sm lg:text-lg ml-6' to='myprofile'>My Profile</CustomLink>
            </div>
            <div className='lg:col-span-5'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;