import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import taka from '../../images/taka.png';
import { isEmpty } from '@firebase/util';
import auth from '../../firebase.init';
import { reload } from 'firebase/auth';


const ShowOrders = ({ order, setReload, reload }) => {
    const [user] = useAuthState(auth);
    const [userInDb, setUserInDb] = useState({});
    const [adminChecker, setAdminChecker] = useState(false);

    const cancelOrder = () =>{
        const proceed = window.confirm('You want to Cancel? Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/orders/${order._id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    setReload(!reload);
                });
        }
    };

    useEffect(() => {
        fetch(`https://floating-tundra-63405.herokuapp.com/user/${user.email}`)
            .then(res => res.json())
            .then(data => setUserInDb(data));
    }, []);

    useEffect(() => {
        if (!isEmpty(userInDb)) {
            if (userInDb.role === 'admin') {
                setAdminChecker(true);
            }
            else {
                setAdminChecker(false);
            }
        }
    }, [userInDb]);

    const { productImage, productName, quantity, totalPrice, status, transactionId
    } = order;
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
            <td>{status}<br></br>{ !adminChecker && status === 'Unpaid'? <button onClick={goToPayment} className='btn btn-xs'>Pay</button> : null}</td>
            <td>{transactionId}</td>
            {
                <td>{status === 'Unpaid'? <button onClick={cancelOrder} className='btn btn-xs'>Cancel</button>: null}</td>
            }
        </tr>

    );
};

export default ShowOrders;