import React from 'react';
import tap from '../../images/tap-gesture.gif';
import payment from '../../images/online-payment.gif';
import delivery from '../../images/delivery.gif'

const OrderProcess = () => {
    return (
        <div className='mt-12 mb-20'>
            <h1 className='text-center text-xl mt-3 font-medium mb-8'>How to order from Pedaler ?</h1>
            <div className='flex justify-center'>
                <div className="stats stats-vertical lg:stats-horizontal shadow">
                    <div className="stat py-8 flex">
                        <img className='lg:w-20 lg:h-20 w-12 h-12' src={tap} alt="" />
                        <div>
                            <h1 className='text-center text-2xl lg:text-4xl font-bold mb-6 text-yellow-900'>Place Order</h1>
                            <p className='text-center lg:text-xl text-gray-500'>Chose Your Desired Product and</p>
                            <p className='text-center lg:text-xl text-gray-500'>Press the Buy Now Button</p>
                        </div>
                    </div>

                    <div className="stat py-8 flex">
                        <img className='lg:w-20 lg:h-20 w-12 h-12' src={payment} alt="" />
                        <div>
                            <h1 className='text-center text-2xl lg:text-4xl font-bold mb-6 text-gray-600'>Easy Payment</h1>
                            <p className='text-center lg:text-xl text-gray-500'>Pay at Your Convenience From</p>
                            <p className='text-center lg:text-xl text-gray-500'>Where Ever You Are</p>
                        </div>
                    </div>

                    <div className="stat py-8 flex">
                        <img className='lg:w-20 lg:h-20 w-12 h-12' src={delivery} alt="" />
                        <div>
                            <h1 className='text-center text-2xl lg:text-4xl font-bold mb-6 text-blue-900'>Fast Delivery</h1>
                            <p className='text-center lg:text-xl text-gray-600'>Get Your Order Delivered Within</p>
                            <p className='text-center lg:text-xl text-gray-600'>10 Days at Your Place</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OrderProcess;