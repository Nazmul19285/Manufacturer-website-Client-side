import React, { useEffect, useState } from 'react';
import ShowOrders from './ShowOrders';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect( () => {
        fetch('https://floating-tundra-63405.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrders(data));
    },[])
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className=''>Image</th>
                            <th className=''>Name</th>
                            <th className=''>Quantity</th>
                            <th className=''>Price</th>
                            <th className=''>Status</th>
                            <th>Transaction ID</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <ShowOrders key={order._id} order={order}></ShowOrders>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default ManageOrders;