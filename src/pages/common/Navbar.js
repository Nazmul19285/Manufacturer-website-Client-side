import React, { useState } from 'react';
import logo from '../../images/logo.png';
import { MenuIcon } from '@heroicons/react/solid';
import CustomLink from './CustomLink';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    }
    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-50 py-4 sticky top-0 z-50">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <a href="/"><img className='w-44 h-full' src={logo} alt="logo" /></a>
                        <MenuIcon
                            className="cursor-pointer w-10 leading-none border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                        </MenuIcon>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto mt-4 lg:mt-0">
                            <li className="nav-item text-lg lg:ml-6">
                                <CustomLink to='/home'>Home</CustomLink>
                            </li>
                            <li className="nav-item text-lg lg:ml-6">
                                <CustomLink to='/store/allproducts'>Store</CustomLink>
                            </li>
                            <li className="nav-item text-lg lg:ml-6">
                                <CustomLink to='/blogs'>Blogs</CustomLink>
                            </li>
                            <li className="nav-item text-lg lg:ml-6">
                                {
                                    user? <CustomLink to='/dashboard'>Dashboard</CustomLink>:''
                                }
                            </li>
                            <li className="nav-item text-lg lg:ml-6">
                                {
                                    user? <button onClick={logout}>Logout</button>
                                    :
                                    <CustomLink to='/login'>Login</CustomLink>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;