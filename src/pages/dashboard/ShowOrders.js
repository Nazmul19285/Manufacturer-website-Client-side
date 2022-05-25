import React from 'react';
import taka from '../../images/taka.png';

const ShowOrders = ({ order, cancelOrder }) => {
    const { productImage, productName, quantity, totalPrice, status } = order;
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
            <td>{status}</td>
            <td><button onClick={cancelOrder} className='btn btn-xs'>Cancel</button></td>
        </tr>

    );
};

export default ShowOrders;