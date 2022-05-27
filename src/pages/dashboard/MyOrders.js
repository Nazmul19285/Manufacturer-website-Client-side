import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import ShowOrders from './ShowOrders';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`https://floating-tundra-63405.herokuapp.com/userorders?email=${user.email}`)
                .then(res => res.json())
                .then(data => setOrders(data));
        }
    }, [user])
    const cancelOrder = (id) =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `https://floating-tundra-63405.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(result => {
                if (user) {
                    fetch(`https://floating-tundra-63405.herokuapp.com/userorders?email=${user.email}`)
                        .then(res => res.json())
                        .then(data => setOrders(data));
                }
            })
        }
    }
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
                            orders.map(order => <ShowOrders key={order._id} order={order} cancelOrder={() => cancelOrder(order._id)}></ShowOrders>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default MyOrders;