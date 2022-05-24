import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomLink from '../common/CustomLink';

const Dashboard = () => {
    return (
        <div className='lg:flex'>
            <div className='flex lg:flex-col justify-center'>
                <CustomLink to='myorders'>My Orders</CustomLink>
                <CustomLink to='addreview'>Add a Review</CustomLink>
                <CustomLink to='myprofile'>My Profile</CustomLink>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;