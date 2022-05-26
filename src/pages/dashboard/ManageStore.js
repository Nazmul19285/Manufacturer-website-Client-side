import React, { useEffect, useState } from 'react';
import CustomLink from '../common/CustomLink';
import ManageProducts from './ManageProducts';

const ManageStore = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div>
            <CustomLink to='/addproduct'>Add a Product</CustomLink>
            <div className='mt-8 lg:w-10/12 lg:grid lg:grid-cols-3 gap-4 mx-auto mb-20'>
                {
                    products.map(product => <ManageProducts key={product._id} product={product}></ManageProducts>)
                }
            </div>
        </div>
    );
};

export default ManageStore;