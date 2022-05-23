import React, { useEffect, useState } from 'react';
import DisplayProduct from '../common/DisplayProduct';

const AllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])

    console.log(products);

    return (
        <div className='mt-8 lg:w-10/12 lg:grid lg:grid-cols-4 mx-auto'>
            {
                products.map(product => <DisplayProduct key={product._id} product={product}></DisplayProduct>)
            }
        </div>
    );
};

export default AllProducts;