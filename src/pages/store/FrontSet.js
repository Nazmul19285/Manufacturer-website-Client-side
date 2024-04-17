import React, { useEffect, useState } from 'react';
import DisplayProduct from '../common/DisplayProduct';

const FrontSet = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`https://manufacturer-website-server-side-0oju.onrender.com/category?category=front set`)
            .then(res => res.json())
            .then(data => setProducts(data));

    }, [])
    return (
        <div className='mt-8 lg:w-10/12 lg:grid lg:grid-cols-4 gap-4 mx-auto mb-20'>
            {
                products.length !== 0 ? products.map(product => <DisplayProduct key={product._id} product={product}></DisplayProduct>) : <h1 className='text-center text-3xl font-bold mt-22'>No Product Found</h1>
            }
        </div>
    );
};

export default FrontSet;