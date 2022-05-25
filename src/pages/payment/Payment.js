import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import taka from '../../images/taka.png';

const Payment = () => {
    const {id} = useParams();
    const [order, setOrder] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/orders/${id}`)
            .then(res => res.json())
            .then(data => setOrder(data));
    }, [id])
    return (
        <div className='mt-8'>
            <div className='bg-white w-[360px] drop-shadow px-6 pb-8 mx-4'>
                <h1 className='text-2xl font-bold text-center'>Order Summary</h1>
                <img src={order.productImage} alt="" />
                <h1>{order.productName}</h1>
                <h1 className='mt-2'>Quantity: {order.quantity}</h1>
                <h1 className='flex items-center text-lg mt-6'>Total Amount: 
                    <img className='w-4 h-full mr-1 ml-4' src={taka} alt="" />
                    <h1>{order.totalPrice}</h1>
                </h1>
            </div>
            <div></div>
        </div>
    );
};

export default Payment;