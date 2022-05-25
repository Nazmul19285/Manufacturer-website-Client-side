import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import taka from '../../images/taka.png';
import CheckoutForm from '../common/CheckoutForm';

const stripePromise = loadStripe('pk_test_51L3InRHRgRz7M7dHXAV21bv8qxEtUDgz4nr9OlRc9CSqRkInL0x8w0IGvZoPu3EnyI9BMccjPxtivEgjk2Rqwx1J00hl6VVQbR');

const Payment = () => {
    const { id } = useParams();
    const [order, setOrder] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/orders/${id}`)
            .then(res => res.json())
            .then(data => setOrder(data));
    }, [id])
    return (
        <div className='mt-8 lg:flex'>
            <div className='bg-white w-[360px] drop-shadow px-6 pb-8 mx-4'>
                <h1 className='text-2xl font-bold text-center'>Order Summary</h1>
                <img src={order.productImage} alt="" />
                <h1>{order.productName}</h1>
                <h1 className='mt-2'>Quantity: {order.quantity}</h1>
                <h1 className='flex items-center text-lg mt-6'>Total Amount:
                    <img className='w-4 h-full mr-1 ml-4' src={taka} alt="" />
                    <p>{order.totalPrice}</p>
                </h1>
            </div>
            <div className='w-[360px] bg-white drop-shadow-lg p-8 mx-4'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm order={order}></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;