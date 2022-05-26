import React from 'react';
import { LocationMarkerIcon } from '@heroicons/react/solid'
import facebook from '../../images/facebook.gif';
import github from '../../images/github.gif';
import instagram from '../../images/instagram.gif';
import linkedin from '../../images/linkedin.gif';
import twitter from '../../images/twitter.gif';

import logo from '../../images/logo.png'

import amazonpay from '../../images/paymenticons/amazon-48.png';
import amex from '../../images/paymenticons/american-express-64.png';
import applepay from '../../images/paymenticons/apple-pay-50.png';
import discover from '../../images/paymenticons/discover-48.png';
import googlepay from '../../images/paymenticons/google-pay-64.png';
import mastercard from '../../images/paymenticons/mastercard-48.png';
import stripe from '../../images/paymenticons/stripe-48.png';
import visa from '../../images/paymenticons/visa-50.png';

const Footer = () => {
    return (
        <div className='mt-20'>
            <div className='h-20 mt-8 bg-white drop-shadow-[0_-4px_2px_rgba(0,0,0,0.25)] relative'>
                <div className='flex justify-center absolute -inset-y-5 inset-x-1/4'>
                    <a target="blank" href="https://www.facebook.com/profile.php?id=100009025605636"><img className='w-8 lg:w-12 mr-2 rounded-full hover:border-4' src={facebook} alt="facebook" /></a>
                    <a target="blank" href="https://github.com/Nazmul19285"><img className='w-8 lg:w-12 mr-2 rounded-full hover:border-4' src={github} alt="github" /></a>
                    <a target="blank" href="https://www.instagram.com/nazmulhossain19285/"><img className='w-8 lg:w-12 mr-2 rounded-xl hover:border-4' src={instagram} alt="instagram" /></a>
                    <a target="blank" href="https://www.linkedin.com/in/nazmul19285/"><img className='w-8 lg:w-12 mr-2 rounded-xl hover:border-4' src={linkedin} alt="linkedin" /></a>
                    <a target="blank" href="https://twitter.com/MdNazmu24770112"><img className='w-8 lg:w-12 mr-2 rounded-xl hover:border-4' src={twitter} alt="twitter" /></a>
                </div>
            </div>
            <div className='mt-12'>
                <div className='mx-4 lg:flex justify-center'>
                    <div className=''>
                        <img className='w-32 rotate-[-8deg]' src={logo} alt="" />
                        <div className='flex items-center mt-4 ml-8'>
                            <LocationMarkerIcon className='w-8 text-gray-500 mr-2'></LocationMarkerIcon>
                            <p className='text-sm'>Akota Tower, Road # 8, Block - A,<br></br> 1st Floor, Section - 1, Mirpur, Dhaka-1216</p>
                        </div>
                    </div>
                    <div className="divider lg:hidden"></div>
                    <div className='lg:ml-16'>
                        <h1 className='text-md font-bold mb-4'>BLOG</h1>
                        <a href="https://www.youtube.com/watch?v=FDTWeom14oE" className='text-sm hover:font-bold block' target="blank">Saint Martin Island</a>
                        <a href="https://www.youtube.com/watch?v=9z6UuYwF5fs" className='text-sm hover:font-bold block mt-2' target="blank">Boga Lake</a>
                    </div>
                    <div className="divider lg:hidden"></div>
                    <div className='lg:ml-16'>
                        <h1 className='text-md font-bold mb-4'>ABOUT</h1>
                        <a href="https://www.youtube.com/watch?v=FDTWeom14oE" className='text-sm hover:font-bold block' target="blank">Who We Are</a>
                        <a href="https://www.youtube.com/watch?v=9z6UuYwF5fs" className='text-sm hover:font-bold block mt-2' target="blank">Why We're Different</a>
                        <a href="https://www.youtube.com/watch?v=9z6UuYwF5fs" className='text-sm hover:font-bold block mt-2' target="blank">Our Journey</a>
                        <a href="https://www.youtube.com/watch?v=9z6UuYwF5fs" className='text-sm hover:font-bold block mt-2' target="blank">Customer Reviews</a>
                    </div>
                    <div className="divider lg:hidden"></div>
                    <div className='lg:ml-16'>
                        <h1 className='text-md font-bold mb-4'>SUPPORT</h1>
                        <a href="https://www.youtube.com/watch?v=FDTWeom14oE" className='text-sm hover:font-bold block' target="blank">Contact Us</a>
                        <a href="https://www.youtube.com/watch?v=9z6UuYwF5fs" className='text-sm hover:font-bold block mt-2' target="blank">Shipping + returns</a>
                        <a href="https://www.youtube.com/watch?v=9z6UuYwF5fs" className='text-sm hover:font-bold block mt-2' target="blank">Terms of Service</a>
                        <a href="https://www.youtube.com/watch?v=9z6UuYwF5fs" className='text-sm hover:font-bold block mt-2' target="blank">Refund Policy</a>
                        <a href="https://www.youtube.com/watch?v=9z6UuYwF5fs" className='text-sm hover:font-bold block mt-2' target="blank">Limited Warranty</a>
                        <a href="https://www.youtube.com/watch?v=9z6UuYwF5fs" className='text-sm hover:font-bold block mt-2' target="blank">Privacy Policy</a>
                    </div>
                    <div className="divider lg:hidden"></div>
                    <div className='lg:ml-16'>
                        <h1 className='text-md font-bold mb-4'>PARTNERS</h1>
                        <a href="https://www.youtube.com/watch?v=FDTWeom14oE" className='text-sm hover:font-bold block' target="blank">Find a Store</a>
                        <a href="https://www.youtube.com/watch?v=9z6UuYwF5fs" className='text-sm hover:font-bold block mt-2' target="blank">Wholesale Info</a>
                        <a href="https://www.youtube.com/watch?v=9z6UuYwF5fs" className='text-sm hover:font-bold block mt-2' target="blank">Affiliates</a>
                    </div>
                </div>
                <div className='flex justify-center mt-28 mb-8'>
                    <img className='w-8 ml-2 h-full lg:ml-4' src={amazonpay} alt="amazon pay" />
                    <img className='w-8 ml-2 h-full lg:ml-4' src={amex} alt="amex" />
                    <img className='w-8 ml-2 h-full lg:ml-4' src={applepay} alt="apple pay" />
                    <img className='w-8 ml-2 h-full lg:ml-4' src={discover} alt="discover" />
                    <img className='w-8 ml-2 h-full lg:ml-4' src={googlepay} alt="google pay" />
                    <img className='w-8 ml-2 h-full lg:ml-4' src={mastercard} alt="master card" />
                    <img className='w-8 ml-2 h-full lg:ml-4' src={stripe} alt="stripe" />
                    <img className='w-8 ml-2 h-full lg:ml-4' src={visa} alt="visa" />
                </div>
            </div>
        </div>
    );
};

export default Footer;