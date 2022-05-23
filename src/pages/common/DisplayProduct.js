import React from 'react';
import { useNavigate } from 'react-router-dom';
import taka from '../../images/taka.png'

const DisplayProduct = ({ product }) => {
    const navigate = useNavigate();
    const navigateToPurchase = () => {
        navigate('/purchase');
    }
    return (
        <div className='border w-[22rem] mx-auto mb-4 lg:mb-0 bg-white hover:drop-shadow-2xl relative rounded-lg'>
            <div className='flex justify-center'>
                <img src={product.img} alt={product.name} />
            </div>
            <div className='px-4 h-72'>
                <h1 className='italic text-lg font-[1000] uppercase'>{product.name}</h1>
                <div className='flex items-center'>
                    <img className='w-4 h-full mr-1' src={taka} alt="" />
                    <h2 className='text-lg'>{product.price} (Per unit)</h2>
                </div>
                <p className='text-sm mt-2'>{product.description}</p>
                <h3 className='mt-2'>Available quantity: {product.available_quantity}</h3>
                <h3 className='mt-2'>Minimum order quantity: {product.minimum_order}</h3>
            </div>
            <div className='flex justify-center mt-4 absolute inset-x-0 bottom-0 mb-2'>
                <button onClick={navigateToPurchase} class="bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 border border-gray-400 rounded shadow">
                    Buy Now
                </button>
            </div>
        </div>
    );
};

export default DisplayProduct;