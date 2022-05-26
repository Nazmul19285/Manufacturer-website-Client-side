import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import taka from '../../images/taka.png';
import { isEmpty } from '@firebase/util';
import auth from '../../firebase.init';


const ShowOrders = ({ order, cancelOrder }) => {
    const [user] = useAuthState(auth);
    const [userInDb, setUserInDb] = useState({});
    const [adminChecker, setAdminChecker] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/user/${user.email}`)
            .then(res => res.json())
            .then(data => setUserInDb(data));
    }, [])

    useEffect(() => {
        if (!isEmpty(userInDb)) {
            if (userInDb.role === 'admin') {
                setAdminChecker(true);
            }
            else {
                setAdminChecker(false);
            }
        }
    }, [userInDb])
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
                adminChecker ? '': <td>{status === 'Unpaid'? <button onClick={cancelOrder} className='btn btn-xs'>Cancel</button>: null}</td>
            }
        </tr>

    );
};

export default ShowOrders;