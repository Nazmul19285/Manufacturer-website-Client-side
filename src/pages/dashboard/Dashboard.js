import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomLink from '../common/CustomLink';

const Dashboard = () => {
    return (
        <div className='lg:flex justify-between'>
            <div className='flex lg:flex-col justify-center lg:justify-start py-6 lg:space-y-4'>
                <CustomLink className='ml-4 lg:ml-8 text-sm lg:text-lg' to='myorders'>My Orders</CustomLink>
                <CustomLink className='ml-4 lg:ml-8 text-sm lg:text-lg' to='addreview'>Add A Review</CustomLink>
                <CustomLink className='ml-4 lg:ml-8 text-sm lg:text-lg' to='myprofile'>My Profile</CustomLink>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;