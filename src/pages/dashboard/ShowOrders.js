import React from 'react';
import { useNavigate } from 'react-router-dom';
import taka from '../../images/taka.png';

const ShowOrders = ({ order, cancelOrder }) => {
    const { productImage, productName, quantity, totalPrice, status } = order;
    const navigate = useNavigate();
    const goToPayment = () => {
        navigate(`/payment/${order._id}`);
    }
    return (
        <tr>
            <td><img className='w-16' src={productImage} alt={productName} /></td>
            <td>{productName}</td>
            <td>{quantity}</td>
            <td>
                <div className='flex items-center'>
                    <img className='w-4 h-full mr-1' src={taka} alt="" />
                    <h1>{totalPrice}</h1>
                </div>
            </td>
            <td>{status}<br></br>{status === 'Unpaid'? <button onClick={goToPayment} className='btn btn-xs'>Pay</button> : null}</td>
            <td></td>
            <td>{status === 'Unpaid'? <button onClick={cancelOrder} className='btn btn-xs'>Cancel</button>: null}</td>
        </tr>

    );
};

export default ShowOrders;