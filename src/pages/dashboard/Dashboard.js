import { isEmpty } from '@firebase/util';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import CustomLink from '../common/CustomLink';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [userInDb, setUserInDb] = useState({});
    const [adminChecker, setAdminChecker] = useState(false);

    useEffect(() => {
        fetch(`https://floating-tundra-63405.herokuapp.com/user/${user.email}`)
            .then(res => res.json())
            .then(data => setUserInDb(data));
    }, [])

    useEffect(() => {
        if (!isEmpty(userInDb)) {
            if (userInDb.role === 'admin') {
                setAdminChecker(true);
            }
            else {
                setAdminChecker(false);
            }
        }
    }, [userInDb])
    return (
        <div className='lg:grid lg:grid-cols-6 mx-4 lg:mx-16 mt-8'>
            <div className='lg:flex lg:flex-col justify-center lg:justify-start lg:space-y-4 lg:mr-16 mb-8'>
                <CustomLink className='text-sm lg:text-lg ml-6' to='myprofile'>My Profile</CustomLink>
                {
                    adminChecker ? <CustomLink className='text-sm lg:text-lg ml-6' to='manageorders'>Manage Orders</CustomLink> : <CustomLink className='text-sm lg:text-lg ml-6' to='myorders'>My Orders</CustomLink>
                }
                {
                    adminChecker ? <CustomLink className='text-sm lg:text-lg ml-6' to='managestore'>Manage Store</CustomLink> : <CustomLink className='text-sm lg:text-lg ml-6' to='addreview'>Add A Review</CustomLink>
                }
                {
                    adminChecker ? <CustomLink className='text-sm lg:text-lg ml-6' to='manageuser'>Manage User</CustomLink> : ''
                }
            </div>
            <div className='lg:col-span-5'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;