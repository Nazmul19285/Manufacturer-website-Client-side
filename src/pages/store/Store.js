import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomLink from '../common/CustomLink';

const Store = () => {
    return (
        <div>
            <div className='bg-white drop-shadow-xl'>
                <div>
                    <img className='w-full h-full' src="https://i.ibb.co/0Vr30f8/New-Project.jpg" alt="banner" />
                    <nav className='flex justify-center py-6'>
                        <CustomLink className='ml-4 lg:ml-8 text-sm lg:text-lg' to='allproducts'>All products</CustomLink>
                        <CustomLink className='ml-4 lg:ml-8 text-sm lg:text-lg' to='frame'>Frame</CustomLink>
                        <CustomLink className='ml-4 lg:ml-8 text-sm lg:text-lg' to='wheel'>Wheel</CustomLink>
                        <CustomLink className='ml-4 lg:ml-8 text-sm lg:text-lg' to='frontset'>Front set</CustomLink>
                        <CustomLink className='ml-4 lg:ml-8 text-sm lg:text-lg' to='brakes'>Brakes</CustomLink>
                        <CustomLink className='ml-4 lg:ml-8 text-sm lg:text-lg' to='others'>Others</CustomLink>
                    </nav>
                </div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Store;