import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import taka from '../../images/taka.png';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Purchase = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const { _id } = useParams();
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState();
    const [totalPrice, setTotalPrice] = useState();

    useEffect(() => {
        fetch(`https://floating-tundra-63405.herokuapp.com/products/${_id}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [_id])

    useEffect(() => {
        setQuantity(product.minimum_order);
    }, [product])

    useEffect(() => {
        setTotalPrice(parseFloat(product?.price) * parseInt(quantity));
    }, [quantity,product?.price])

    const quantityUp = () => {
        if (quantity < product.available_quantity) {
            setQuantity(parseInt(quantity) + 1);
        }
    }
    const quantityDown = () => {
        if (quantity > product.minimum_order) {
            setQuantity(parseInt(quantity) - 1);
        }
    }
    const getQuantity = (event) => {
        setQuantity(event.target?.value);
    }
    const resetQuantity = () => {
        if (quantity < product.minimum_order || quantity > product.available_quantity) {
            setQuantity(parseInt(product.minimum_order));
        }
    }
    const placeOrder = (e) => {
        e.preventDefault();
        const data = {
            productId:`${product._id}`,
            productName:`${product.name}`,
            productImage:`${product.img}`,
            quantity:`${quantity}`,
            totalPrice:`${totalPrice}`,
            userName:`${user.displayName}`,
            userEmail:`${user.email}`,
            userPhone:`${e.target[2].value}`,
            userAddress:`${e.target[3].value}`,
            status: 'Unpaid',
            transactionId: '',
        };
        const url = 'https://floating-tundra-63405.herokuapp.com/orders';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            toast('Placing Order');
        });
        setTimeout(() => {  navigate("/dashboard/myorders"); }, 3000);
    }
    return (
        <div className='px-4 lg:flex justify-center lg:mt-12'>
            <div>
                <div className='lg:flex items-center'>
                    <div>
                        <img src={product.img} alt={product.name} />
                    </div>
                    <div className='lg:w-[360px] lg:ml-6'>
                        <h1 className='italic text-lg font-[1000] uppercase'>{product.name}</h1>
                        <div className='flex items-center'>
                            <img className='w-4 h-full mr-1' src={taka} alt="" />
                            <h2 className='text-lg'>{product.price} (Per unit)</h2>
                        </div>
                        <p className='text-sm mt-2'>{product.description}</p>
                        <h3 className='mt-2'>Available quantity: {product.available_quantity}</h3>
                        <h3 className='mt-2'>Minimum order quantity: {product.minimum_order}</h3>
                    </div>
                </div>
                <div className='mt-8 lg:flex'>
                    <div className='flex w-64 justify-between items-center px-8'>
                        <h1 className='text-gray-500'>Quantity</h1>
                        <div>
                            <button onClick={quantityDown} className='text-2xl text-gray-500 bg-purple-100 w-8 h-8 hover:bg-gray-300 hover:text-white'>-</button>
                            <input onBlur={resetQuantity} onChange={getQuantity} className='w-8 h-8 pl-1' value={quantity}></input>
                            <button onClick={quantityUp} className='text-2xl text-gray-500 bg-purple-100 w-8 h-8 hover:bg-gray-300 hover:text-white'>+</button>
                        </div>
                    </div>
                    <div className='w-64 flex justify-center items-center mt-8 lg:mt-0 lg:ml-8'>
                        <h1 className='text-2xl font-bold mr-4'>Total =</h1>
                        <div className='flex items-center'>
                            <img className='w-5 h-full mr-1' src={taka} alt="" />
                            <h2 className='text-2xl font-bold'>{totalPrice}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="divider"></div>
            <div className='w-[360px] bg-white lg:ml-12 rounded-xl drop-shadow-lg'>
                <div className='pl-5 py-8'>
                    <h1 className='text-2xl mb-4'>Delivery Information</h1>
                    <form onSubmit={placeOrder}>
                        <label className="label label-text">Your Name</label>
                        <input disabled className="input input-bordered w-full max-w-xs" type="text" value={user?.displayName} />
                        <label className="label label-text">Your Email</label>
                        <input disabled className="input input-bordered w-full max-w-xs" type="text" value={user?.email} />
                        <label className="label label-text">Phone Number*</label>
                        <input className="input input-bordered w-full max-w-xs appearance-none" placeholder='Phone Number' type="number" required />
                        <label className="label label-text">Address*</label>
                        <input className="input input-bordered w-full max-w-xs appearance-none" placeholder='Address' type="text" required />
                        <input className='btn btn-outline btn-info text-black w-full max-w-xs mt-4' type="submit" value="PLACE ORDER" />
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Purchase;